import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  BadgeCheck,
  ChevronDown,
  Clock,
  Globe,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
} from "lucide-react";
import Logo from "./Logo";
import { jobCategories } from "../../data/categories";

const featuredLinks = [
  { label: "All Jobs", to: "/jobs" },
  { label: "Engineering Jobs", to: "/jobs/engineering" },
  { label: "IT Jobs", to: "/jobs/it" },
  { label: "Safety Jobs", to: "/jobs/safety" },
];

const megaSections = [
  {
    title: "Engineering & Technical",
    slugs: ["engineering", "it", "technicians", "oil-gas"],
  },
  {
    title: "Construction & Safety",
    slugs: ["construction", "safety", "healthcare", "logistics"],
  },
  {
    title: "Business & Admin",
    slugs: ["finance", "sales-marketing", "admin-hr", "education"],
  },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-brand-50 text-brand-700"
      : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
  }`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [catsOpen, setCatsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDrop = () => {
    clearTimeout(closeTimer.current!);
    setDropOpen(true);
  };

  const closeDrop = () => {
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  // Close dropdown on outside click / Escape
  useEffect(() => {
    if (!dropOpen) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        dropRef.current && !dropRef.current.contains(target) &&
        megaRef.current && !megaRef.current.contains(target)
      ) {
        setDropOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropOpen]);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/jobs?q=${encodeURIComponent(q)}`);
    setSearchOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top info bar ────────────────────────────── */}
      <div className="hidden bg-brand-950 text-brand-100 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs font-medium sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold-400" />
              Riyadh, Saudi Arabia
            </span>
            <a
              href="mailto:info@ksajobs24.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 text-gold-400" />
              info@ksajobs24.com
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-gold-400" />
              Jobs updated daily
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-3.5 text-gold-400" />
              100% free — apply without sign-up
            </span>
            <span className="h-3.5 w-px bg-brand-100/25" aria-hidden />
            <div className="inline-flex items-center gap-1.5">
              <Globe className="size-3.5 text-gold-400" />
              <button className="font-semibold text-white">EN</button>
              <span className="text-brand-100/40">|</span>
              <button className="transition-colors hover:text-white">العربية</button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main bar ────────────────────────────────── */}
      <div
        className={`border-b-2 border-transparent bg-white [border-image:linear-gradient(to_right,#fbbf24,#079d55,#fbbf24)_1] transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-slate-900/5" : ""
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {featuredLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/jobs"}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Categories trigger */}
            <div
              ref={dropRef}
              className="relative"
              onMouseEnter={openDrop}
              onMouseLeave={closeDrop}
            >
              <button
                onClick={() => setDropOpen((v) => !v)}
                aria-expanded={dropOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                  dropOpen ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                Categories
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </nav>

          {/* Search + mobile toggle */}
          <div className="flex items-center gap-2">
            <form
              onSubmit={submitSearch}
              className={`hidden items-center rounded-full transition-all duration-300 lg:flex ${
                searchOpen ? "w-64 border border-slate-200 bg-slate-50" : "w-10"
              }`}
              role="search"
            >
              <button
                type="button"
                onClick={() => setSearchOpen((v) => !v)}
                aria-label="Search jobs"
                className="grid size-10 shrink-0 place-items-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-brand-700"
              >
                <Search className="size-5" />
              </button>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, keyword…"
                aria-label="Search jobs"
                className={`bg-transparent text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none ${
                  searchOpen ? "w-full pr-3 opacity-100" : "w-0 opacity-0"
                }`}
              />
            </form>

            <button
              className="grid size-10 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-brand-50 lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ───────────────────────────── */}
        {menuOpen && (
          <div className="border-t-2 border-transparent bg-white [border-image:linear-gradient(to_right,#fbbf24,#079d55,#fbbf24)_1] lg:hidden">
            <div className="space-y-1 px-4 py-4">
              {/* Mobile search */}
              <form onSubmit={submitSearch} className="mb-3 flex overflow-hidden rounded-xl border border-brand-200 bg-brand-50/60" role="search">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search jobs…"
                  aria-label="Search jobs"
                  className="w-full bg-transparent px-4 py-3 text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="grid shrink-0 place-items-center bg-brand-600 px-4 text-white"
                >
                  <Search className="size-4" />
                </button>
              </form>

              <nav className="space-y-1" aria-label="Mobile">
                {featuredLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/jobs"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive ? "bg-brand-50 text-brand-700" : "text-slate-600 hover:bg-slate-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                {/* Mobile categories accordion */}
                <button
                  onClick={() => setCatsOpen((v) => !v)}
                  aria-expanded={catsOpen}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50"
                >
                  Categories
                  <ChevronDown className={`size-4 transition-transform ${catsOpen ? "rotate-180" : ""}`} />
                </button>
                {catsOpen && (
                  <div className="ml-3 space-y-0.5 border-l-2 border-brand-100 pl-3">
                    {jobCategories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/jobs/${c.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                      >
                        <c.icon className="size-4 text-brand-600" />
                        {c.label}
                      </Link>
                    ))}
                    <Link
                      to="/categories"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-bold text-brand-700"
                    >
                      <LayoutGrid className="size-4" />
                      View all categories
                    </Link>
                  </div>
                )}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* ── Desktop mega menu (portal) ──────────────── */}
      {createPortal(
        <>
          {/* Hover bridge — always rendered so mouse can reach mega menu */}
          <div
            className="fixed inset-x-0 z-[49]"
            style={{ top: "5.75rem", height: "1.5rem" }}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          />

          <div
            ref={megaRef}
            className={`fixed inset-x-0 z-50 border-b-2 border-transparent bg-white [border-image:linear-gradient(to_right,#fbbf24,#079d55,#fbbf24)_1] shadow-xl shadow-slate-900/5 transition-all duration-300 ease-out ${
              dropOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 pointer-events-none opacity-0"
            }`}
            style={{ top: "7.25rem" }}
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-3 gap-8 py-8">
                {megaSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.slugs.map((slug) => {
                        const cat = jobCategories.find((c) => c.slug === slug)!;
                        return (
                          <Link
                            key={slug}
                            to={`/jobs/${slug}`}
                            onClick={() => setDropOpen(false)}
                            className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-brand-50"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-white group-hover:shadow-sm">
                              <cat.icon className="size-5" />
                            </span>
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-700">
                              {cat.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-100 py-3">
                <Link
                  to="/categories"
                  onClick={() => setDropOpen(false)}
                  className="flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-sm font-bold text-brand-700 transition-colors hover:bg-brand-50"
                >
                  <LayoutGrid className="size-4" />
                  View all categories
                </Link>
              </div>
            </div>
          </div>
        </>,
        document.body,
      )}
    </header>
  );
}
