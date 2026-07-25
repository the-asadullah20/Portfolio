export const profile = {
  name: "Asadullah Ahmad",
  first: "ASADULLAH",
  last: "AHMAD.",
  role: "AA // CS",
  tagline: "ICPC 2026 SILVER MEDALIST",
  typing: "BUILDING AS A RAG SYSTEMS BUI_",
  email: "asadullahhmad5@gmail.com",
  phone: "+92 334 6630398",
  phoneHref: "+923346630398",
  location: "Lahore, Pakistan",
  github: "https://github.com/the-asadullah20",
  githubHandle: "github.com/the-asadullah20",
  linkedin: "https://www.linkedin.com/in/asadullah-ahmad5",
  linkedinHandle: "linkedin.com/in/asadullah-ahmad5",
  leetcode: "https://leetcode.com/u/adenosinetriphosphate/",
  leetcodeHandle: "leetcode.com/adenosinetriphosphate",
  instagram: "https://www.instagram.com/asad.__.ahmad5",
  instagramHandle: "asad.__.ahmad5",
  buyMeACoffee: "https://buymeacoffee.com/asadullahhp",
  resumePath: "/resume/Asadullah_Ahmad_Resume.pdf",
};

export const aboutStats = [
  { value: "10", label: "PUBLIC PROJECTS" },
  { value: "650+", label: "LEETCODE SOLVED" },
  { value: "3", label: "COMPETITION WINS" },
];

export const techStack = [
  "C", "C++", "Java", "Python", "JavaScript", "Kotlin",
  "React", "Next.js", "Spring Boot", "FastAPI", "Flask",
  "Docker", "Kubernetes", "RabbitMQ", "Redis", "Celery",
  "MongoDB", "Supabase", "Firebase", "Qdrant", "Neo4j",
  "LangChain", "LangGraph", "LLMs", "RAG", "Agentic AI",
  "Git", "LangFuse", "Google Cloud", "Figma",
];

