import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  ArrowLeft,
  Building2,
  CheckCircle2,
  Share2,
  Bookmark,
} from "lucide-react";
import { getJobById, getRelatedJobs } from "../data/jobs";
import { jobCategories } from "../data/categories";

export default function JobDetails() {
  const { id } = useParams<{ id: string }>();
  const job = id ? getJobById(id) : undefined;

  if (!job) {
    return (
      <section className="py-20 text-center">
        <Briefcase className="mx-auto size-12 text-slate-300" />
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Job not found</h1>
        <p className="mt-2 text-sm text-slate-500">This job listing may have been removed.</p>
        <Link to="/jobs" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-500">
          <ArrowLeft className="size-4" />
          Back to all jobs
        </Link>
      </section>
    );
  }

  const cat = jobCategories.find((c) => c.slug === job.category);
  const related = getRelatedJobs(job);

  return (
    <section className="bg-slate-50/50 py-8 sm:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/jobs"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800"
        >
          <ArrowLeft className="size-4" />
          All Jobs
        </Link>

        {/* Main card */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
          <div className="flex items-start gap-4">
            <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
              {cat && <cat.icon className="size-7" />}
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                {job.title}
              </h1>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Building2 className="size-3.5" />
                  {job.company}
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5" />
                  {job.location}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600" title="Save">
                <Bookmark className="size-4" />
              </button>
              <button className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600" title="Share">
                <Share2 className="size-4" />
              </button>
            </div>
          </div>

          {/* Meta badges */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
              <Briefcase className="size-3" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700 ring-1 ring-gold-200">
              <DollarSign className="size-3" />
              {job.salary}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              <Clock className="size-3" />
              Posted {job.posted}
            </span>
          </div>

          {/* Description */}
          {job.description && (
            <div className="mt-8">
              <h2 className="text-base font-bold text-slate-900">About this role</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {job.description}
              </p>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div className="mt-8">
              <h2 className="text-base font-bold text-slate-900">Requirements</h2>
              <ul className="mt-3 space-y-2.5">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No description fallback */}
          {!job.description && (
            <div className="mt-8 rounded-xl bg-slate-50 p-6 text-center">
              <p className="text-sm text-slate-500">
                Contact {job.company} directly for more details about this position.
              </p>
            </div>
          )}

          {/* Apply CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="flex-1 rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-600/25 active:scale-[0.98]">
              Apply Now
            </button>
            <button className="rounded-xl border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50">
              Save Job
            </button>
          </div>
        </div>

        {/* Related jobs */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-extrabold text-slate-900">
              Related {cat?.label || ""} Jobs
            </h2>
            <div className="mt-4 space-y-3">
              {related.map((r) => {
                const rCat = jobCategories.find((c) => c.slug === r.category);
                return (
                  <Link
                    key={r.id}
                    to={`/job/${r.id}`}
                    className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5 sm:p-5"
                  >
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                      {rCat && <rCat.icon className="size-6" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-bold text-slate-900 group-hover:text-brand-700">
                        {r.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-500">{r.company}</p>
                      <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-400">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {r.location}
                        </span>
                        <span className="font-semibold text-brand-700">{r.salary}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                      {r.type}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
