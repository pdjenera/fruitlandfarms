import type { InstagramPost } from "./instagram";
import { posts as fallbackPosts } from "./instagram";
import { site } from "./site";

/**
 * Instagram feed — loads in this order:
 * 1. Behold JSON (https://behold.so) — set BEHOLD_FEED_URL or use built-in default.
 *    In the Behold dashboard, set “Number of Posts” to at least six so the grid can
 *    fill (plan caps still apply).
 * 2. Instagram Graph API — INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_BUSINESS_ACCOUNT_ID
 * 3. Static placeholders in ./instagram.ts
 *
 * Live sources are sorted by post timestamp (newest first), then trimmed to six.
 */

const DEFAULT_BEHOLD_FEED_URL =
  "https://feeds.behold.so/gF83Y3noubBgGRbfuwWV";

const GRAPH_VERSION = "v21.0";

const FETCH_REVALIDATE_SECONDS = 900;
/** Posts shown in the Instagram grid (3 columns × 2 rows on larger breakpoints). */
export const INSTAGRAM_FEED_LIMIT = 6;

/** Graph: fetch extra items so skipping media without a preview still yields six recent posts. */
const GRAPH_MEDIA_FETCH_LIMIT = 18;

function parseIgTimestamp(value: string | undefined): number {
  if (!value?.trim()) return 0;
  const parsed = Date.parse(value);
  if (Number.isFinite(parsed)) return parsed;
  const asNum = Number(value);
  // Graph may return UNIX seconds as a numeric string
  if (Number.isFinite(asNum) && asNum > 0) return asNum * 1000;
  return 0;
}

// --- Behold ------------------------------------------------------------------

type BeholdSizes = {
  small?: { mediaUrl?: string };
  medium?: { mediaUrl?: string };
  large?: { mediaUrl?: string };
  full?: { mediaUrl?: string };
};

type BeholdImageSource = {
  mediaType?: string;
  thumbnailUrl?: string;
  mediaUrl?: string;
  sizes?: BeholdSizes;
};

type BeholdPost = BeholdImageSource & {
  id: string;
  timestamp?: string;
  permalink?: string;
  caption?: string;
  prunedCaption?: string;
  children?: BeholdImageSource[];
};

type BeholdResponse = {
  posts?: BeholdPost[];
};

function pickBeholdImageUrlFromSource(src: BeholdImageSource): string | null {
  const fromSizes =
    src.sizes?.medium?.mediaUrl ??
    src.sizes?.large?.mediaUrl ??
    src.sizes?.full?.mediaUrl ??
    src.sizes?.small?.mediaUrl;
  if (fromSizes) return fromSizes;
  if (src.thumbnailUrl) return src.thumbnailUrl;
  if (src.mediaType === "IMAGE" && src.mediaUrl) return src.mediaUrl;
  return null;
}

function pickBeholdImageUrl(post: BeholdPost): string | null {
  const direct = pickBeholdImageUrlFromSource(post);
  if (direct) return direct;
  if (post.mediaType === "CAROUSEL_ALBUM" && post.children?.length) {
    for (const child of post.children) {
      const url = pickBeholdImageUrlFromSource(child);
      if (url) return url;
    }
  }
  return null;
}

function truncateCaption(text: string, max = 180): string {
  const t = text.trim().replace(/\s+/g, " ");
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}

async function fetchFromBehold(
  feedUrl: string,
): Promise<InstagramPost[] | null> {
  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: FETCH_REVALIDATE_SECONDS },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.warn("[instagram] Behold HTTP", res.status, res.statusText);
      }
      return null;
    }

    const body = (await res.json()) as BeholdResponse;
    const sorted = [...(body.posts ?? [])].sort(
      (a, b) => parseIgTimestamp(b.timestamp) - parseIgTimestamp(a.timestamp),
    );
    const rows: InstagramPost[] = [];

    for (const post of sorted) {
      const image = pickBeholdImageUrl(post);
      if (!image) continue;

      const raw = post.prunedCaption ?? post.caption ?? "";
      rows.push({
        id: post.id,
        caption: raw
          ? truncateCaption(raw)
          : "View this post on Instagram",
        image,
        href: post.permalink ?? site.social.instagram,
      });
      if (rows.length >= INSTAGRAM_FEED_LIMIT) break;
    }

    return rows.length > 0 ? rows : null;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[instagram] Behold fetch failed:", err);
    }
    return null;
  }
}

