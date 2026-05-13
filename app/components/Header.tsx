"use client";

import { useEffect, useState } from "react";
import { navSections } from "@/lib/site";
import { Close, Menu } from "./Icons";
import { SiteLogo } from "./SiteLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass =
    "text-sm font-medium tracking-wide uppercase text-leaf-900/80 hover:text-barn-600 transition-colors";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 border-b border-leaf-900/8 bg-cream backdrop-blur-md transition-[box-shadow,background-color] duration-300",
        scrolled
          ? "shadow-[0_1px_0_rgba(35,55,25,0.06)]"
          : "shadow-none",
      ].join(" ")}
    >
      <nav
        className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="flex items-center shrink-0 text-leaf-900 hover:opacity-90 transition-opacity"
        >
          <SiteLogo
            className="h-[80px] max-w-[18rem] sm:max-w-[22rem]"
            priority
            sizes="(min-width: 640px) 360px, 280px"
          />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={linkClass}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="hidden md:inline-flex items-center rounded-full bg-leaf-700 px-5 py-2 text-sm font-medium text-cream hover:bg-leaf-900 transition-colors"
        >
          Visit the Barn
        </a>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-leaf-900 hover:bg-leaf-900/5"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-cream">
          <div className="flex h-[80px] items-center justify-between px-5">
            <a
              href="#top"
              onClick={() => setMobileOpen(false)}
              className="flex items-center shrink-0 text-leaf-900"
            >
              <SiteLogo
                className="h-[80px] max-w-[18rem]"
                sizes="280px"
              />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-leaf-900 hover:bg-leaf-900/5"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <Close className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 pt-6">
            {navSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-2xl px-4 py-4 font-display text-3xl text-leaf-900 hover:bg-leaf-100"
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#visit"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center rounded-full bg-leaf-700 px-6 py-3 text-base font-medium text-cream"
              >
                Visit the Barn
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
