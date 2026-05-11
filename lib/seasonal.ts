/**
 * Seasonal produce data for Stoney Creek / Niagara region.
 *
 * Each item lists the months (1-12) when it is typically available
 * fresh in the barn. The "What's in Season" section reads `currentMonth`
 * and filters this list automatically.
 */

export type Produce = {
  name: string;
  category: "Fruit" | "Vegetable" | "Herbs & More";
  /** 1 = January, 12 = December */
  months: number[];
  emoji: string;
  blurb: string;
};

export const produce: Produce[] = [
  // --- Spring ---
  {
    name: "Rhubarb",
    category: "Vegetable",
    months: [5, 6],
    emoji: "🌱",
    blurb: "The first taste of the season — tart, ruby stalks for pies and jam.",
  },
  {
    name: "Asparagus",
    category: "Vegetable",
    months: [5, 6],
    emoji: "🥬",
    blurb: "Snapped fresh from the field that morning.",
  },
  {
    name: "Strawberries",
    category: "Fruit",
    months: [6, 7],
    emoji: "🍓",
    blurb: "Sun-warmed and sweet — the unmistakable flavour of Ontario June.",
  },

  // --- Early Summer ---
  {
    name: "Sweet Cherries",
    category: "Fruit",
    months: [6, 7, 8],
    emoji: "🍒",
    blurb: "Plump Niagara cherries straight off our trees.",
  },
  {
    name: "Sour Cherries",
    category: "Fruit",
    months: [7, 8],
    emoji: "🍒",
    blurb: "Made for pies, preserves, and grandma's recipes.",
  },
  {
    name: "Raspberries",
    category: "Fruit",
    months: [7, 8, 9],
    emoji: "🫐",
    blurb: "Hand-picked daily, perfect for snacking or jam.",
  },
  {
    name: "Blueberries",
    category: "Fruit",
    months: [7, 8],
    emoji: "🫐",
    blurb: "From neighbouring farms we know and trust.",
  },

  // --- High Summer ---
  {
    name: "Peaches",
    category: "Fruit",
    months: [7, 8, 9],
    emoji: "🍑",
    blurb: "The pride of Niagara — juicy, fragrant, and ripened on the branch.",
  },
  {
    name: "Nectarines",
    category: "Fruit",
    months: [7, 8, 9],
    emoji: "🍑",
    blurb: "Smooth-skinned cousins to the peach, with the same sweet bite.",
  },
  {
    name: "Plums",
    category: "Fruit",
    months: [8, 9],
    emoji: "🍑",
    blurb: "From sun-drop yellows to deep purple — varieties all summer long.",
  },
  {
    name: "Field Tomatoes",
    category: "Vegetable",
    months: [7, 8, 9, 10],
    emoji: "🍅",
    blurb: "Real summer tomatoes — heirlooms, beefsteaks, and romas.",
  },
  {
    name: "Sweet Corn",
    category: "Vegetable",
    months: [7, 8, 9],
    emoji: "🌽",
    blurb: "Picked the morning you'll eat it. Nothing else compares.",
  },
  {
    name: "Cucumbers",
    category: "Vegetable",
    months: [7, 8, 9],
    emoji: "🥒",
    blurb: "Field, English, and pickling cukes by the basket.",
  },
  {
    name: "Zucchini",
    category: "Vegetable",
    months: [7, 8, 9],
    emoji: "🥒",
    blurb: "Tender squash for grilling, baking, or zoodling.",
  },
  {
    name: "Beans",
    category: "Vegetable",
    months: [7, 8, 9],
    emoji: "🫘",
    blurb: "Snap-fresh green and yellow beans from the field.",
  },
  {
    name: "Peppers",
    category: "Vegetable",
    months: [8, 9, 10],
    emoji: "🫑",
    blurb: "Sweet bells and hot varieties — every colour of the rainbow.",
  },

  // --- Fall ---
  {
    name: "Apples",
    category: "Fruit",
    months: [8, 9, 10, 11, 12],
    emoji: "🍎",
    blurb: "Honeycrisp, Gala, Empire, Mac and more — fresh from the orchard.",
  },
  {
    name: "Pears",
    category: "Fruit",
    months: [8, 9, 10, 11],
    emoji: "🍐",
    blurb: "Bartlett, Bosc, and Anjou — perfect for pies or eating out of hand.",
  },
  {
    name: "Concord Grapes",
    category: "Fruit",
    months: [9, 10],
    emoji: "🍇",
    blurb: "The smell of fall — heirloom Niagara grapes, ready for jelly.",
  },
  {
    name: "Pumpkins",
    category: "Vegetable",
    months: [9, 10, 11],
    emoji: "🎃",
    blurb: "Pie pumpkins, sugar pumpkins, and giants for carving.",
  },
  {
    name: "Squash",
    category: "Vegetable",
    months: [9, 10, 11, 12],
    emoji: "🎃",
    blurb: "Butternut, acorn, spaghetti, and delicata — built for cool nights.",
  },
  {
    name: "Root Vegetables",
    category: "Vegetable",
    months: [9, 10, 11, 12, 1, 2, 3],
    emoji: "🥕",
    blurb: "Carrots, beets, parsnips and turnips — sweetened by frost.",
  },
  {
    name: "Cabbage",
    category: "Vegetable",
    months: [8, 9, 10, 11, 12],
    emoji: "🥬",
    blurb: "Green, red, and savoy heads — built to last through winter.",
  },
  {
    name: "Onions & Garlic",
    category: "Vegetable",
    months: [8, 9, 10, 11, 12, 1, 2, 3, 4],
    emoji: "🧄",
    blurb: "Cured and storage-ready — the foundation of every great meal.",
  },
  {
    name: "Potatoes",
    category: "Vegetable",
    months: [8, 9, 10, 11, 12, 1, 2, 3, 4, 5],
    emoji: "🥔",
    blurb: "Yukon Gold, red, and russets — local through the cold months.",
  },

  // --- Year-round / Pantry ---
  {
    name: "Honey & Maple",
    category: "Herbs & More",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    emoji: "🍯",
    blurb: "Local honey and Ontario maple syrup, all year long.",
  },
  {
    name: "Preserves & Jams",
    category: "Herbs & More",
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    emoji: "🫙",
    blurb: "Summer in a jar — peach, strawberry, raspberry and more.",
  },
];

