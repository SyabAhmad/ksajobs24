import { useState } from "react";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";
import { mockJobs, type Job } from "../data/mock";

const statusColors: Record<string, string> = {
  active: "bg-green-50 text-green-700",
  draft: "bg-amber-50 text-amber-700",
  closed: "bg-slate-100 text-slate-500",
};

export default function JobsPage() {
  const [jobs, setJobs] = useState(mockJobs);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Job | null>(null);
  const [form, setForm] = useState({ title: "", company: "", location: "", type: "Full-time" as Job["type"], category: "engineering", salary: "", status: "active" as Job["status"] });

  const filtered = jobs.filter((j) => {
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    if (statusFilter !== "all" && j.status !== statusFilter) return false;
    return true;
  });

  const openAdd = () => { setEditing(null); setForm({ title: "", company: "", location: "", type: "Full-time", category: "engineering", salary: "", status: "active" }); setModalOpen(true); };
  const openEdit = (job: Job) => { setEditing(job); setForm({ title: job.title, company: job.company, location: job.location, type: job.type, category: job.category, salary: job.salary, status: job.status }); setModalOpen(true); };
  const handleDelete = (id: string) => { if (confirm("Delete this job?")) setJobs((prev) => prev.filter((j) => j.id !== id)); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setJobs((prev) => prev.map((j) => j.id === editing.id ? { ...j, ...form } : j));
    } else {
      setJobs((prev) => [{ id: String(Date.now()), ...form, posted: "Just now" }, ...prev]);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Jobs</h1>
          <p className="text-sm text-slate-500">{jobs.length} total jobs</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-500">
          <Plus className="size-4" /> Add Job
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search jobs…" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
        </div>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 focus:border-brand-400 focus:outline-none">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="draft">Draft</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-6 py-3 font-semibold text-slate-500">Job Title</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Company</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Location</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Type</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Status</th>
              <th className="px-6 py-3 font-semibold text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((job) => (
              <tr key={job.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-3.5 font-semibold text-slate-800">{job.title}</td>
                <td className="px-6 py-3.5 text-slate-500">{job.company}</td>
                <td className="px-6 py-3.5 text-slate-500">{job.location}</td>
                <td className="px-6 py-3.5 text-slate-500">{job.type}</td>
                <td className="px-6 py-3.5"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[job.status]}`}>{job.status}</span></td>
                <td className="px-6 py-3.5 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => openEdit(job)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"><Pencil className="size-4" /></button>
                    <button onClick={() => handleDelete(job.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"><Trash2 className="size-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="py-12 text-center text-sm text-slate-400">No jobs found</p>}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h2 className="text-base font-bold text-slate-900">{editing ? "Edit Job" : "Add Job"}</h2>
              <button onClick={() => setModalOpen(false)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100"><X className="size-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Job Title</label>
                <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-500">Company</label>
                  <input required value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-500">Location</label>
                  <input required value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-500">Type</label>
                  <select value={form.type} onChange={(e) => setForm((f) => ({ ...f, type: e.target.value as Job["type"] }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none">
                    <option>Full-time</option><option>Part-time</option><option>Contract</option><option>Remote</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-slate-500">Status</label>
                  <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as Job["status"] }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none">
                    <option>active</option><option>draft</option><option>closed</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Salary</label>
                <input required value={form.salary} onChange={(e) => setForm((f) => ({ ...f, salary: e.target.value }))} placeholder="SAR 10,000 – 15,000" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button type="submit" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-500">{editing ? "Save Changes" : "Add Job"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
