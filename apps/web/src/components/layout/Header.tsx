import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe, Mail, MapPin, Menu, Search, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Find Jobs", to: "/jobs" },
  { label: "Companies", to: "/companies" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top utility bar ─────────────────────────── */}
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
          </div>
          <div className="flex items-center gap-5">
            <Link to="/employers" className="transition-colors hover:text-white">
              For Employers
            </Link>
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
        className={`border-b bg-white/85 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? "border-slate-200 shadow-lg shadow-slate-900/5" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-brand-700 after:absolute after:inset-x-3.5 after:-bottom-[13px] after:h-0.5 after:rounded-full after:bg-brand-600"
                      : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              className="grid size-10 place-items-center rounded-full text-slate-500 transition-colors hover:bg-brand-50 hover:text-brand-700"
              aria-label="Search jobs"
            >
              <Search className="size-5" />
            </button>
            <Link
              to="/login"
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              Sign In
            </Link>
            <Link
              to="/post-job"
              className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30"
            >
              Post a Job
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="grid size-10 place-items-center rounded-xl text-slate-700 transition-colors hover:bg-brand-50 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* ── Mobile menu ───────────────────────────── */}
        {menuOpen && (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-brand-50 text-brand-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="flex gap-3 pt-3">
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-xl border border-brand-600 px-4 py-3 text-center text-sm font-semibold text-brand-700"
                >
                  Sign In
                </Link>
                <Link
                  to="/post-job"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-xl bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Post a Job
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