// --- Instagram Graph API -----------------------------------------------------

type IgMediaNode = {
  id: string;
  caption?: string;
  /** ISO 8601 from Graph API — used to keep the grid in newest-first order. */
  timestamp?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  permalink: string;
  thumbnail_url?: string;
  children?: {
    data?: Array<{
      media_type: string;
      media_url?: string;
    }>;
  };
};

type IgMediaResponse = {
  data?: IgMediaNode[];
  error?: { message: string; code?: number };
};

function pickGraphPreviewUrl(node: IgMediaNode): string | null {
  if (node.media_type === "VIDEO") {
    return node.thumbnail_url ?? node.media_url ?? null;
  }
  if (node.media_type === "CAROUSEL_ALBUM") {
    const first = node.children?.data?.[0];
    if (first?.media_url) return first.media_url;
    return node.media_url ?? null;
  }
  return node.media_url ?? null;
}

async function fetchFromGraphApi(): Promise<InstagramPost[] | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_BUSINESS_ACCOUNT_ID;

  if (!token?.trim() || !userId?.trim()) {
    return null;
  }

  const fields = [
    "id",
    "caption",
    "timestamp",
    "media_type",
    "media_url",
    "permalink",
    "thumbnail_url",
    "children{media_type,media_url}",
  ].join(",");

  const url = new URL(
    `https://graph.facebook.com/${GRAPH_VERSION}/${encodeURIComponent(userId)}/media`,
  );
  url.searchParams.set("fields", fields);
  url.searchParams.set("limit", String(GRAPH_MEDIA_FETCH_LIMIT));
  url.searchParams.set("access_token", token);

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: FETCH_REVALIDATE_SECONDS },
    });

    const body = (await res.json()) as IgMediaResponse;

    if (!res.ok || body.error) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          "[instagram] Graph API",
          body.error?.message ?? res.statusText,
        );
      }
      return null;
    }

    const sorted = [...(body.data ?? [])].sort(
      (a, b) => parseIgTimestamp(b.timestamp) - parseIgTimestamp(a.timestamp),
    );
    const rows: InstagramPost[] = [];
    for (const node of sorted) {
      const image = pickGraphPreviewUrl(node);
      if (!image) continue;
      rows.push({
        id: node.id,
        caption: node.caption
          ? truncateCaption(node.caption)
          : "View this post on Instagram",
        image,
        href: node.permalink || site.social.instagram,
      });
      if (rows.length >= INSTAGRAM_FEED_LIMIT) break;
    }

    return rows.length > 0 ? rows : null;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[instagram] Graph fetch failed:", err);
    }
    return null;
  }
}

// --- Public ------------------------------------------------------------------

export type InstagramFeedSource = "behold" | "graph" | "fallback";

export async function getInstagramPosts(): Promise<{
  posts: InstagramPost[];
  source: InstagramFeedSource;
}> {
  const beholdUrl =
    process.env.BEHOLD_FEED_URL?.trim() || DEFAULT_BEHOLD_FEED_URL;

  const fromBehold = await fetchFromBehold(beholdUrl);
  if (fromBehold) {
    return { posts: fromBehold, source: "behold" };
  }

  const fromGraph = await fetchFromGraphApi();
  if (fromGraph) {
    return { posts: fromGraph, source: "graph" };
  }

  return {
    posts: fallbackPosts.slice(0, INSTAGRAM_FEED_LIMIT),
    source: "fallback",
  };
}
