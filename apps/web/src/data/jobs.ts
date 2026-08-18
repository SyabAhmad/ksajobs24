export type JobType = "Full-time" | "Part-time" | "Contract" | "Remote";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: JobType;
  category: string;
  salary: string;
  posted: string;
  postedDays: number;
  description?: string;
  requirements?: string[];
};

export const allJobs: Job[] = [
  { id: "1", title: "Senior Civil Engineer", company: "Saudi Binladin Group", location: "Riyadh", type: "Full-time", category: "engineering", salary: "SAR 18,000 – 25,000", posted: "2 hours ago", postedDays: 0,
    description: "We are looking for an experienced Senior Civil Engineer to lead infrastructure projects across Saudi Arabia. You will oversee design, planning, and execution of large-scale construction projects including bridges, highways, and commercial buildings.",
    requirements: ["Bachelor's degree in Civil Engineering", "8+ years of experience in infrastructure projects", "PMP or equivalent certification preferred", "Proficiency in AutoCAD, Revit, and project management tools", "Strong knowledge of Saudi building codes and regulations"],
  },
  { id: "2", title: "Frontend Developer", company: "STC Solutions", location: "Riyadh", type: "Full-time", category: "it", salary: "SAR 12,000 – 18,000", posted: "5 hours ago", postedDays: 0,
    description: "Join our digital transformation team to build cutting-edge web applications. You will work with React, TypeScript, and modern frontend tooling to deliver exceptional user experiences for millions of users.",
    requirements: ["3+ years of experience with React or Vue.js", "Strong TypeScript and JavaScript skills", "Experience with Tailwind CSS or similar frameworks", "Familiarity with REST APIs and GraphQL", "Portfolio or GitHub profile demonstrating your work"],
  },
  { id: "3", title: "HSE Manager", company: "Saudi Aramco", location: "Dhahran", type: "Full-time", category: "safety", salary: "SAR 20,000 – 30,000", posted: "1 day ago", postedDays: 1,
    description: "Lead our Health, Safety, and Environmental programs across operational facilities. You will develop safety protocols, conduct audits, and ensure compliance with local and international HSE standards.",
    requirements: ["Bachelor's degree in Engineering or Environmental Science", "NEBOSH or IOSH certification required", "7+ years in HSE management within oil & gas", "Experience with ISO 45001 and ISO 14001 systems", "Excellent leadership and communication skills"],
  },
  { id: "4", title: "Project Manager – Construction", company: "Al Habib Group", location: "Jeddah", type: "Contract", category: "construction", salary: "SAR 22,000 – 32,000", posted: "1 day ago", postedDays: 1,
    description: "Manage end-to-end construction projects from inception to handover. Coordinate with architects, engineers, and subcontractors to deliver projects on time and within budget.",
    requirements: ["Bachelor's degree in Construction Management or Civil Engineering", "10+ years of construction project management experience", "PMP certification strongly preferred", "Proven track record of delivering projects above SAR 50M", "Strong vendor and stakeholder management skills"],
  },
  { id: "5", title: "Data Analyst", company: "NEOM", location: "NEOM", type: "Full-time", category: "it", salary: "SAR 15,000 – 22,000", posted: "2 days ago", postedDays: 2,
    description: "Analyze complex datasets to drive decision-making for NEOM's smart city initiatives. You will build dashboards, run statistical analyses, and present insights to leadership.",
    requirements: ["Bachelor's degree in Statistics, Computer Science, or related field", "3+ years of data analysis experience", "Proficiency in SQL, Python, and data visualization tools", "Experience with Power BI or Tableau", "Strong analytical and presentation skills"],
  },
  { id: "6", title: "Nurse – ICU", company: "King Faisal Specialist Hospital", location: "Riyadh", type: "Full-time", category: "healthcare", salary: "SAR 8,000 – 12,000", posted: "2 days ago", postedDays: 2,
    description: "Provide critical care nursing in our state-of-the-art ICU unit. You will monitor patient conditions, administer treatments, and collaborate with physicians to ensure the highest standard of patient care.",
    requirements: ["Bachelor's degree in Nursing", "Current nursing license from Saudi Commission for Health Specialties", "2+ years of ICU or critical care experience", "BLS and ACLS certifications required", "Strong attention to detail and ability to work under pressure"],
  },
  { id: "7", title: "Drilling Engineer", company: "Schlumberger", location: "Al Khobar", type: "Full-time", category: "oil-gas", salary: "SAR 25,000 – 35,000", posted: "3 days ago", postedDays: 3 },
  { id: "8", title: "Marketing Specialist", company: "Almarai", location: "Riyadh", type: "Full-time", category: "sales-marketing", salary: "SAR 10,000 – 15,000", posted: "3 days ago", postedDays: 3 },
  { id: "9", title: "Accountant", company: "PwC Saudi Arabia", location: "Riyadh", type: "Full-time", category: "finance", salary: "SAR 9,000 – 14,000", posted: "4 days ago", postedDays: 4 },
  { id: "10", title: "Warehouse Supervisor", company: "Naqel Express", location: "Jeddah", type: "Full-time", category: "logistics", salary: "SAR 7,000 – 10,000", posted: "4 days ago", postedDays: 4 },
  { id: "11", title: "HVAC Technician", company: "Zamil Air Conditioners", location: "Dammam", type: "Full-time", category: "technicians", salary: "SAR 5,000 – 8,000", posted: "5 days ago", postedDays: 5 },
  { id: "12", title: "English Teacher", company: "British International School", location: "Jeddah", type: "Full-time", category: "education", salary: "SAR 8,000 – 12,000", posted: "5 days ago", postedDays: 5 },
  { id: "13", title: "Mechanical Engineer", company: "SABIC", location: "Riyadh", type: "Full-time", category: "engineering", salary: "SAR 16,000 – 22,000", posted: "6 days ago", postedDays: 6 },
  { id: "14", title: "Backend Developer", company: "NEOM", location: "NEOM", type: "Remote", category: "it", salary: "SAR 14,000 – 20,000", posted: "1 week ago", postedDays: 7 },
  { id: "15", title: "Safety Inspector", company: "Saudi Aramco", location: "Dhahran", type: "Contract", category: "safety", salary: "SAR 12,000 – 18,000", posted: "1 week ago", postedDays: 7 },
  { id: "16", title: "Site Engineer – Roads", company: "Saudi Binladin Group", location: "Jeddah", type: "Full-time", category: "construction", salary: "SAR 14,000 – 20,000", posted: "1 week ago", postedDays: 7 },
  { id: "17", title: "Pharmacist", company: "King Faisal Specialist Hospital", location: "Riyadh", type: "Full-time", category: "healthcare", salary: "SAR 7,000 – 10,000", posted: "1 week ago", postedDays: 7 },
  { id: "18", title: "Reservoir Engineer", company: "Schlumberger", location: "Al Khobar", type: "Full-time", category: "oil-gas", salary: "SAR 28,000 – 38,000", posted: "8 days ago", postedDays: 8 },
  { id: "19", title: "Content Writer", company: "Almarai", location: "Riyadh", type: "Part-time", category: "sales-marketing", salary: "SAR 5,000 – 8,000", posted: "8 days ago", postedDays: 8 },
  { id: "20", title: "Financial Analyst", company: "Riyadh Bank", location: "Riyadh", type: "Full-time", category: "finance", salary: "SAR 11,000 – 16,000", posted: "9 days ago", postedDays: 9 },
  { id: "21", title: "Logistics Coordinator", company: "Naqel Express", location: "Dammam", type: "Full-time", category: "logistics", salary: "SAR 6,000 – 9,000", posted: "9 days ago", postedDays: 9 },
  { id: "22", title: "Electrician", company: "Zamil Air Conditioners", location: "Dammam", type: "Contract", category: "technicians", salary: "SAR 4,000 – 7,000", posted: "10 days ago", postedDays: 10 },
  { id: "23", title: "Math Teacher", company: "British International School", location: "Riyadh", type: "Full-time", category: "education", salary: "SAR 9,000 – 13,000", posted: "10 days ago", postedDays: 10 },
  { id: "24", title: "Process Engineer", company: "SABIC", location: "Jubail", type: "Full-time", category: "engineering", salary: "SAR 17,000 – 24,000", posted: "11 days ago", postedDays: 11 },
  { id: "25", title: "Mobile Developer", company: "STC Solutions", location: "Riyadh", type: "Remote", category: "it", salary: "SAR 13,000 – 19,000", posted: "11 days ago", postedDays: 11 },
  { id: "26", title: "HSE Coordinator", company: "Al Habib Group", location: "Dammam", type: "Full-time", category: "safety", salary: "SAR 10,000 – 15,000", posted: "12 days ago", postedDays: 12 },
  { id: "27", title: "Quantity Surveyor", company: "Saudi Binladin Group", location: "Riyadh", type: "Full-time", category: "construction", salary: "SAR 13,000 – 18,000", posted: "12 days ago", postedDays: 12 },
  { id: "28", title: "Lab Technician", company: "King Faisal Specialist Hospital", location: "Riyadh", type: "Full-time", category: "healthcare", salary: "SAR 5,000 – 8,000", posted: "13 days ago", postedDays: 13 },
  { id: "29", title: "Field Operator", company: "Saudi Aramco", location: "Abqaiq", type: "Full-time", category: "oil-gas", salary: "SAR 8,000 – 12,000", posted: "13 days ago", postedDays: 13 },
  { id: "30", title: "Sales Executive", company: "Almarai", location: "Jeddah", type: "Full-time", category: "sales-marketing", salary: "SAR 7,000 – 11,000", posted: "14 days ago", postedDays: 14 },
  { id: "31", title: "HR Officer", company: "Riyadh Bank", location: "Riyadh", type: "Full-time", category: "admin-hr", salary: "SAR 8,000 – 12,000", posted: "14 days ago", postedDays: 14 },
  { id: "32", title: "Supply Chain Analyst", company: "Naqel Express", location: "Riyadh", type: "Full-time", category: "logistics", salary: "SAR 9,000 – 13,000", posted: "15 days ago", postedDays: 15 },
  { id: "33", title: "Welder", company: "Zamil Air Conditioners", location: "Dammam", type: "Contract", category: "technicians", salary: "SAR 4,500 – 7,500", posted: "15 days ago", postedDays: 15 },
  { id: "34", title: "Arabic Teacher", company: "British International School", location: "Jeddah", type: "Full-time", category: "education", salary: "SAR 7,000 – 10,000", posted: "16 days ago", postedDays: 16 },
  { id: "35", title: "Structural Engineer", company: "Saudi Binladin Group", location: "Riyadh", type: "Full-time", category: "engineering", salary: "SAR 15,000 – 21,000", posted: "16 days ago", postedDays: 16 },
  { id: "36", title: "DevOps Engineer", company: "NEOM", location: "NEOM", type: "Remote", category: "it", salary: "SAR 18,000 – 26,000", posted: "17 days ago", postedDays: 17 },
  { id: "37", title: "Quality Controller", company: "SABIC", location: "Jubail", type: "Full-time", category: "engineering", salary: "SAR 10,000 – 14,000", posted: "17 days ago", postedDays: 17 },
  { id: "38", title: "Executive Assistant", company: "PwC Saudi Arabia", location: "Riyadh", type: "Full-time", category: "admin-hr", salary: "SAR 7,000 – 10,000", posted: "18 days ago", postedDays: 18 },
  { id: "39", title: "Truck Driver", company: "Naqel Express", location: "Jeddah", type: "Full-time", category: "logistics", salary: "SAR 3,500 – 5,500", posted: "18 days ago", postedDays: 18 },
  { id: "40", title: "Plumber", company: "Zamil Air Conditioners", location: "Riyadh", type: "Contract", category: "technicians", salary: "SAR 4,000 – 6,500", posted: "19 days ago", postedDays: 19 },
];

export const companies = [
  "Saudi Aramco",
  "NEOM",
  "SABIC",
  "STC Solutions",
  "Almarai",
  "Saudi Binladin Group",
  "King Faisal Specialist Hospital",
  "PwC Saudi Arabia",
  "Schlumberger",
  "Zamil Air Conditioners",
  "Naqel Express",
  "Riyadh Bank",
  "Al Habib Group",
  "British International School",
];

export const locations = [
  "Riyadh",
  "Jeddah",
  "Dammam",
  "Dhahran",
  "NEOM",
  "Al Khobar",
  "Jubail",
  "Abqaiq",
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

export const featuredJobs = allJobs.slice(0, 12);

export const getJobById = (id: string) => allJobs.find((j) => j.id === id);

export const getRelatedJobs = (job: Job, limit = 4) =>
  allJobs.filter((j) => j.id !== job.id && j.category === job.category).slice(0, limit);
