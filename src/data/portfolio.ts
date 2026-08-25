export const profile = {
  name: "Sanjay N",
  title: "Full Stack Developer",
  tagline:
    "Computer Science & Engineering final-year student building responsive, secure web applications with JavaScript, Node.js and MongoDB — with hands-on internship experience across full stack, front-end and AI teams.",
  about: [
    "I'm a Computer Science and Engineering student at Nehru Institute of Engineering and Technology, Coimbatore, focused on full stack web development and data-driven problem solving.",
    "My work so far spans authentication systems and a complete e-commerce application built with HTML, CSS, JavaScript, Node.js and MongoDB. Alongside that, I work with Python and its data ecosystem — NumPy, Pandas and Matplotlib — for analysis and visualisation.",
    "Four internships across AI, Python development, front-end development and industry practice have given me practical exposure to real engineering workflows, version control with GitHub, and shipping features end to end.",
  ],
  email: "Sanjaynatrajsivam@gmail.com",
  phone: "+91 98948 39498",
  location: "Pollachi, Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/Sanjay-n-2b65b43663",
  objective:
    "To apply my technical and problem-solving skills in a dynamic software development environment.",
};

export const stats = [
  { value: "4", label: "Internships" },
  { value: "2", label: "Full Stack Projects" },
  { value: "5", label: "Certifications" },
  { value: "7.45", label: "CGPA (B.E CSE)" },
];

export const skillGroups = [
  { category: "Programming Languages", items: ["Python", "Java", "C"] },
  { category: "Front-End", items: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
  { category: "Back-End", items: ["Node.js", "Python"] },
  { category: "Database", items: ["MongoDB"] },
  { category: "Libraries", items: ["NumPy", "Pandas", "Matplotlib"] },
  { category: "Tools", items: ["VS Code", "GitHub", "Canva"] },
  { category: "Core Concepts", items: ["Full Stack Development", "Data Science", "Python"] },
];

export type Experience = {
  role: string;
  company: string;
  location?: string;
  focus: string;
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Artificial Intelligence Intern",
    company: "Synoverse",
    location: "Coimbatore",
    focus:
      "Worked on artificial intelligence fundamentals and applied Python-based workflows for data preparation and model experimentation.",
    tech: ["Python", "NumPy", "Pandas"],
  },
  {
    role: "Python Development Intern",
    company: "Hunar Intern",
    focus:
      "Built Python programs and small applications, strengthening core language skills, scripting and problem solving.",
    tech: ["Python"],
  },
  {
    role: "Industry Practice",
    company: "M8 IT Solution Pvt Ltd",
    focus:
      "Gained exposure to professional software development practices and day-to-day delivery workflows in an IT services environment.",
    tech: ["Software Development"],
  },
  {
    role: "Front-End Development Intern",
    company: "Cognifyz Technologies",
    focus:
      "Developed responsive web interfaces with HTML, CSS, Bootstrap and JavaScript, focusing on layout accuracy and usability.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

export type Project = {
  id: string;
  name: string;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  contribution: string;
};

export const projects: Project[] = [
  {
    id: "seamless-login",
    name: "Seamless Login Page",
    summary:
      "A secure authentication flow with validated inputs and backend integration for a smooth sign-in experience.",
    problem:
      "Basic login forms often accept unchecked input and offer weak feedback, creating both security gaps and a poor user experience.",
    solution:
      "Built a login system with front-end validation layered on top of backend authentication, so invalid credentials and malformed input are caught before reaching protected routes.",
    features: [
      "Input validation on every field",
      "Authentication handled through backend integration",
      "Clear, immediate error feedback",
      "Responsive, accessible form layout",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    contribution:
      "Designed and implemented the full flow — interface, validation rules and the backend authentication integration.",
  },
  {
    id: "ecommerce-app",
    name: "E-Commerce Web Application",
    summary:
      "A full-stack storefront covering product listing, shopping cart and checkout on a Node.js and MongoDB backend.",
    problem:
      "A functional store needs product data, cart state and checkout to stay consistent across the client and the database.",
    solution:
      "Built an end-to-end application where products are served from MongoDB through a Node.js backend, with cart state and a checkout flow wired into the front-end.",
    features: [
      "Product listing served from the database",
      "Shopping cart with item management",
      "Checkout flow",
      "Responsive storefront layout",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    contribution:
      "Developed both the front-end storefront and the backend data layer, including the product, cart and checkout logic.",
  },
];

export const education = [
  {
    degree: "B.E Computer Science and Engineering",
    institution: "Nehru Institute of Engineering and Technology, Coimbatore",
    year: "2026",
    score: "7.45 CGPA",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "Shenbagam Matric Hr. Sec. School, Pollachi",
    year: "2022",
    score: "60%",
  },
  {
    degree: "Secondary (SSLC)",
    institution: "Shenbagam Matric Hr. Sec. School, Pollachi",
    year: "2020",
    score: "59%",
  },
];

export const certifications = [
  { name: "IoT", org: "NPTEL" },
  { name: "AI for Beginners", org: "HP LIFE" },
  { name: "R Training", org: "Training Programme" },
  { name: "Python Training", org: "IIT Bombay" },
  { name: "Full Stack in Python", org: "Course Completion, Coimbatore" },
];

export const workshops = [
  { name: "Intellectual Property Rights", org: "NGI TBI" },
  { name: "Data Science Tools", org: "GUVI" },
];
