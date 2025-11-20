import { Terminal, ShieldCheck } from "lucide-react";

export type PersonaKey = "dev" | "it";

export const personal = {
  name: "Chun Him Ho (Nicholas)",
  title: "Backend Developer | IT Support Specialist",
  email: "nicholasriven717@gmail.com",
  phone: "437-660-3280",
  location: "Finch, Ontario, Canada",
  links: {
    github: "https://github.com/eipi717",
    linkedin: "https://www.linkedin.com/in/nicholaschho",
    resume: "mailto:nicholasriven717@gmail.com",
  },
  education: [
    { school: "The University of Hong Kong", degree: "BEng (Computer Engineering)", detail: "Minor in Mathematics", date: "2018 - 2023" },
  ],
  certifications: [
    "ISC2 Certified in Cybersecurity",
    "Microsoft Azure Fundamentals",
    "CompTIA Security+ (in progress)",
  ],
};

export const personas = {
  dev: {
    role: "Backend Developer",
    verb: "Innovates",
    headline: "Code that Innovates.",
    tagline: "Backend-first engineer building resilient APIs and automation with Python, Java, and JavaScript.",
    summary: "Proactive, data-driven developer with 2+ years designing and testing APIs, shipping automation that improves reliability and UX at scale.",
    highlights: [
      "API design and systems testing to meet strict SLAs and UX goals.",
      "Selenium + LLM scraping pipelines that remove manual data collection.",
      "Performance-minded Java/Spring and Python/FastAPI services with clear docs.",
    ],
    icon: Terminal,
    skills: [
      { title: "Backend", items: ["Python / FastAPI", "Java / Spring Boot", "REST / Auth / RBAC"] },
      { title: "Frontend", items: ["React / Next.js", "Tailwind", "Framer Motion"] },
      { title: "Data & Infra", items: ["PostgreSQL / MySQL", "Docker", "AWS / Azure", "CI/CD"] },
      { title: "Automation", items: ["LLM-assisted pipelines", "Selenium", "Testing (PyTest, JUnit)"] },
    ],
  },
  it: {
    role: "IT Support Specialist",
    verb: "Connects",
    headline: "Systems that Connect.",
    tagline: "Field IT tech delivering secure networks, CCTV/access control, and responsive support.",
    summary: "Hands-on IT technician securing firewalls, VLAN topologies, and hybrid identity while closing L1/L2 tickets fast with repeatable runbooks.",
    highlights: [
      "Sophos XG firewall hardening, VPNs, and VLAN segmentation across client sites.",
      "CCTV and access control deployments with PoE, ACLs, and DMZ isolation.",
      "Hybrid AD/Entra ID management, Acronis backup monitoring, and ticket SLAs.",
    ],
    icon: ShieldCheck,
    skills: [
      { title: "Networking", items: ["Sophos XG", "VLAN / ACL / VPN", "Wireshark captures"] },
      { title: "Systems", items: ["Windows Server", "Active Directory / Entra ID", "Acronis backups"] },
      { title: "Field Work", items: ["CCTV (Hikvision/Dahua)", "Access control & cabling", "PoE deployments"] },
      { title: "Scripting", items: ["PowerShell automation", "Python basics", "Runbooks & SOPs"] },
    ],
  },
} as const;

