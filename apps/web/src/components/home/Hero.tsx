import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Briefcase, TrendingUp, Users, Building2 } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "12,500+", label: "Active Jobs" },
  { icon: Building2, value: "850+", label: "Companies" },
  { icon: Users, value: "45,000+", label: "Job Seekers" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (location.trim()) params.set("location", location.trim());
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1578895101408-1a36b834405b?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-950/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-gold-300 ring-1 ring-white/10 backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-gold-400 animate-pulse" />
            New jobs posted daily
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Dream Job in{" "}
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Saudi Arabia
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            Browse thousands of verified jobs across the Kingdom. 100% free, no
            sign-up needed.
          </p>

          {/* Search bar — redesigned */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mt-10 max-w-4xl"
          >
            <div className="rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                {/* Job title field */}
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Job title, keyword, or company"
                    className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                {/* Divider */}
                <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                {/* Location field */}
                <div className="relative flex-1">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City or region"
                    className="w-full rounded-xl bg-slate-50 py-4 pl-12 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>

                {/* Search button */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.98]"
                >
                  <Search className="size-4" />
                  Search Jobs
                </button>
              </div>
            </div>

            {/* Quick tags */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs text-white/50">Popular:</span>
              {["Engineering", "IT", "Healthcare", "Construction"].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => { setQuery(tag); }}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10 transition-all hover:bg-white/20 hover:text-white"
                >
                  {tag}
                </button>
              ))}
            </div>
          </form>

          {/* Stats */}
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                <Icon className="mx-auto size-5 text-gold-400" />
                <p className="mt-2 text-xl font-extrabold text-white">{value}</p>
                <p className="text-xs text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