export const experience = [
  {
    title: "AI/ML Intern",
    org: "NetSol Technologies, Lahore",
    period: "Jun 2026 – Aug 2026",
    points: [
      "Built an AI-powered chatbot using LangChain and LangGraph for multi-step conversational workflows.",
      "Fine-tuned a YOLOX-S model for signature detection, cutting the company's verification work from 7 days to 2 seconds.",
      "Developed a financial ratios extraction agent with LangGraph, pulling cash, debt & cash-flow metrics at 100% accuracy and reducing analysis time from 4 days to 10 seconds.",
      "Containerized and deployed AI services with Docker on Google Cloud Platform, collaborating cross-functionally to ship features to production.",
    ],
  },
  {
    title: "Teaching Assistant",
    org: "PUCIT, Lahore",
    period: "Jan 2025 – May 2026",
    points: [
      "DSA (Jul 2025–May 2026): Mentored students in DSA, competitive programming, and problem solving.",
      "OOP (Sep 2025–Jan 2026): Guided students in OOP concepts, design principles, and project evaluations.",
      "Linear Algebra (Jan 2025–May 2025): Supported students in vectors, matrices, and mathematical foundations.",
    ],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "Punjab University College of Information Technology (PUCIT)",
  period: "2023 – Present",
  detail: "CGPA: 3.68. Coursework spans AI/ML systems, competitive programming, and full-stack software engineering.",
};

export const skillBars = [
  { label: "C++ / DSA / Competitive Programming", value: 96 },
  { label: "Python / AI & ML", value: 94 },
  { label: "LangChain / LangGraph / RAG", value: 92 },
  { label: "React / Next.js", value: 90 },
  { label: "FastAPI / Spring Boot", value: 88 },
  { label: "Docker / Kubernetes / GCP", value: 85 },
];

export const softSkills = [
  "PROBLEM SOLVING",
  "SYSTEMS THINKING",
  "MENTORING",
  "TEAM COLLABORATION",
  "AGENTIC AI DESIGN",
];

export const achievements = [
  {
    title: "ICPC 2026 SILVER MEDALIST",
    detail: "International Collegiate Programming Contest — silver medal finish.",
    badge: "/images/achievement-badge.png",
  },
  {
    title: "WINNER — CP & DEBUGGING, COMSATS WAH CAMPUS",
    detail: "First place, VisioSpark 2025 competitive programming and debugging & speed programming, COMSATS Wah Campus.",
  },
  {
    title: "WINNER — CP, UNIVERSITY OF HOME ECONOMICS",
    detail: "First place in the competitive programming competition.",
    badge: "/images/achievement-badge.png",
  },
];

export type Project = {
  code: string;
  tag: string;
  title: string;
  desc: string;
  stack: string[];
  points?: string[];
  github?: string;
  demo?: string;
  image?: string;
};

// Projects with real UI screenshots
export const featuredProjects: Project[] = [
  {
    code: "01",
    tag: "MULTIMODAL RAG PLATFORM",
    title: "PIXORA",
    desc: "An image-to-search multimodal RAG platform built with FastAPI and Next.js, using Gemini Vision for image understanding, Pinecone for vector search, and Tavily for real-time web-augmented streaming answers.",
    stack: ["NEXT.JS", "FASTAPI", "GEMINI VISION", "PINECONE", "TAVILY"],
    image: "/images/pixora.jpg",
    github: "#",
    demo: "#",
  },
  {
    code: "02",
    tag: "MULTIMODAL AI ASSISTANT",
    title: "BAATKARO",
    desc: "Production-grade multimodal AI assistant with RAG, Face ID auth, streaming chat, speech-to-text/TTS, FAISS search, and Gemini + Groq fallback.",
    stack: ["NEXT.JS", "FASTAPI", "LANGCHAIN", "DOCKER", "MONGODB ATLAS", "GCP"],
    image: "/images/baatkaro.jpg",
    github: "#",
    demo: "#",
  },
  {
    code: "03",
    tag: "AI LEARNING PLATFORM",
    title: "LUMIO",
    desc: "Full-stack AI learning platform with JWT/Google OAuth, AI-generated adaptive quizzes, real-time leaderboards, analytics dashboards, and role-based access control.",
    stack: ["NEXT.JS", "FASTAPI", "MONGODB", "GEMINI API"],
    image: "/images/lumio.jpg",
    github: "#",
    demo: "#",
  },
  {
    code: "04",
    tag: "ID EXTRACTION SYSTEM",
    title: "SHANAKHT",
    desc: "An ID card information extraction system using OCR models to automatically detect and extract personal data fields from identity card images.",
    stack: ["OCR", "COMPUTER VISION", "PYTHON"],
    image: "/images/shanakht.jpg",
    github: "#",
    demo: "#",
  },
];

// AI / systems projects without screenshots
export const systemProjects: Project[] = [
  {
    code: "05",
    tag: "AI SYSTEM",
    title: "SIGNATURE DETECTOR — YOLOX-S",
    desc: "Lightweight, production-ready signature detection API powered by a fine-tuned YOLOX-S model; converts PyTorch weights to ONNX for CPU-only inference (<50ms/page), fully containerized into a ~200MB Docker image.",
    stack: ["YOLOX-S", "ONNX", "DOCKER", "COMPUTER VISION"],
    github: "https://github.com/the-asadullah20",
    demo: "https://asadullahhmad5--signature-detector-fastapi-app.modal.run/docs",
  },
  {
    code: "06",
    tag: "AI SYSTEM",
    title: "FINANCIAL RATIOS EXTRACTOR",
    desc: "Financial analysis API extracting key ratios from company financial-statement PDFs (up to 35 pages), combining GREP for text extraction, Qdrant for retrieval, and Python for computations.",
    stack: ["GREP", "QDRANT", "PYTHON"],
    github: "https://github.com/the-asadullah20",
    demo: "https://financial-ratios-extractor.onrender.com/docs",
  },
  {
    code: "07",
    tag: "AI SYSTEM",
    title: "HYBRID RAG SYSTEM",
    desc: "Hybrid RAG pipeline combining Neo4j knowledge graphs with dense vector databases, featuring hybrid retrieval, cross-encoder reranking, and context-aware LLM response generation.",
    stack: ["NEO4J", "VECTOR DB", "RAG"],
    github: "https://github.com/the-asadullah20",
  },
  {
    code: "08",
    tag: "AI SYSTEM",
    title: "HUFFMAN ENCODING VISUALIZER",
    desc: "Interactive Python tool visualizing Huffman tree construction, frequency analysis, and lossless compression with step-by-step animation.",
    stack: ["PYTHON", "ALGORITHMS", "VISUALIZATION"],
    github: "https://github.com/the-asadullah20",
  },
  {
    code: "09",
    tag: "DBMS PROJECT",
    title: "CRIME TRACKER MANAGEMENT SYSTEM",
    desc: "Centralized platform for citizens, police officers, and admins to manage crime reporting and case investigations. Built with a full relational database schema covering case filing, officer assignments, and evidence tracking.",
    stack: ["DBMS", "SQL", "DATABASE DESIGN"],
    github: "https://github.com/the-asadullah20/Crime-Tracker-Management-System",
  },
  {
    code: "10",
    tag: "SYSTEMS SIMULATION",
    title: "SARBA SIMULATOR",
    desc: "A browser-based SARBA architecture simulator supporting interrupt testing and assembly-level simulation. Features interrupt handling, architecture documentation, and a live interactive demo deployed on Vercel.",
    stack: ["JAVASCRIPT", "CSS", "HTML", "ASSEMBLY"],
    github: "https://github.com/the-asadullah20/Sarba-Simulator",
    demo: "https://sarba-simulator.vercel.app/",
  },
];

export const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "RESUME", href: "#resume" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const roleMarquee = [
  "AI/ML ENGINEER", "RAG SYSTEMS BUILDER", "COMPETITIVE PROGRAMMER",
  "FULL STACK DEVELOPER", "ICPC SILVER MEDALIST", "AGENTIC AI ENGINEER",
];
