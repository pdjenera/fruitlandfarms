"use client";

import { useState } from "react";
import {
  getInSeason,
  getMonthName,
  getSeasonForMonth,
} from "@/lib/seasonal";

type InSeasonClientProps = {
  /** Calendar month (1–12) for “today” at the farm — from server / Toronto TZ */
  currentMonth: number;
};

/** Barn open May–November; December–April we don’t show month pills. */
const OPEN_MONTHS = [5, 6, 7, 8, 9, 10, 11] as const;

function defaultOpenMonth(currentMonth: number): number {
  if ((OPEN_MONTHS as readonly number[]).includes(currentMonth)) {
    return currentMonth;
  }
  return 5;
}

export function InSeasonClient({ currentMonth }: InSeasonClientProps) {
  const [selectedMonth, setSelectedMonth] = useState(() =>
    defaultOpenMonth(currentMonth),
  );

  const items = getInSeason(selectedMonth);
  const season = getSeasonForMonth(selectedMonth);
  const monthName = getMonthName(selectedMonth);
  const todayIsOpenSeason = (OPEN_MONTHS as readonly number[]).includes(
    currentMonth,
  );
  const isViewingCurrentMonth =
    todayIsOpenSeason && selectedMonth === currentMonth;

  return (
    <section
      id="in-season"
      className="relative py-12 sm:py-16 bg-leaf-900 text-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_25%_30%,_white_1px,_transparent_1.5px),radial-gradient(circle_at_75%_70%,_white_1px,_transparent_1.5px)] bg-[size:38px_38px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-cream/80">
              <span className="h-px w-10 bg-harvest-400" />
              <span className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em]">
                In the Barn · {monthName}
              </span>
            </p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
              What&rsquo;s in season{" "}
              {isViewingCurrentMonth ? (
                <span className="italic text-harvest-400 font-light">
                  right now
                </span>
              ) : (
                <span className="italic text-harvest-400 font-light">
                  in {monthName}
                </span>
              )}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-cream/80">
              {season.blurb}{" "}
              {isViewingCurrentMonth ? (
                <>
                  Visit us this week for the freshest of what Ontario&rsquo;s{" "}
                  {season.name.toLowerCase()} has to offer.
                </>
              ) : todayIsOpenSeason ? (
                <>
                  Here&rsquo;s what we typically have around{" "}
                  <span className="font-medium text-cream">{monthName}</span> —
                  peek at another month or plan your next visit.
                </>
              ) : (
                <>
                  We reopen in May. Here&rsquo;s what we typically carry in{" "}
                  <span className="font-medium text-cream">{monthName}</span> —
                  tap other months to plan your trip.
                </>
              )}
            </p>
          </div>

          <div
            className="flex flex-wrap gap-1.5"
            role="group"
            aria-label="Choose a month from May through November to see typical barn picks"
          >
            {OPEN_MONTHS.map((m) => {
              const active = m === selectedMonth;
              const name = getMonthName(m);
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setSelectedMonth(m)}
                  aria-pressed={active}
                  aria-label={`Show produce for ${name}`}
                  title={name}
                  className={[
                    "inline-flex h-9 min-w-9 cursor-pointer items-center justify-center rounded-full px-3 text-[11px] font-medium uppercase tracking-wider transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-harvest-400 focus-visible:ring-offset-2 focus-visible:ring-offset-leaf-900",
                    active
                      ? "bg-barn-500 text-cream shadow-md shadow-leaf-900/30"
                      : "bg-cream/10 text-cream/70 ring-1 ring-cream/15 hover:bg-cream/20 hover:text-cream",
                  ].join(" ")}
                >
                  {name.slice(0, 3)}
                </button>
              );
            })}
          </div>
        </div>

        {items.length === 0 ? (
          <p className="mt-16 text-cream/80">
            We&rsquo;re between harvests for {monthName}. Check back soon — or
            visit us for our farm-made preserves.
          </p>
        ) : (
          <ul className="mt-14 grid gap-4 sm:gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => (
              <li
                key={p.name}
                className="group relative flex flex-col rounded-3xl bg-cream text-leaf-900 p-5 sm:p-6 ring-1 ring-cream/0 hover:ring-barn-400/50 transition-all hover:-translate-y-0.5"
              >
                <span aria-hidden className="text-4xl sm:text-5xl">
                  {p.emoji}
                </span>
                <div className="mt-3 flex items-center gap-2">
                  <h3 className="font-display text-xl sm:text-2xl leading-tight">
                    {p.name}
                  </h3>
                </div>
                <p className="mt-1.5 text-[11px] tracking-[0.16em] uppercase text-leaf-700/80">
                  {p.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-leaf-900/75">
                  {p.blurb}
                </p>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 text-sm text-cream/60">
          Open May–November. Tap a month for typical barn picks. During the
          season, {todayIsOpenSeason ? "the current month is shown first" : "May is shown so you can plan ahead"}.
          Availability shifts with the weather and the harvest — call ahead if
          you&rsquo;re after something specific.
        </p>
      </div>
    </section>
  );
}
