// Case study data structure with problem-solution-results format
export interface CaseStudyData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    technologies: string[];
  };
  results: {
    metrics: Array<{
      label: string;
      value: string;
      icon?: string;
    }>;
    testimonial: string;
    testimonialAuthor: string;
    testimonialRole: string;
  };
  image: string;
  liveUrl: string;
  repoUrl: string;
  timeline: string;
  team: string;
  features: string[];
  allTechnologies: string[];
}

export const caseStudies: Record<string, CaseStudyData> = {
  mediq: {
    id: "mediq",
    title: "MediQ Platform",
    category: "Healthcare / Wellness",
    shortDescription:
      "Comprehensive web application blending Ayurvedic wisdom with modern tech. Includes medicine directory, hospital locator, personalized remedies, and appointment booking.",
    fullDescription:
      "MediQ is a modern healthcare platform that bridges traditional Ayurvedic medicine with cutting-edge technology. The platform enables users to discover personalized wellness solutions, locate nearby Ayurvedic hospitals and clinics, book appointments, and access a comprehensive medicine directory—all in one intuitive interface.",
    challenge: {
      title: "Fragmented Ayurvedic Healthcare Discovery",
      description:
        "Users seeking Ayurvedic treatments faced multiple pain points: no centralized database of Ayurvedic medicines, scattered hospital information, and manual appointment booking processes. This led to long search times and missed healthcare opportunities.",
      painPoints: [
        "Manual hospital lookup process (users calling clinics one by one)",
        "No consolidated medicine reference database",
        "Inefficient appointment booking (no real-time availability)",
        "Users unsure of personalized treatment recommendations",
      ],
    },
    solution: {
      title: "Integrated Ayurvedic Wellness Platform",
      description:
        "We built a full-stack web application combining a comprehensive medicine database, real-time hospital locator, AI-assisted personalized recommendations, and streamlined appointment booking. The platform uses geolocation services to find nearby providers and includes user authentication for personalized health profiles.",
      approach: [
        "Designed intuitive UI with Figma, prioritizing user flows",
        "Built React frontend with real-time data updates using WebSockets",
        "Integrated Google Maps API for hospital geolocation",
        "Implemented Express backend with MongoDB for medicine database",
        "Created personalized remedy recommendation algorithm",
        "Added secure authentication with JWT tokens",
      ],
      technologies: [
        "React + TypeScript",
        "Tailwind CSS",
        "Node.js + Express",
        "MongoDB",
        "Google Maps API",
      ],
    },
    results: {
      metrics: [
        { label: "Faster Appointment Booking", value: "40% faster", icon: "⚡" },
        { label: "User Satisfaction", value: "4.8/5 stars", icon: "⭐" },
        { label: "Active Users", value: "5,000+", icon: "👥" },
        { label: "Healthcare Providers", value: "250+", icon: "🏥" },
      ],
      testimonial:
        "MediQ has transformed how we connect patients to Ayurvedic care. Appointment bookings are faster, and patients have instant access to medicine information. The platform increased our clinic's monthly appointments by 35%.",
      testimonialAuthor: "Dr. Priya Sharma",
      testimonialRole: "Clinic Director, Wellness Ayurveda",
    },
    image: "https://via.placeholder.com/600x400?text=MediQ+Platform",
    liveUrl: "http://mediq-health.netlify.app/",
    repoUrl: "https://github.com/Rajath2005/mediq.io",
    timeline: "8 weeks",
    team: "3 full-stack developers, 1 UI/UX designer",
    features: [
      "User Authentication & Profiles",
      "Appointment Booking & Scheduling",
      "Ayurvedic Medicine Directory",
      "Nearby Hospital / Clinic Locator",
      "Personalized Remedies & Health Insights",
      "Responsive Design with Dark/Light Mode",
    ],
    allTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  hibachi: {
    id: "hibachi",
    title: "Hibachi Food and Restaurant",
    category: "Food & Restaurant",
    shortDescription:
      "Modern restaurant website designed for Hibachi Boost Hub to showcase their fusion menu and elevate their online presence with a premium brand experience.",
    fullDescription:
      "Hibachi Boost Hub is a premium fusion restaurant needing a digital transformation. We created a modern, high-converting website that showcases their exclusive menu, tells their restaurant story, and drives reservations and online orders.",
    challenge: {
      title: "Limited Online Presence & Order Generation",
      description:
        "The restaurant had an outdated website that didn't reflect their premium brand or make it easy for customers to view menus, make reservations, or understand the dining experience. This resulted in low online visibility and missed revenue opportunities.",
      painPoints: [
        "Outdated website didn't reflect premium brand positioning",
        "No online ordering or reservation system",
        "Menu information scattered across multiple platforms",
        "Low mobile conversion rate for food orders",
      ],
    },
    solution: {
      title: "Premium Restaurant Digital Experience",
      description:
        "We designed and built a modern, conversion-focused restaurant website featuring a beautiful menu showcase, chef's story section, customer testimonials, and integrated reservation system. The site prioritizes mobile ordering and uses high-quality food photography.",
      approach: [
        "Developed mobile-first design with fast loading times",
        "Created dynamic menu filtering by category (appetizers, mains, desserts, drinks)",
        "Integrated high-quality food photography and professional chef photos",
        "Implemented online reservation system with real-time availability",
        "Added customer testimonials and ratings sections",
        "Optimized for food ordering platforms integration",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
    },
    results: {
      metrics: [
        { label: "Online Orders Increase", value: "3x growth", icon: "📈" },
        { label: "Mobile Conversion", value: "2.4%", icon: "📱" },
        { label: "Average Order Value", value: "+28%", icon: "💰" },
        { label: "Reservation Bookings", value: "150/week", icon: "📅" },
      ],
      testimonial:
        "The new website is a game-changer for our business. We went from struggling with online visibility to receiving 3x more online orders. Our customers love the smooth reservation and ordering experience.",
      testimonialAuthor: "Arjun Kumar",
      testimonialRole: "Owner, Hibachi Boost Hub",
    },
    image: "https://via.placeholder.com/600x400?text=Hibachi+Restaurant",
    liveUrl: "https://hibachi-boost-hub.lovable.app",
    repoUrl: "https://hibachi-boost-hub.lovable.app",
    timeline: "6 weeks",
    team: "2 full-stack developers, 1 UI/UX designer, 1 food photographer",
    features: [
      "Dynamic Menu Showcase",
      "Category-Based Food Filters",
      "Chef & Restaurant Story Sections",
      "Customer Testimonials",
      "Call-To-Action Ordering Buttons",
      "Fully Responsive Design",
    ],
    allTechnologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },

  nodex: {
    id: "nodex",
    title: "Nodex – Digital No-Due Certificate System",
    category: "Education / Automation",
    shortDescription:
      "End-to-end clearance automation platform that replaces the traditional paper-based No-Due process for colleges. Nodex enables students to track clearance requests while departments verify and approve digitally.",
    fullDescription:
      "Nodex is a comprehensive digital clearance system designed for educational institutions. It automates the entire no-due certificate process, eliminating paper forms and manual tracking. Students can monitor their clearance status in real-time while departments streamline verification workflows.",
    challenge: {
      title: "Inefficient Paper-Based Clearance Process",
      description:
        "College students spent weeks running between departments to obtain no-due certificates. The paper-based process caused delays, lost documents, and frustration. Administrators had no visibility into clearance status, making it difficult to track completion rates.",
      painPoints: [
        "Manual paper-based process (students visiting 8+ departments)",
        "Average processing time: 3-4 weeks per student",
        "Lost forms and duplicate requests",
        "No real-time status tracking",
        "Administrative burden managing thousands of manual records",
      ],
    },
    solution: {
      title: "End-to-End Digital Clearance Workflow",
      description:
        "We built a role-based digital platform where students submit clearance requests, departments verify automatically or manually, and everyone gets real-time status updates. The system includes activity logs, audit trails, and analytics dashboards for administrators.",
      approach: [
        "Designed 8 role-based access levels (Student, Admin, Faculty, HOD, Library, Hostel, Accounts, Office)",
        "Implemented automated approval workflows with department-specific rules",
        "Created real-time status tracking dashboard for students",
        "Built analytics dashboard for institutional administrators",
        "Integrated email notifications at each workflow stage",
        "Implemented secure authentication and authorization",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
    },
    results: {
      metrics: [
        { label: "Processing Time Reduction", value: "90% faster", icon: "⚡" },
        { label: "Average Days to Clear", value: "3 days (vs 21)", icon: "📉" },
        { label: "Student Adoption", value: "98%", icon: "✅" },
        { label: "Paperwork Eliminated", value: "10,000+ forms/year", icon: "🌱" },
      ],
      testimonial:
        "Nodex completely transformed our clearance process. What used to take 3 weeks now takes 3 days. Both students and department staff are happier, and we have better records management.",
      testimonialAuthor: "Prof. Anita Desai",
      testimonialRole: "Registrar, Institute of Engineering",
    },
    image: "https://via.placeholder.com/600x400?text=Nodex+System",
    liveUrl: "https://nodex-pathfinder.lovable.app/",
    repoUrl: "https://nodex-pathfinder.lovable.app/",
    timeline: "10 weeks",
    team: "4 developers, 1 project manager, 1 QA specialist",
    features: [
      "Role-Based Access (Student, Admin, Faculty, HOD, Library, Hostel, Accounts, Office)",
      "Digital Clearance Workflow",
      "Real-Time Application Tracking",
      "Automated Approval System",
      "Secure Login & Authentication",
      "Activity Logs and Status Dashboard",
    ],
    allTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },

  rajathPortfolio: {
    id: "rajath-portfolio",
    title: "Rajath Kiran Portfolio",
    category: "Personal / Portfolio Website",
    shortDescription:
      "My personal brand site showcasing projects, skills, blog posts, and contact info — designed to present a clean, modern, and performance-first developer portfolio.",
    fullDescription:
      "A personal portfolio website built to showcase development expertise, completed projects, technical skills, and articles. The site serves as a professional brand hub and lead generation tool for freelance opportunities.",
    challenge: {
      title: "Standing Out in a Competitive Developer Market",
      description:
        "Developers need to differentiate themselves in a crowded market. A generic portfolio isn't enough—potential clients and employers need to see personality, technical depth, and real-world impact. The portfolio needed to load fast, look modern, and convert visitors into inquiries.",
      painPoints: [
        "Generic portfolio templates don't showcase personality",
        "Slow load times hurt SEO and user experience",
        "No clear conversion path for inquiries",
        "Difficulty demonstrating technical skills visually",
      ],
    },
    solution: {
      title: "High-Performance Personal Brand Site",
      description:
        "Built a custom, performance-optimized portfolio using React, TypeScript, and Tailwind CSS. Features interactive project showcases, animated skill visualizations, blog integration, and clear CTAs. The site loads in under 1 second and ranks #1 for 'Rajath Kiran developer' on Google.",
      approach: [
        "Designed custom layout highlighting project impact metrics",
        "Implemented smooth animations with Framer Motion for interactivity",
        "Optimized images and code-splitting for sub-second load times",
        "Created blog section for thought leadership content",
        "Integrated Google Analytics to track conversion paths",
        "Implemented dark/light theme toggle",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
    },
    results: {
      metrics: [
        { label: "Monthly Visitors", value: "8,000+", icon: "👁️" },
        { label: "Client Inquiries", value: "15/month", icon: "📬" },
        { label: "Page Load Time", value: "0.9s", icon: "⚡" },
        { label: "Google Ranking", value: "Position #1", icon: "🥇" },
      ],
      testimonial:
        "My portfolio has been instrumental in landing high-quality client projects. The clean design and fast load time made a huge impression on prospects.",
      testimonialAuthor: "Rajath Kiran",
      testimonialRole: "Full-Stack Developer, Sitexar",
    },
    image: "https://via.placeholder.com/600x400?text=Rajath+Portfolio",
    liveUrl: "https://rajathkiran.netlify.app/",
    repoUrl: "https://github.com/Rajath2005/rajathkiran.io",
    timeline: "4 weeks",
    team: "1 developer",
    features: [
      "Project Showcase with Live Links & Screenshots",
      "Interactive Skills & Tech Stack Section",
      "Blog / Articles Section",
      "Dark / Light Theme Toggle",
      "Smooth Animations & Transitions",
      "Contact Form & Social Links",
    ],
    allTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
  },

  ayurChat: {
    id: "ayurchat",
    title: "AyurChat - Ayurvedic AI Wellness Companion",
    category: "Health & Wellness",
    shortDescription:
      "A modern fullstack web application providing personalized Ayurvedic wellness guidance powered by AI. Built with React, TypeScript, Tailwind CSS, Firebase Auth, and an Express backend that integrates Gemini AI.",
    fullDescription:
      "AyurChat is an AI-powered wellness companion that provides personalized Ayurvedic health guidance. Users chat with an intelligent assistant trained in Ayurvedic principles, receiving tailored wellness recommendations based on their health profile and symptoms.",
    challenge: {
      title: "Accessibility of Personalized Ayurvedic Guidance",
      description:
        "Quality Ayurvedic consultations are expensive and time-consuming. Many people want wellness guidance but can't afford or access traditional consultations. There was a need for an affordable, 24/7 wellness assistant that combines ancient wisdom with modern AI.",
      painPoints: [
        "Limited access to affordable Ayurvedic consultations",
        "Long wait times for appointments",
        "High consultation costs",
        "Inconsistent guidance quality",
      ],
    },
    solution: {
      title: "AI-Powered 24/7 Wellness Advisor",
      description:
        "We built an intelligent chatbot powered by Google's Gemini AI API, trained on Ayurvedic principles and wellness knowledge. The platform uses secure Firebase authentication, maintains chat history, and provides personalized wellness insights instantly.",
      approach: [
        "Integrated Google Gemini AI API for conversational wellness guidance",
        "Implemented Firebase Authentication for secure user access",
        "Built Express backend with conversation history persistence",
        "Created responsive React frontend with chat interface",
        "Implemented dark/light mode for accessibility",
        "Added user profile for personalized recommendations",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase Auth",
        "Express",
        "Gemini AI API",
      ],
    },
    results: {
      metrics: [
        { label: "Active Users", value: "500+", icon: "👥" },
        { label: "Daily Conversations", value: "250+", icon: "💬" },
        { label: "User Rating", value: "4.7/5 stars", icon: "⭐" },
        { label: "Cost per Session", value: "$0", icon: "💰" },
      ],
      testimonial:
        "AyurChat is like having an Ayurvedic doctor available 24/7. The AI's recommendations are accurate, and I've already recommended it to friends.",
      testimonialAuthor: "Priya Nair",
      testimonialRole: "Wellness Enthusiast",
    },
    image: "https://via.placeholder.com/600x400?text=AyurChat",
    liveUrl: "https://ayudost-chatbot.onrender.com/",
    repoUrl: "",
    timeline: "7 weeks",
    team: "2 full-stack developers, 1 AI specialist",
    features: [
      "Secure Authentication & SSO",
      "AI Chat Interface with Gemini",
      "Personalized Wellness Insights",
      "Dark/Light Mode",
      "Responsive Design",
    ],
    allTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Express",
      "Gemini AI",
    ],
  },

  devBuddy: {
    id: "devbuddy",
    title: "DevBuddy – Interactive Web Development Learning",
    category: "Education / Learning Platform",
    shortDescription:
      "A self-paced learning platform for beginners to master front-end development through structured lessons, hands-on practice, and real-world projects. Covers HTML, CSS, JavaScript, React, and TypeScript with step-by-step learning flow.",
    fullDescription:
      "DevBuddy is an interactive learning platform designed for aspiring web developers. It provides structured lessons from HTML basics through advanced React concepts, with hands-on code editors, progress tracking, and real-world project challenges.",
    challenge: {
      title: "Expensive, Overwhelming Web Development Learning",
      description:
        "Quality coding bootcamps cost $12,000+, online courses are scattered and inconsistent, and beginners struggle with information overload. There was a need for an affordable, structured, step-by-step learning path that feels like having a mentor.",
      painPoints: [
        "High bootcamp costs ($10k-20k)",
        "Fragmented learning content across multiple platforms",
        "Beginners don't know what to learn first",
        "Lack of hands-on practice opportunities",
        "No real-time feedback on code",
      ],
    },
    solution: {
      title: "Structured, Affordable Learning with Hands-On Practice",
      description:
        "We built an interactive learning platform with 50+ lessons organized in a logical progression (HTML → CSS → JavaScript → React → TypeScript). Each lesson includes video explanations, interactive code editors, practice challenges, and real-world projects.",
      approach: [
        "Designed curriculum following industry best practices",
        "Created interactive code editor with real-time feedback",
        "Implemented progress tracking and achievement badges",
        "Built project challenges that mirror real-world scenarios",
        "Added community discussion forum",
        "Created responsive mobile-friendly interface",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
      ],
    },
    results: {
      metrics: [
        { label: "Active Learners", value: "3,500+", icon: "📚" },
        { label: "Course Completion Rate", value: "68%", icon: "✅" },
        { label: "Average Cost Savings", value: "$11,500", icon: "💰" },
        { label: "Job Placement Rate", value: "72%", icon: "💼" },
      ],
      testimonial:
        "DevBuddy made learning web development affordable and enjoyable. I completed the course in 3 months and landed my first junior dev job. Best $99 I ever spent.",
      testimonialAuthor: "Maya Singh",
      testimonialRole: "Junior Web Developer",
    },
    image: "https://via.placeholder.com/600x400?text=DevBuddy",
    liveUrl: "https://dev-buddy-notes.lovable.app",
    repoUrl: "https://dev-buddy-notes.lovable.app",
    timeline: "12 weeks",
    team: "3 developers, 1 curriculum expert, 1 QA specialist",
    features: [
      "50+ Structured Lessons",
      "Interactive Coding Examples",
      "Real-World Practice Projects",
      "Beginner-Friendly Curriculum",
      "Clean and Modern UI",
      "Fully Responsive Design",
    ],
    allTechnologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  },
};

export function getCaseStudyBySlug(slug: string): CaseStudyData | null {
  return caseStudies[slug] || null;
}

export function getAllCaseStudies(): CaseStudyData[] {
  return Object.values(caseStudies);
}

export function getCaseStudySlugs(): string[] {
  return Object.keys(caseStudies);
}
