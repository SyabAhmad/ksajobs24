import { Link } from "react-router-dom";

type LogoProps = {
  variant?: "dark" | "light";
};

export default function Logo({ variant = "dark" }: LogoProps) {
  return (
    <Link
      to="/"
      className="flex shrink-0 items-center"
      aria-label="KSA Jobs 24 — Home"
    >
      <img
        src="/logo.png"
        alt="KSA Jobs 24 — Job Portal, Kingdom of Saudi Arabia"
        className={`w-auto ${variant === "dark" ? "h-12" : "h-16"}`}
      />
    </Link>
  );
}
