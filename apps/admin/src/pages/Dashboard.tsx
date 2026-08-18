import { Briefcase, FileText, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const stats = [
  { label: "Total Jobs", value: "156", change: "+12%", up: true, icon: Briefcase, color: "bg-brand-50 text-brand-600" },
  { label: "Published Posts", value: "24", change: "+3%", up: true, icon: FileText, color: "bg-blue-50 text-blue-600" },
  { label: "Total Users", value: "2,847", change: "+18%", up: true, icon: Users, color: "bg-purple-50 text-purple-600" },
  { label: "Page Views", value: "45.2K", change: "-2%", up: false, icon: TrendingUp, color: "bg-gold-50 text-gold-600" },
];

const recentJobs = [
  { title: "Senior Civil Engineer", company: "Saudi Binladin Group", status: "active", date: "2 hours ago" },
  { title: "Frontend Developer", company: "STC Solutions", status: "active", date: "5 hours ago" },
  { title: "HSE Manager", company: "Saudi Aramco", status: "draft", date: "1 day ago" },
  { title: "Project Manager", company: "Al Habib Group", status: "active", date: "1 day ago" },
  { title: "Data Analyst", company: "NEOM", status: "closed", date: "2 days ago" },
];

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  draft: "bg-amber-50 text-amber-700",
  closed: "bg-slate-100 text-slate-500",
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Welcome back! Here&rsquo;s what&rsquo;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, change, up, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-white p-5">
            <div className="flex items-center justify-between">
              <div className={`grid size-10 place-items-center rounded-xl ${color}`}>
                <Icon className="size-5" />
              </div>
              <span className={`inline-flex items-center gap-0.5 text-xs font-bold ${up ? "text-green-600" : "text-red-500"}`}>
                {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-extrabold text-slate-900">{value}</p>
            <p className="mt-1 text-xs text-slate-400">{label}</p>
          </div>
        ))}
      </div>

      {/* Recent jobs */}
      <div className="rounded-2xl border border-slate-100 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
          <h2 className="text-base font-bold text-slate-900">Recent Jobs</h2>
          <a href="/dashboard/jobs" className="text-xs font-bold text-brand-600 hover:text-brand-500">View all</a>
        </div>
        <div className="divide-y divide-slate-50">
          {recentJobs.map((job, i) => (
            <div key={i} className="flex items-center justify-between px-6 py-3.5">
              <div>
                <p className="text-sm font-semibold text-slate-800">{job.title}</p>
                <p className="text-xs text-slate-400">{job.company}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[job.status]}`}>
                  {job.status}
                </span>
                <span className="text-xs text-slate-400">{job.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
