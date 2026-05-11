import { getCurrentMonth } from "@/lib/seasonal";
import { InSeasonClient } from "./InSeasonClient";

// Re-evaluate at most once per hour so “today’s” month stays correct at the farm.
export const revalidate = 3600;

export function InSeason() {
  const currentMonth = getCurrentMonth();
  return <InSeasonClient currentMonth={currentMonth} />;
}
