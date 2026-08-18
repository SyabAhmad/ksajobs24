export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  category: string;
  salary: string;
  posted: string;
};

export const featuredJobs: Job[] = [
  { id: "1", title: "Senior Civil Engineer", company: "Saudi Binladin Group", location: "Riyadh", type: "Full-time", category: "engineering", salary: "SAR 18,000 – 25,000", posted: "2 hours ago" },
  { id: "2", title: "Frontend Developer", company: "STC Solutions", location: "Riyadh", type: "Full-time", category: "it", salary: "SAR 12,000 – 18,000", posted: "5 hours ago" },
  { id: "3", title: "HSE Manager", company: "Saudi Aramco", location: "Dhahran", type: "Full-time", category: "safety", salary: "SAR 20,000 – 30,000", posted: "1 day ago" },
  { id: "4", title: "Project Manager – Construction", company: "Al Habib Group", location: "Jeddah", type: "Contract", category: "construction", salary: "SAR 22,000 – 32,000", posted: "1 day ago" },
  { id: "5", title: "Data Analyst", company: "NEOM", location: "NEOM", type: "Full-time", category: "it", salary: "SAR 15,000 – 22,000", posted: "2 days ago" },
  { id: "6", title: "Nurse – ICU", company: "King Faisal Specialist Hospital", location: "Riyadh", type: "Full-time", category: "healthcare", salary: "SAR 8,000 – 12,000", posted: "2 days ago" },
  { id: "7", title: "Drilling Engineer", company: "Schlumberger", location: "Al Khobar", type: "Full-time", category: "oil-gas", salary: "SAR 25,000 – 35,000", posted: "3 days ago" },
  { id: "8", title: "Marketing Specialist", company: "Almarai", location: "Riyadh", type: "Full-time", category: "sales-marketing", salary: "SAR 10,000 – 15,000", posted: "3 days ago" },
  { id: "9", title: "Accountant", company: "PwC Saudi Arabia", location: "Riyadh", type: "Full-time", category: "finance", salary: "SAR 9,000 – 14,000", posted: "4 days ago" },
  { id: "10", title: "Warehouse Supervisor", company: "Naqel Express", location: "Jeddah", type: "Full-time", category: "logistics", salary: "SAR 7,000 – 10,000", posted: "4 days ago" },
  { id: "11", title: "HVAC Technician", company: "Zamil Air Conditioners", location: "Dammam", type: "Full-time", category: "technicians", salary: "SAR 5,000 – 8,000", posted: "5 days ago" },
  { id: "12", title: "English Teacher", company: "British International School", location: "Jeddah", type: "Full-time", category: "education", salary: "SAR 8,000 – 12,000", posted: "5 days ago" },
];

export const companies = [
  "Saudi Aramco",
  "NEOM",
  "SABIC",
  "STC",
  "Almarai",
  "Saudi Binladin Group",
  "King Faisal Specialist Hospital",
  "PwC Saudi Arabia",
  "Schlumberger",
  "Zamil Group",
  "Saudi Electric Company",
  "Riyadh Bank",
];

export const marqueeJobs = [
  "Senior Engineer — Riyadh",
  "Software Developer — Jeddah",
  "HSE Officer — Dammam",
  "Project Manager — NEOM",
  "Nurse — Riyadh",
  "Drilling Tech — Al Khobar",
  "Accountant — Jeddah",
  "Marketing Lead — Riyadh",
  "Teacher — Jeddah",
  "Warehouse Lead — Dammam",
  "Technician — Dammam",
  "Finance Manager — Riyadh",
];
