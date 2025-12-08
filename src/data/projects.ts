export type Project = {
  title: string;
  techStack: string[];
  description: string;
  points: string[];
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
  },
  {
    title: "Yummy Food Delivery Website",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Node.js", "MongoDB"],
    description:
      "Responsive food delivery site with online ordering and real-time order status.",
    points: [
      "Front-end optimized for mobile with 95+ Lighthouse performance score.",
      "Implemented Node.js/Express backend with MongoDB for menu, cart and order workflows plus Stripe payments and WebSocket-based live order status.",
    ],
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
  },
];
