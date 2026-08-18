import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export default function PostJob() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-900 px-8 py-14 text-center sm:px-16">
          {/* Decorative */}
          <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-gold-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 size-40 rounded-full bg-brand-400/20 blur-3xl" />

          <div className="relative">
            <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Zap className="size-7 text-gold-300" />
            </div>
            <h2 className="mx-auto mt-6 max-w-lg text-2xl font-extrabold text-white sm:text-3xl">
              Hire the Best Talent in Saudi Arabia
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-brand-200/80">
              Post your job listing and reach thousands of qualified candidates across
              the Kingdom — fast and free.
            </p>
            <Link
              to="/post-job"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-800 transition-all hover:bg-gold-300 hover:text-brand-900"
            >
              Post a Job
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
