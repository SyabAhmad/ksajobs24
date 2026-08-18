import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto grid max-w-7xl place-items-center px-4 py-32 text-center sm:px-6 lg:px-8">
      <div>
        <p className="text-6xl font-extrabold text-brand-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h1>
        <p className="mt-2 text-slate-500">
          This page is under construction or doesn&rsquo;t exist yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