const SEASON_BY_MONTH: Record<number, { name: string; blurb: string }> = {
  1: { name: "Winter", blurb: "Stored harvests, root cellar treasures, and pantry staples." },
  2: { name: "Winter", blurb: "Stored harvests, root cellar treasures, and pantry staples." },
  3: { name: "Late Winter", blurb: "Maple sap is running. The first whispers of spring." },
  4: { name: "Spring", blurb: "Greenhouses come alive and the fields begin to wake." },
  5: { name: "Spring", blurb: "Asparagus and rhubarb lead the parade." },
  6: { name: "Early Summer", blurb: "Strawberries and the first sweet cherries arrive." },
  7: { name: "Mid-Summer", blurb: "The barn is full — peaches, berries, corn, and tomatoes." },
  8: { name: "Peak Summer", blurb: "The richest weeks of the year. Everything ripening at once." },
  9: { name: "Harvest", blurb: "Apples, pears, and the first squash of the season." },
  10: { name: "Autumn", blurb: "Pumpkins, grapes, and crisp orchard apples." },
  11: { name: "Late Autumn", blurb: "Storage crops and squash carry us into the cold." },
  12: { name: "Winter", blurb: "Apples, root vegetables, and our farm-made preserves." },
};

/** Timezone the farm operates in. Used so "in season" reflects local time
 *  in Stoney Creek regardless of where the site is rendered or visited from. */
export const FARM_TIMEZONE = "America/Toronto";

export function getCurrentMonth(timeZone: string = FARM_TIMEZONE): number {
  // Returns 1-12 in the farm's local timezone (defaults to America/Toronto).
  const monthLabel = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    month: "numeric",
  }).format(new Date());
  return parseInt(monthLabel, 10);
}

export function getMonthName(month: number): string {
  return new Date(2000, month - 1, 1).toLocaleString("en-CA", {
    month: "long",
  });
}

export function getSeasonForMonth(month: number) {
  return SEASON_BY_MONTH[month] ?? SEASON_BY_MONTH[1];
}

export function getInSeason(month: number): Produce[] {
  return produce.filter((item) => item.months.includes(month));
}
