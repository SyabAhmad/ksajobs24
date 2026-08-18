import { useState, useMemo, useEffect } from "react";
import { Link, useSearchParams, useParams } from "react-router-dom";
import {
  Search,
  MapPin,
  Clock,
  Briefcase,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { allJobs, locations, companies, type JobType } from "../data/jobs";
import { jobCategories } from "../data/categories";

const jobTypes: JobType[] = ["Full-time", "Part-time", "Contract", "Remote"];
const ITEMS_PER_PAGE = 10;

const postedOptions = [
  { label: "All time", value: 999 },
  { label: "Today", value: 0 },
  { label: "This week", value: 7 },
  { label: "This month", value: 30 },
];

function FilterSection({
  title,
  defaultOpen = true,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-sm font-bold text-slate-800"
      >
        {title}
        {open ? <ChevronUp className="size-4 text-slate-400" /> : <ChevronDown className="size-4 text-slate-400" />}
      </button>
      {open && <div className="mt-3 space-y-2">{children}</div>}
    </div>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
  count,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  count?: number;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-slate-900">
      <span
        className={`flex size-4 shrink-0 items-center justify-center rounded border transition-colors ${
          checked ? "border-brand-600 bg-brand-600" : "border-slate-300 bg-white"
        }`}
      >
        {checked && (
          <svg className="size-2.5 text-white" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onChange} />
      <span className="flex-1">{label}</span>
      {count !== undefined && (
        <span className="text-xs text-slate-400">{count}</span>
      )}
    </label>
  );
}

export default function AllJobs() {
  const { category } = useParams<{ category: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [page, setPage] = useState(1);

  // Filter state from URL params
  const searchQuery = searchParams.get("q") || "";
  const paramCategories = searchParams.get("categories")?.split(",").filter(Boolean) || [];
  // Merge route param category with query param categories (deduplicated)
  const selectedCategories = category
    ? [...new Set([category, ...paramCategories])]
    : paramCategories;
  const selectedTypes = searchParams.get("types")?.split(",").filter(Boolean) || [];
  const selectedCompanies = searchParams.get("companies")?.split(",").filter(Boolean) || [];
  const selectedLocations = searchParams.get("location")?.split(",").filter(Boolean) || [];
  const postedDays = Number(searchParams.get("posted")) || 999;

  // Reset page when filters change
  useEffect(() => { setPage(1); }, [category, searchQuery, selectedCategories, selectedTypes, selectedCompanies, selectedLocations, postedDays]);

  const updateParam = (key: string, value: string | null) => {
    const next = new URLSearchParams(searchParams);
    if (value === null || value === "") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const toggleListParam = (key: string, current: string[], value: string) => {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateParam(key, next.length ? next.join(",") : null);
  };

  const clearAll = () => setSearchParams({}, { replace: true });

  const hasFilters =
    searchQuery || selectedCategories.length || selectedTypes.length ||
    selectedCompanies.length || selectedLocations.length || postedDays !== 999;

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const match =
          job.title.toLowerCase().includes(q) ||
          job.company.toLowerCase().includes(q) ||
          job.category.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (selectedCategories.length && !selectedCategories.includes(job.category)) return false;
      if (selectedTypes.length && !selectedTypes.includes(job.type)) return false;
      if (selectedCompanies.length && !selectedCompanies.includes(job.company)) return false;
      if (selectedLocations.length && !selectedLocations.includes(job.location)) return false;
      if (postedDays !== 999 && job.postedDays > postedDays) return false;
      return true;
    });
  }, [searchQuery, selectedCategories, selectedTypes, selectedCompanies, selectedLocations, postedDays]);

  // Pagination
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Counts for filter options
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allJobs.forEach((j) => { counts[j.category] = (counts[j.category] || 0) + 1; });
    return counts;
  }, []);

  const companyCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allJobs.forEach((j) => { counts[j.company] = (counts[j.company] || 0) + 1; });
    return counts;
  }, []);

  const locationCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    allJobs.forEach((j) => { counts[j.location] = (counts[j.location] || 0) + 1; });
    return counts;
  }, []);

  const filterContent = (
    <>
      {/* Category */}
      <FilterSection title="Category">
        {jobCategories.map((cat) => (
          <Checkbox
            key={cat.slug}
            label={cat.label}
            checked={selectedCategories.includes(cat.slug)}
            onChange={() => toggleListParam("categories", selectedCategories, cat.slug)}
            count={categoryCounts[cat.slug]}
          />
        ))}
      </FilterSection>

      {/* Job Type */}
      <FilterSection title="Job Type">
        {jobTypes.map((t) => (
          <Checkbox
            key={t}
            label={t}
            checked={selectedTypes.includes(t)}
            onChange={() => toggleListParam("types", selectedTypes, t)}
          />
        ))}
      </FilterSection>

      {/* Company */}
      <FilterSection title="Company">
        {companies.map((c) => (
          <Checkbox
            key={c}
            label={c}
            checked={selectedCompanies.includes(c)}
            onChange={() => toggleListParam("companies", selectedCompanies, c)}
            count={companyCounts[c]}
          />
        ))}
      </FilterSection>

      {/* Location */}
      <FilterSection title="Location">
        {locations.map((l) => (
          <Checkbox
            key={l}
            label={l}
            checked={selectedLocations.includes(l)}
            onChange={() => toggleListParam("location", selectedLocations, l)}
            count={locationCounts[l]}
          />
        ))}
      </FilterSection>

      {/* Posted */}
      <FilterSection title="Date Posted">
        {postedOptions.map((opt) => (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-slate-900"
          >
            <span
              className={`size-3.5 shrink-0 rounded-full border-2 transition-colors ${
                postedDays === opt.value ? "border-brand-600 bg-brand-600" : "border-slate-300"
              }`}
            />
            <input
              type="radio"
              name="posted"
              className="sr-only"
              checked={postedDays === opt.value}
              onChange={() => updateParam("posted", opt.value === 999 ? null : String(opt.value))}
            />
            {opt.label}
          </label>
        ))}
      </FilterSection>
    </>
  );

  return (
    <section className="bg-slate-50/50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            All Jobs
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {filteredJobs.length} job{filteredJobs.length !== 1 && "s"} found
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(e) => updateParam("q", e.target.value || null)}
              placeholder="Search by title, company, or keyword…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            />
            {searchQuery && (
              <button
                onClick={() => updateParam("q", null)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
          >
            <SlidersHorizontal className="size-4" />
            Filters
          </button>
        </div>

        {/* Active filter tags */}
        {hasFilters && (
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {selectedCategories.map((slug) => {
              const cat = jobCategories.find((c) => c.slug === slug);
              return (
                <button
                  key={slug}
                  onClick={() => toggleListParam("categories", selectedCategories, slug)}
                  className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
                >
                  {cat?.label || slug}
                  <X className="size-3" />
                </button>
              );
            })}
            {selectedTypes.map((t) => (
              <button
                key={t}
                onClick={() => toggleListParam("types", selectedTypes, t)}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
              >
                {t}
                <X className="size-3" />
              </button>
            ))}
            {selectedCompanies.map((c) => (
              <button
                key={c}
                onClick={() => toggleListParam("companies", selectedCompanies, c)}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
              >
                {c}
                <X className="size-3" />
              </button>
            ))}
            {selectedLocations.map((l) => (
              <button
                key={l}
                onClick={() => toggleListParam("location", selectedLocations, l)}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
              >
                {l}
                <X className="size-3" />
              </button>
            ))}
            {postedDays !== 999 && (
              <button
                onClick={() => updateParam("posted", null)}
                className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100"
              >
                Posted: {postedOptions.find((o) => o.value === postedDays)?.label}
                <X className="size-3" />
              </button>
            )}
            <button
              onClick={clearAll}
              className="text-xs font-bold text-slate-400 transition-colors hover:text-slate-600"
            >
              Clear all
            </button>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-5">
              {filterContent}
            </div>
          </aside>

          {/* Job list */}
          <div className="min-w-0 flex-1">
            {filteredJobs.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
                <Briefcase className="mx-auto size-10 text-slate-300" />
                <p className="mt-4 text-base font-bold text-slate-700">No jobs found</p>
                <p className="mt-1 text-sm text-slate-400">Try adjusting your filters or search query</p>
                <button
                  onClick={clearAll}
                  className="mt-4 text-sm font-bold text-brand-600 hover:text-brand-500"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
              <div className="space-y-3">
                {paginatedJobs.map((job) => {
                  const cat = jobCategories.find((c) => c.slug === job.category);
                  return (
                    <Link
                      key={job.id}
                      to={`/job/${job.id}`}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 sm:p-5"
                    >
                      {/* Category icon */}
                      <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                        {cat && <cat.icon className="size-6" />}
                      </div>

                      {/* Job info */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-base font-bold text-slate-900 group-hover:text-brand-700">
                              {job.title}
                            </h3>
                            <p className="mt-0.5 text-sm text-slate-500">{job.company}</p>
                          </div>
                          <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                            {job.type}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3.5" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3.5" />
                            {job.posted}
                          </span>
                          <span className="font-semibold text-brand-700">{job.salary}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    Page <span className="font-semibold text-slate-700">{page}</span> of{" "}
                    <span className="font-semibold text-slate-700">{totalPages}</span>
                  </p>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronLeft className="size-4" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        onClick={() => setPage(n)}
                        className={`size-9 rounded-lg text-sm font-semibold transition-colors ${
                          n === page
                            ? "bg-brand-600 text-white"
                            : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="grid size-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-bold text-slate-900">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="grid size-8 place-items-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 pb-24" style={{ height: "calc(100% - 65px)" }}>
              {filterContent}
            </div>
            <div className="absolute inset-x-0 bottom-0 border-t border-slate-100 bg-white px-5 py-4">
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="w-full rounded-xl bg-brand-600 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500"
              >
                Show {filteredJobs.length} results
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
