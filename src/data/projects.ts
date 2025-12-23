// projects.ts

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  points: string[];

  // ✅ added (placeholders supported)
  image?: string; // local path OR url
  demoUrl?: string; // live link
  repoUrl?: string; // github link
  year?: string; // "2025"
  role?: string; // "Full-Stack Developer"
  category?: string; // "Web App", "Android", etc
};

export const projects: Project[] = [
  {
    title: "Student Management System (MERN)",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    description:
      "Full-stack web application to manage student records, courses, and grades.",
    points: [
      "Implemented RESTful APIs for CRUD operations with JWT-based authentication and role-based access (admin/teacher/student).",
      "Optimized NoSQL schemas and indexing, improving query response times by about 30%.",
    ],

    // ✅ placeholders
    image: "/projects/student-management.png",
    demoUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/your-repo",
    year: "2025",
    role: "Full-Stack Developer",
    category: "Web App",
  },
  {
    title: "Pet Guessing Game (Android)",
    techStack: ["Java", "Kotlin", "Android Studio", "SQLite"],
    description:
      "Interactive Android game using randomized pet profiles and local persistence.",
    points: [
      "Built core game logic with randomization algorithms and Material Design UI.",
      "Used SQLite for local storage and added JUnit + instrumented UI tests achieving ~85% code coverage.",
    ],

    // ✅ placeholders
    image: "/projects/pet-guessing-game.png",
    demoUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/your-repo",
    year: "2024",
    role: "Android Developer",
    category: "Mobile App",
  },
  {
    title: "Yummy Food Delivery Website",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "MongoDB",
    ],
    description:
      "Responsive food delivery site with online ordering and real-time order status.",
    points: [
      "Front-end optimized for mobile with 95+ Lighthouse performance score.",
      "Implemented Node.js/Express backend with MongoDB for menu, cart and order workflows plus Stripe payments and WebSocket-based live order status.",
    ],

    // ✅ placeholders
    image: "/projects/yummy-food.png",
    demoUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/your-repo",
    year: "2024",
    role: "Full-Stack Developer",
    category: "Web App",
  },
  {
    title: "Ralahami.lk — Restaurant Ordering & Ops Platform",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "WebSockets",
    ],
    description:
      "End-to-end restaurant ordering platform with inventory and operations tools.",
    points: [
      "Built responsive Next.js front-end with Tailwind CSS and strong Lighthouse scores.",
      "Developed API with JWT-based RBAC, inventory (BOM) tracking, supplier workflows, and real-time KOT updates via Pusher.",
      "Integrated Stripe (sandbox) and Cash-on-Delivery with audit logs and CI/CD deployments.",
    ],

    // ✅ placeholders
    image: "/projects/ralahami.png",
    demoUrl: "https://your-demo-link.com",
    repoUrl: "https://github.com/your-username/your-repo",
    year: "2025",
    role: "Full-Stack Developer",
    category: "SaaS / Platform",
  },
];
