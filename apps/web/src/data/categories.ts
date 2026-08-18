import {
  Banknote,
  Building2,
  Cog,
  Fuel,
  GraduationCap,
  HardHat,
  HeartPulse,
  Laptop,
  Megaphone,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type JobCategory = {
  slug: string;
  label: string;
  icon: LucideIcon;
};

/** Master list of job categories — used by header dropdown, footer & pages. */
export const jobCategories: JobCategory[] = [
  { slug: "engineering", label: "Engineering", icon: Cog },
  { slug: "it", label: "IT & Software", icon: Laptop },
  { slug: "safety", label: "Health & Safety (HSE)", icon: HardHat },
  { slug: "construction", label: "Construction", icon: Building2 },
  { slug: "oil-gas", label: "Oil, Gas & Energy", icon: Fuel },
  { slug: "healthcare", label: "Healthcare & Medical", icon: HeartPulse },
  { slug: "finance", label: "Finance & Accounting", icon: Banknote },
  { slug: "sales-marketing", label: "Sales & Marketing", icon: Megaphone },
  { slug: "admin-hr", label: "Admin & HR", icon: Users },
  { slug: "education", label: "Education & Teaching", icon: GraduationCap },
  { slug: "logistics", label: "Logistics & Supply Chain", icon: Truck },
  { slug: "technicians", label: "Technicians & Maintenance", icon: Wrench },
];
