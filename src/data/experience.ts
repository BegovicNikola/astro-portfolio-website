// The shape of one job. Every entry in EXPERIENCE below must match it,
// and TypeScript will complain if a field is missing or misspelled.
export interface Experience {
  role: string;
  company: string;
  start: string;
  end: string; // "Present" for the current job
  highlights: string[];
  stack: string[];
}

// Ordered newest first, which is how it will render on the page.
export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Full-Stack Developer",
    company: "Bega Consulting",
    start: "Feb 2023",
    end: "Present",
    highlights: [
      "Built the quoting and submission platform used across a Fortune 500 insurance group's subsidiaries, supporting quote intake, underwriting submissions, and status tracking for brokers and underwriters.",
      "Created dynamic forms with validation rules, document upload, and a library of reusable components, connecting the frontend to existing backend services.",
      "Refactored the legacy frontend of Awin, an affiliate marketing platform, working with the design team on responsive layouts and design system improvements, and writing scripts that automate generation of populated, styled client profiles.",
      "Joined client engineering teams as an embedded contractor across insurance, affiliate marketing, and logistics.",
    ],
    stack: [
      "Next.js",
      "React.js",
      "React Query",
      "Zustand",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind",
      "Claude",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "HTEC Group",
    start: "May 2022",
    end: "Feb 2023",
    highlights: [
      "Built administration tools and dashboards for the business listings platform of a major mapping service, as part of an outsourced team embedded with a Fortune 100 client.",
      "Developed content management features and integrated an AI service that detects and removes prohibited content, supporting a more controlled, moderated ecosystem than open mapping platforms.",
      "Led implementation of an in-app notification system across the platform, informing business owners of listing approvals and rejected submissions.",
      "Partnered directly with the design team, building a shared component library, standardizing UI patterns across the platform, and giving feasibility feedback on designs, accelerating feature delivery.",
    ],
    stack: [
      "React.js",
      "React Query",
      "TypeScript",
      "Storybook",
      "Git",
      "Agile workflow",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "IBM",
    start: "Jun 2020",
    end: "May 2022",
    highlights: [
      "Built full-stack features for IBM Docs, the enterprise platform hosting documentation for 1,200+ IBM products.",
      "Developed backend data pipelines and cloud storage workflows to handle automated document uploads, real-time data transformations, and content queries.",
      "Implemented responsive UI components and interactive views, enabling dynamic document rendering.",
      "Led an onboarding revamp for new engineers, building a structured curriculum on internal platforms that cut ramp-up time from four weeks to two.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Carbon Design System",
      "IBM Cloud",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Consulteer",
    start: "Jul 2019",
    end: "Jun 2020",
    highlights: [
      "Engineered healthcare management features for DocBox, a Swiss medical platform, delivering accessible, WCAG-compliant interfaces tailored for elderly patients and users with disabilities.",
      "Developed core competition modules for Racing Unleashed, an F1 simulation platform, including interactive driver profiles, race scheduling, and live leaderboards.",
      "Shipped performant, responsive frontends across multiple client codebases, ensuring cross-browser compatibility and clean component design.",
    ],
    stack: [
      "React.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Angular Material",
      "SCSS",
      "REST APIs",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Guidance Guide | NetCast",
    start: "Oct 2017",
    end: "Jul 2019",
    highlights: [
      "Built the user interface for Guidance Guide, a Stack Overflow-style Q&A platform for parents, refining existing designs into responsive, pixel-perfect layouts for asking questions, upvoting answers, and distributing affiliate awards to top contributors.",
      "Developed features for NetCast's TV streaming mobile app and its supporting CMS, enabling TV network clients to manage show programming, commercial breaks, and real-time broadcast schedules.",
      "Migrated class components to React Hooks following their release in React 16.8.0, adopting a functional paradigm to reduce boilerplate and improve code readability.",
    ],
    stack: [
      "React.js",
      "React Native",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Ant Design",
      "jQuery",
      "HTML5",
      "SCSS",
    ],
  },
];
