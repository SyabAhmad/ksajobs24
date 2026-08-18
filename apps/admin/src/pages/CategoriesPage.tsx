import { useState } from "react";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { mockCategories, type Category } from "../data/mock";

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Category | null>(null);
  const [form, setForm] = useState({ name: "", slug: "" });

  const openAdd = () => { setEditing(null); setForm({ name: "", slug: "" }); setModalOpen(true); };
  const openEdit = (cat: Category) => { setEditing(cat); setForm({ name: cat.name, slug: cat.slug }); setModalOpen(true); };
  const handleDelete = (id: string) => { if (confirm("Delete this category?")) setCategories((prev) => prev.filter((c) => c.id !== id)); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      setCategories((prev) => prev.map((c) => c.id === editing.id ? { ...c, name: form.name, slug: form.slug } : c));
    } else {
      setCategories((prev) => [...prev, { id: String(Date.now()), name: form.name, slug: form.slug, jobCount: 0 }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Categories</h1>
          <p className="text-sm text-slate-500">{categories.length} categories</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-500">
          <Plus className="size-4" /> Add Category
        </button>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:border-brand-200 hover:shadow-sm">
            <div>
              <p className="text-sm font-bold text-slate-800">{cat.name}</p>
              <p className="mt-0.5 text-xs text-slate-400">{cat.jobCount} jobs · /{cat.slug}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => openEdit(cat)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600"><Pencil className="size-4" /></button>
              <button onClick={() => handleDelete(cat.id)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="size-4" /></button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h2 className="text-base font-bold text-slate-900">{editing ? "Edit Category" : "Add Category"}</h2>
              <button onClick={() => setModalOpen(false)} className="grid size-8 place-items-center rounded-lg text-slate-400 hover:bg-slate-100"><X className="size-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Name</label>
                <input required value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-slate-500">Slug</label>
                <input required value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} placeholder="e.g. engineering" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setModalOpen(false)} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50">Cancel</button>
                <button type="submit" className="rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-500">{editing ? "Save" : "Add"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
