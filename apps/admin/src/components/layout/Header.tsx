import { useAuth } from "../../context/AuthContext";
import { ExternalLink, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminHeader() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-4">
        <Link
          to="/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-bold text-brand-700 transition-colors hover:bg-brand-100"
        >
          <ExternalLink className="size-3" />
          View Website
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative grid size-9 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
          <Bell className="size-5" />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-red-500" />
        </button>

        <div className="h-6 w-px bg-slate-200" />

        <div className="flex items-center gap-3">
          <div className="grid size-8 place-items-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">{user?.name || "Admin"}</p>
            <p className="text-xs text-slate-400">{user?.email || "admin@ksajobs24.com"}</p>
          </div>
        </div>

        <button
          onClick={signOut}
          className="rounded-lg px-3 py-1.5 text-xs font-bold text-slate-500 transition-colors hover:bg-red-50 hover:text-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
