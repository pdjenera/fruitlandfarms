import { site } from "@/lib/site";

/**
 * Shared visual for opengraph-image.tsx and twitter-image.tsx.
 * Not a route itself — file conventions only trigger on exact names
 * ("opengraph-image", "twitter-image"), so this plain module is safe here.
 */
export function SocialImageContent() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#152a1c",
        backgroundImage:
          "radial-gradient(circle at 82% 22%, rgba(212,175,55,0.18), transparent 55%)",
        padding: "88px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div style={{ width: 56, height: 10, backgroundColor: "#d4af37" }} />
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#e4c66d",
          }}
        >
          {`${site.region} · Est. ${site.established}`}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 108,
          fontWeight: 700,
          color: "#f3e9c8",
          marginTop: 28,
          lineHeight: 1.05,
        }}
      >
        {site.name}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: 36,
          color: "#f3e9c8",
          opacity: 0.85,
          marginTop: 24,
          maxWidth: 980,
          lineHeight: 1.35,
        }}
      >
        {`Farm Market · Fruit Stand · Farmers Market — fresh Ontario fruits and vegetables since ${site.established}.`}
      </div>
    </div>
  );
}
