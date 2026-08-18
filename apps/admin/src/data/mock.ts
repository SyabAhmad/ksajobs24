export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  category: string;
  salary: string;
  status: "active" | "draft" | "closed";
  posted: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  status: "published" | "draft";
  date: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  jobCount: number;
};

export const mockJobs: Job[] = [
  { id: "1", title: "Senior Civil Engineer", company: "Saudi Binladin Group", location: "Riyadh", type: "Full-time", category: "engineering", salary: "SAR 18,000 – 25,000", status: "active", posted: "2 hours ago" },
  { id: "2", title: "Frontend Developer", company: "STC Solutions", location: "Riyadh", type: "Full-time", category: "it", salary: "SAR 12,000 – 18,000", status: "active", posted: "5 hours ago" },
  { id: "3", title: "HSE Manager", company: "Saudi Aramco", location: "Dhahran", type: "Full-time", category: "safety", salary: "SAR 20,000 – 30,000", status: "draft", posted: "1 day ago" },
  { id: "4", title: "Project Manager", company: "Al Habib Group", location: "Jeddah", type: "Contract", category: "construction", salary: "SAR 22,000 – 32,000", status: "active", posted: "1 day ago" },
  { id: "5", title: "Data Analyst", company: "NEOM", location: "NEOM", type: "Full-time", category: "it", salary: "SAR 15,000 – 22,000", status: "closed", posted: "2 days ago" },
  { id: "6", title: "Nurse – ICU", company: "King Faisal Specialist Hospital", location: "Riyadh", type: "Full-time", category: "healthcare", salary: "SAR 8,000 – 12,000", status: "active", posted: "2 days ago" },
];

export const mockBlog: BlogPost[] = [
  { id: "1", title: "How to Ace Your Interview in Saudi Arabia", excerpt: "Tips and tricks for landing your dream job in KSA.", author: "Admin", status: "published", date: "Aug 15, 2026" },
  { id: "2", title: "Top 10 In-Demand Jobs in 2026", excerpt: "A look at the hottest job markets in the Kingdom.", author: "Admin", status: "published", date: "Aug 12, 2026" },
  { id: "3", title: "Resume Writing Guide", excerpt: "Craft a winning resume that gets noticed by recruiters.", author: "Admin", status: "draft", date: "Aug 10, 2026" },
];

export const mockCategories: Category[] = [
  { id: "1", name: "Engineering", slug: "engineering", jobCount: 12 },
  { id: "2", name: "IT & Software", slug: "it", jobCount: 8 },
  { id: "3", name: "Health & Safety", slug: "safety", jobCount: 6 },
  { id: "4", name: "Construction", slug: "construction", jobCount: 9 },
  { id: "5", name: "Oil, Gas & Energy", slug: "oil-gas", jobCount: 5 },
  { id: "6", name: "Healthcare", slug: "healthcare", jobCount: 7 },
  { id: "7", name: "Finance", slug: "finance", jobCount: 4 },
  { id: "8", name: "Sales & Marketing", slug: "sales-marketing", jobCount: 6 },
  { id: "9", name: "Admin & HR", slug: "admin-hr", jobCount: 3 },
  { id: "10", name: "Education", slug: "education", jobCount: 4 },
  { id: "11", name: "Logistics", slug: "logistics", jobCount: 5 },
  { id: "12", name: "Technicians", slug: "technicians", jobCount: 3 },
];
