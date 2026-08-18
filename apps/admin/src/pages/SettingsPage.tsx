import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Save, CheckCircle2 } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    siteName: "KSA Jobs 24",
    siteUrl: "https://ksajobs24.com",
    adminEmail: user?.email || "admin@ksajobs24.com",
    contactEmail: "info@ksajobs24.com",
    metaDescription: "Saudi Arabia's #1 job portal. Browse and apply to the latest verified jobs.",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Manage your site configuration</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        {/* General */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6">
          <h2 className="text-base font-bold text-slate-900">General</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">Site Name</label>
              <input value={form.siteName} onChange={(e) => setForm((f) => ({ ...f, siteName: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">Site URL</label>
              <input value={form.siteUrl} onChange={(e) => setForm((f) => ({ ...f, siteUrl: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6">
          <h2 className="text-base font-bold text-slate-900">Email</h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">Admin Email</label>
              <input type="email" value={form.adminEmail} onChange={(e) => setForm((f) => ({ ...f, adminEmail: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-slate-500">Contact Email</label>
              <input type="email" value={form.contactEmail} onChange={(e) => setForm((f) => ({ ...f, contactEmail: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6">
          <h2 className="text-base font-bold text-slate-900">SEO</h2>
          <div className="mt-4">
            <label className="mb-1 block text-xs font-semibold text-slate-500">Meta Description</label>
            <textarea rows={3} value={form.metaDescription} onChange={(e) => setForm((f) => ({ ...f, metaDescription: e.target.value }))} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
          </div>
        </div>

        <button type="submit" className="flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500">
          {saved ? <><CheckCircle2 className="size-4" /> Saved!</> : <><Save className="size-4" /> Save Changes</>}
        </button>
      </form>
    </div>
  );
}
