import { useState } from "react";
import { Plus, Search, Pencil, Trash2, X } from "lucide-react";
import { mockBlog, type BlogPost } from "../../data/mock";

const statusColors: Record<string, string> = {
  published: "bg-green-50 text-green-700",
  draft: "bg-amber-50 text-amber-700",
};

export default function BlogPage() {
  const [posts, setPosts] = useState(mockBlog);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [form, setForm] = useState({ title: "", excerpt: "", author: "Admin", status: "draft" as BlogPost["status"] });

  const filtered = posts.filter((p) => !search || p.title.toLowerCase().includes(search.toLowerCase()));

  const openAdd = () => { setEditing(null); setForm({ title: "", excerpt: "", author: "Admin", status: "draft" }); setModalOpen(true); };
  const openEdit = (post: BlogPost) => { setEditing(post); setForm({ title: post.title, excerpt: post.excerpt, author: post.author, status: post.status }); setModalOpen(true); };
  const handleDelete = (id: string) => { if (confirm("Delete this post?")) setPosts((prev) => prev.filter((p) => p.id !== id)); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setPosts((prev) => prev.map((p) => p.id === editing.id ? { ...p, ...form } : p));
    } else {
      setPosts((prev) => [{ id: String(Date.now()), ...form, date: "Just now" }, ...prev]);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Blog</h1>
          <p className="text-sm text-slate-500">{posts.length} posts</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-500">
          <Plus className="size-4" /> New Post
        </button>
      </div>

      <div className="relative max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search posts…" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-6 py-3 font-semibold text-slate-500">Title</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Author</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Status</th>
              <th className="px-6 py-3 font-semibold text-slate-500">Date</th>
              <th className="px-6 py-3 font-semibold text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {filtered.map((post) => (
              <tr key={post.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-3.5">
                  <p className="font-semibold text-slate-800">{post.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400 line-clamp-1">{post.excerpt}</p>
                </td>
                <td className="px-6 py-3.5 text-slate-500">{post.author}</td>
                <td className="px-6 py-3.5"><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[post.status]}`}>{post.status}</span></td>
                <td className="px-6 py-3.5 text-slate-400">{post.date}</td>
                <td className="px-6 py-3.5 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button onClick={() => openEdit(post)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600"><Pencil className="size-4" /></button>
                    <button onClick={() => handleDelete(post.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="size-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h2 className="text-base font-bold text-slate-900">{editing ? "Edit Post" : "New Post"}</h2>
              <button onClick={() => setModalOpen(false)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100"><X className="size-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Title</label>
                <input required value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Excerpt</label>
                <textarea rows={3} required value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} className="w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Status</label>
                <select value={form.status} onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as BlogPost["status"] }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none">
                  <option>draft</option><option>published</option>
                </select>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button type="submit" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-500">{editing ? "Save" : "Create"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
