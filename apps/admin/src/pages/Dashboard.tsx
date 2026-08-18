import { Briefcase, FileText, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Eye, Save, CheckCircle2 } from "lucide-react";

const overviewStats = [
  { label: "Job Views", value: "12,480", change: "+24%", icon: Eye, color: "bg-blue-500/10 text-blue-500", up: true },
  { label: "Applications", value: "1,234", change: "+18%", icon: Briefcase, color: "bg-brand-500/10 text-brand-500", up: true },
  { label: "New Users", value: "384", change: "+12%", icon: Users, color: "bg-purple-500/10 text-purple-500", up: true },
  { label: "Conversion Rate", value: "9.8%", change: "+2.1%", icon: TrendingUp, color: "bg-gold-500/10 text-gold-500", up: true },
];

const topCategories = [
  { name: "Engineering", views: 3240, applications: 412, color: "bg-blue-500/10" },
  { name: "IT & Software", views: 2890, applications: 387, color: "bg-brand-500/10" },
  { name: "Construction", views: 1960, applications: 245, color: "bg-purple-500/10" },
  { name: "Healthcare", views: 1540, applications: 198, color: "bg-red-500/10" },
  { name: "Oil & Gas", views: 1320, applications: 156, color: "bg-gold-500/10" },
];

const topJobs = [
  { title: "Senior Civil Engineer", company: "Saudi Binladin Group", views: 892, applications: 134, color: "bg-blue-500/10" },
  { title: "Frontend Developer", company: "STC Solutions", views: 756, applications: 112, color: "bg-brand-500/10" },
  { title: "HSE Manager", company: "Saudi Aramco", views: 645, applications: 89, color: "bg-purple-500/10" },
  { title: "Data Analyst", company: "NEOM", views: 534, applications: 76, color: "bg-red-500/10" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Analytics & overview</p>
      </div>

      {/* KPI Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {overviewStats.map(({ label, value, change, icon: Icon, color, up }) => (
          <div key={label} className="rounded-xl border border-slate-100/20 bg-white p-5 transition-all hover:border-brand-300 hover:shadow-sm">
            <div className="flex items-between justify-between">
              <div className={`grid size-12 place-items-center rounded-xl ${color}`}><Icon className="size-5" /></div>
              <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${up ? "text-green-600" : "text-red-500"}`}>
                {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {change}
              </span>
            </div>
            <p className="mt-3 text-lg font-medium text-slate-600">{value}</p>
            <p className="mt-0.5 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Top Categories */}
        <div className="rounded-2xl border border-slate-100/20 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-600 mb-4">Top Categories</h2>
          <div className="space-y-3">
            {topCategories.map((cat, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50">
                <div className="flex items-center gap-3">
                  <span className="grid size-7 place-items-center rounded-lg text-xs font-bold text-slate-400 bg-slate-100">{i + 1}</span>
                  <span className="text-sm font-medium text-slate-700">{cat.name}</span>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-slate-600">{cat.views.toLocaleString()}</span> views
                  <span className="text-xs text-slate-400 opacity-60"> · </span>
                  <span className="font-semibold text-slate-600">{cat.applications}</span> apps
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Jobs */}
        <div className="rounded-2xl border border-slate-100/20 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-600 mb-4">Top Jobs</h2>
          <div className="space-y-3">
            {topJobs.map((job, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50">
                <div>
                  <p className="text-sm font-medium text-slate-700">{job.title}</p>
                  <p className="text-xs text-slate-400">{job.company}</p>
                </div>
                <div className="text-right text-xs text-slate-400">
                  <span className="font-semibold text-slate-600">{job.views}</span> views
                  <span className="text-xs text-slate-400 opacity-60"> · </span>
                  <span className="font-semibold text-slate-600">{job.applications}</span> apps
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions / Recent Activity */}
      <div className="rounded-2xl border border-slate-100/20 bg-white p-6">
        <h2 className="text-lg font-bold text-slate-600 mb-4">Recent Activity</h2>
        <div className="space-y-3 text-sm text-slate-500">
          <div>14m ago · <span className="font-medium text-slate-700">New job posted: Senior Civil Engineer @ Saudi Binladin Group</span></div>
          <div>32m ago · <span className="font-medium text-slate-700">Application submitted for Frontend Developer</span></div>
          <div>1h ago · <span className="font-medium text-slate-700">Job view: HSE Manager (Saudi Aramco)</span></div>
          <div>2h ago · <span className="font-medium text-slate-700">Category: Engineering updated</span></div>
        </div>
      </div>
    </div>
  );
}