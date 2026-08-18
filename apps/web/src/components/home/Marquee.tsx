import { Briefcase } from "lucide-react";
import { marqueeJobs } from "../../data/jobs";

const doubled = [...marqueeJobs, ...marqueeJobs];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-brand-100 bg-brand-50/60 py-4">
      <div className="marquee flex gap-6">
        {doubled.map((job, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-800 shadow-sm"
          >
            <Briefcase className="size-3.5 text-brand-500" />
            {job}
          </span>
        ))}
      </div>
    </section>
  );
}
