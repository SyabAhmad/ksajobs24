import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

type LogoProps = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  const wordmark = variant === "dark" ? "text-slate-900" : "text-white";
  const sub = variant === "dark" ? "text-slate-500" : "text-brand-200";

  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="KSA Jobs 24 — Home">
      <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-lg shadow-brand-600/25">
        <Briefcase className="size-5" strokeWidth={2.25} />
      </span>
      <span className="leading-none">
        <span className={`block text-xl font-extrabold tracking-tight ${wordmark}`}>
          KSA Jobs <span className="text-gold-500">24</span>
        </span>
        <span className={`block text-[11px] font-medium tracking-wide ${sub}`}>
          Saudi Arabia&rsquo;s Job Portal
        </span>
      </span>
    </Link>
  );
}