export const experiences = [
  {
    company: "Technethon",
    role: "IT Technician (Contractor)",
    date: "Jul 2025 - Present",
    category: "it",
    order: 1,
    bullets: [
      "Delivered on-site infrastructure for healthcare/manufacturing clients, supporting 50+ users and critical systems.",
      "Hardened Sophos XG firewalls (VPN, IPS, DMZ for camera networks) and captured packets with Wireshark to cut incidents by 40%.",
      "Built VLAN segmentation and provisioning scripts to reduce switch setup time by 70%; documented runbooks and cabling diagrams.",
      "Commissioned 100+ IP cameras and access control endpoints via PoE/ACL isolation; maintained AD/Entra ID and Acronis backups.",
    ],
  },
  {
    company: "Technethon",
    role: "Junior IT Technician",
    date: "May 2024 - Jun 2025",
    category: "it",
    order: 2,
    bullets: [
      "Configured Sophos firewalls, VPNs, and VLANs; isolated CCTV networks to stabilize performance.",
      "Resolved 95% of L1/L2 tickets within SLA via GLPI, TeamViewer, and RDP; authored SOPs for repeatability.",
      "Maintained AD accounts, group policies, and backup jobs; deployed access control hardware across commercial sites.",
    ],
  },
  {
    company: "FutureSight",
    role: "Contract Developer",
    date: "Mar 2024 - Apr 2024",
    category: "dev",
    order: 3,
    bullets: [
      "Built GPT-backed scraping to summarize research data via REST APIs, boosting accuracy and speed.",
      "Partnered with PMs in weekly checkpoints to prioritize fixes and feature deliveries.",
      "Documented pipelines and handoff notes to keep the team unblocked.",
    ],
  },
  {
    company: "Lively Impact Technology",
    role: "Software Developer",
    date: "Aug 2023 - May 2024",
    category: "dev",
    order: 4,
    bullets: [
      "Led Selenium/BeautifulSoup scraping across 40+ sites to automate food-recall monitoring.",
      "Designed API specs and UAT plans; kept releases aligned with client requirements.",
      "Extended social-tracking dashboards (React + Spring Boot) with sentiment analysis for multiple brands.",
    ],
  },
  {
    company: "Lively Impact Technology",
    role: "Software Developer",
    date: "Aug 2022 - Jul 2023",
    category: "dev",
    order: 5,
    bullets: [
      "Shipped a data processing system (Spring Boot + Apache Flink) managing billions of events with interactive querying.",
      "Optimized predictive churn models on billion-row telecom datasets to improve forecast accuracy.",
      "Delivered dashboards and APIs that aligned to evolving client specs.",
    ],
  },
  {
    company: "WildFaces.ai",
    role: "AI Specialist",
    date: "May 2022 - Aug 2022",
    category: "dev",
    order: 6,
    bullets: [
      "Researched facial-angle effects on gender identification; implemented OpenCV prototypes achieving 60% accuracy.",
      "Captured and curated facial datasets to improve model quality.",
    ],
  },
  {
    company: "M Learning",
    role: "Tutor",
    date: "Oct 2021 - May 2022",
    category: "dev",
    order: 7,
    bullets: [
      "Authored customized teaching material and tracked student progress for primary/secondary cohorts.",
      "Delivered assessments and feedback loops that improved pass rates.",
    ],
  },
  {
    company: "Pi Innovation",
    role: "STEM Intern",
    date: "Jun 2021 - Aug 2021",
    category: "dev",
    order: 8,
    bullets: [
      "Created interactive STEM curriculum and taught 3D printing with TinkerCAD and Micro:Bit programming.",
      "Designed hands-on lessons to spark curiosity in primary students.",
    ],
  },
  {
    company: "The Hong Kong Polytechnic University",
    role: "Student Assistant",
    date: "May 2018 - Aug 2019",
    category: "dev",
    order: 9,
    bullets: [
      "Tutored calculus, statistics, and linear algebra; ran enhancement courses that raised pass rates.",
      "Mentored students with structured practice plans and progress tracking.",
    ],
  },
] as const;

export const projects = [
  {
    title: "PriceMatchAPI",
    category: "dev",
    tech: ["Python", "FastAPI", "Selenium", "Ollama (Gemma 2)"],
    desc: "Automated price-tracking API that standardizes product names with LLMs.",
    link: "https://github.com/eipi717",
  },
  {
    title: "Church Management App",
    category: "dev",
    tech: ["Flutter", "Dart", "Auth API"],
    desc: "Cross-platform booking and announcements system with authenticated access.",
    link: "https://github.com/eipi717",
  },
  {
    title: "Secure Network Deployment",
    category: "it",
    tech: ["Sophos XG", "VLAN", "DMZ"],
    desc: "Segmented VLAN topology protecting 100+ cameras via DMZ isolation.",
    link: "https://www.linkedin.com/in/nicholaschho/",
  },
  {
    title: "Incident Playbooks",
    category: "it",
    tech: ["PowerShell", "Intune", "O365"],
    desc: "Automated remediation scripts for onboarding, patching, and device recovery.",
    link: "https://www.linkedin.com/in/nicholaschho/",
  },
] as const;
