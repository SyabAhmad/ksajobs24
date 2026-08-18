import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { featuredJobs } from "../../data/jobs";
import { jobCategories } from "../../data/categories";

export default function LatestJobs() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Latest Jobs
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Fresh opportunities posted across the Kingdom
            </p>
          </div>
          <Link
            to="/jobs"
            className="hidden items-center gap-1.5 text-sm font-bold text-brand-700 transition-colors hover:text-brand-600 sm:inline-flex"
          >
            View all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => {
            const cat = jobCategories.find((c) => c.slug === job.category);
            return (
              <Link
                key={job.id}
                to={`/job/${job.id}`}
                className="group rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                    {cat && <cat.icon className="size-5" />}
                  </div>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                    {job.type}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900 group-hover:text-brand-700">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {job.company}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3.5" />
                    {job.posted}
                  </span>
                </div>
                <p className="mt-3 text-sm font-bold text-brand-700">
                  {job.salary}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700"
          >
            View all jobs
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
