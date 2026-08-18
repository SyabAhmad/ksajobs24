import { Briefcase, Users, Eye, TrendingUp, ArrowUpRight } from "lucide-react";

const overviewStats = [
  { label: "Job Views", value: "12,480", change: "+24%", icon: Eye, color: "bg-blue-50 text-blue-600" },
  { label: "Applications", value: "1,234", change: "+18%", icon: Briefcase, color: "bg-brand-50 text-brand-600" },
  { label: "New Users", value: "384", change: "+12%", icon: Users, color: "bg-purple-50 text-purple-600" },
  { label: "Conversion", value: "9.8%", change: "+2.1%", icon: TrendingUp, color: "bg-gold-50 text-gold-600" },
];

const topCategories = [
  { name: "Engineering", views: 3240, applications: 412 },
  { name: "IT & Software", views: 2890, applications: 387 },
  { name: "Construction", views: 1960, applications: 245 },
  { name: "Healthcare", views: 1540, applications: 198 },
  { name: "Oil & Gas", views: 1320, applications: 156 },
];

const topJobs = [
  { title: "Senior Civil Engineer", company: "Saudi Binladin Group", views: 892, applications: 134 },
  { title: "Frontend Developer", company: "STC Solutions", views: 756, applications: 112 },
  { title: "HSE Manager", company: "Saudi Aramco", views: 645, applications: 89 },
  { title: "Data Analyst", company: "NEOM", views: 534, applications: 76 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Analytics</h1>
        <p className="text-sm text-slate-500">Performance overview for the last 30 days</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map(({ label, value, change, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className={`grid size-10 place-items-center rounded-xl ${color}`}><Icon className="size-5" /></div>
              <span className="inline-flex items-center gap-0.5 text-xs font-bold text-green-600"><ArrowUpRight className="size-3" />{change}</span>
            </div>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top categories */}
        <div className="rounded-2xl border border-slate-100 bg-white">
          <div className="border-b border-slate-100 px-6 py-4">
            <h2 className="text-base font-bold text-slate-900">Top Categories</h2>
          </div>
          <div className="divide-y divide-slate-50">
            {topCategories.map((cat, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="grid size-8 place-items-center rounded-lg bg-slate-100 text-xs font-bold text-slate-500">{i + 1}</span>
                  <span className="text-sm font-semibold text-slate-800">{cat.name}</span>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="font-semibold text-slate-600">{cat.views.toLocaleString()}</span> views · <span className="font-semibold text-slate-600">{cat.applications}</span> apps
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top jobs */}
        <div className="rounded-2xl border border-slate-100 bg-white">
          <div className="border-b border-slate-100 px-6 py-4">
            <h2 className="text-base font-bold text-slate-900">Top Jobs</h2>
          </div>
          <div className="divide-y divide-slate-50">
            {topJobs.map((job, i) => (
              <div key={i} className="flex items-center justify-between px-6 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{job.title}</p>
                  <p className="text-xs text-slate-400">{job.company}</p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="font-semibold text-slate-600">{job.views}</span> views · <span className="font-semibold text-slate-600">{job.applications}</span> apps
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
