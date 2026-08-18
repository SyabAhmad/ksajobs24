import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Heart, Send } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../icons/SocialIcons";
import Logo from "./Logo";

const columns = [
  {
    title: "For Job Seekers",
    links: [
      { label: "Browse Jobs", to: "/jobs" },
      { label: "All Categories", to: "/categories" },
      { label: "Career Advice", to: "/blog" },
      { label: "How to Apply", to: "/how-to-apply" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Popular Categories",
    links: [
      { label: "Engineering Jobs", to: "/jobs/engineering" },
      { label: "IT & Software Jobs", to: "/jobs/it" },
      { label: "Safety (HSE) Jobs", to: "/jobs/safety" },
      { label: "Construction Jobs", to: "/jobs/construction" },
      { label: "Healthcare Jobs", to: "/jobs/healthcare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
];

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com/ksajobs24" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/ksajobs24" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "https://linkedin.com/company/ksajobs24" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/ksajobs24" },
  { icon: YouTubeIcon, label: "YouTube", href: "https://youtube.com/@ksajobs24" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <footer className="bg-brand-950 text-brand-100/80">
      {/* ── Main footer ─────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Saudi Arabia&rsquo;s job portal. Browse and apply to the latest
              verified jobs across the Kingdom — 100% free, no sign-up
              needed. From Riyadh to Jeddah, Dammam to NEOM.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition-all hover:bg-brand-600 hover:text-white hover:ring-brand-600"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Stay Updated
            </h3>
            <p className="mt-5 text-sm leading-relaxed">
              Fresh jobs in your inbox. No spam, ever.
            </p>
            {subscribed ? (
              <p className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600/15 px-4 py-3 text-sm font-semibold text-brand-300 ring-1 ring-brand-600/30">
                <CheckCircle2 className="size-4" />
                You&rsquo;re subscribed!
              </p>
            ) : (
              <form onSubmit={onSubscribe} className="mt-4">
                <div className="flex overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/15 focus-within:ring-2 focus-within:ring-brand-500">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder:text-brand-100/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="grid shrink-0 place-items-center bg-brand-600 px-4 text-white transition-colors hover:bg-brand-500"
                  >
                    <Send className="size-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} KSAJobs24.com — All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Made with <Heart className="size-3.5 fill-brand-500 text-brand-500" /> in
            Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
