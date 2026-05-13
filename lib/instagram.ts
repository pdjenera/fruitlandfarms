/**
 * Fallback Instagram tiles when Behold and the Graph API both fail or return
 * no posts.
 */

export type InstagramPost = {
  id: string;
  caption: string;
  /** Local image path (in /public) or an absolute URL */
  image: string;
  /** Direct link to the post on instagram.com */
  href: string;
};

export const posts: InstagramPost[] = [
  {
    id: "1",
    caption: "Today's basket — peaches, plums, and the season's first pears.",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "2",
    caption: "Sweet corn picked at sunrise. Doesn't get any fresher.",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "3",
    caption: "Strawberry season is officially open in the barn.",
    image:
      "https://images.unsplash.com/photo-1518635017498-87f514b751ba?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "4",
    caption: "Apple harvest in full swing. Honeycrisp this week.",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "5",
    caption: "Pumpkins are starting to roll in. Fall is almost here.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "6",
    caption: "Heirloom tomatoes — the colours of August.",
    image:
      "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "7",
    caption: "Fresh-picked cherries — Niagara summer on the stem.",
    image:
      "https://images.unsplash.com/photo-1528821128474-27f963b062bf?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
  {
    id: "8",
    caption: "Field tomatoes — sun-ripened and ready for your kitchen.",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=70",
    href: "https://www.instagram.com/fruitlandfarms/",
  },
];
