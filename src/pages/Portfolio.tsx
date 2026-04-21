import { useEffect } from "react";
import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/OptimizedImage";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import mediqImg from "@/assets/2.png";
import hibachi from "@/assets/3.jpg";
import nodexScreenshot from "@/assets/4.jpg";
import portfolio from "@/assets/5.jpg";
import master from "@/assets/6.jpg";
import ayurChatImg from "@/assets/ayurchat.png";
import { setPageMeta, pageMetaData } from "@/utils/seo";

const Portfolio = () => {
  const containerRef = useScrollAnimations();

  useEffect(() => {
    setPageMeta(pageMetaData.portfolio);
  }, []);
  const projects = [
    {
      slug: "mediq",
      title: "MediQ Platform",
      category: "Healthcare / Wellness",
      description:
        "Comprehensive web application blending Ayurvedic wisdom with modern tech. Includes medicine directory, hospital locator, personalized remedies, and appointment booking.",
      // Using a local import for reliability and bundling. Replace with a CDN URL if you
      // prefer to host assets externally.
      image: mediqImg,
      liveUrl: "http://mediq-health.netlify.app/",
      repoUrl: "https://github.com/Rajath2005/mediq.io",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "User Authentication & Profiles",
        "Appointment Booking & Scheduling",
        "Ayurvedic Medicine Directory",
        "Nearby Hospital / Clinic Locator",
        "Personalized Remedies & Health Insights",
        "Responsive Design with Dark/Light Mode",
      ],
    },

    {
      slug: "hibachi",
      title: "Hibachi Food and Resturant",
      category: "Food & Restaurant",
      description:
        "Modern restaurant website designed for Hibachi Boost Hub to showcase their fusion menu and elevate their online presence with a premium brand experience.",
      image: hibachi,
      liveUrl: "https://hibachi-boost-hub.lovable.app",
      repoUrl: "https://hibachi-boost-hub.lovable.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: [
        "Dynamic Menu Showcase",
        "Category-Based Food Filters",
        "Chef & Restaurant Story Sections",
        "Customer Testimonials",
        "Call-To-Action Ordering Buttons",
        "Fully Responsive Design",
      ],
    },
    {
      slug: "nodex",
      title: "Nodex – Digital No-Due Certificate System",
      category: "Education / Automation",
      description:
        "End-to-end clearance automation platform that replaces the traditional paper-based No-Due process for colleges. Nodex enables students to track clearance requests while departments verify and approve digitally.",
      image: nodexScreenshot,
      liveUrl: "https://nodex-pathfinder.lovable.app/",
      repoUrl: "https://nodex-pathfinder.lovable.app/",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      features: [
        "Role-Based Access (Student, Admin, Faculty, HOD, Library, Hostel, Accounts, Office)",
        "Digital Clearance Workflow",
        "Real-Time Application Tracking",
        "Automated Approval System",
        "Secure Login & Authentication",
        "Activity Logs and Status Dashboard",
      ],
    },

    {
      slug: "rajath-portfolio",
      title: "Rajath Kiran Portfolio",
      category: "Personal / Portfolio Website",
      description:
        "My personal brand site showcasing projects, skills, blog posts, and contact info — designed to present a clean, modern, and performance-first developer portfolio.",
      image: portfolio,
      liveUrl: "https://rajathkiran.netlify.app/",
      repoUrl: "https://github.com/Rajath2005/rajathkiran.io",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Framer Motion",
      ],
      features: [
        "Project Showcase with Live Links & Screenshots",
        "Interactive Skills & Tech Stack Section",
        "Blog / Articles Section",
        "Dark / Light Theme Toggle",
        "Smooth Animations & Transitions",
        "Contact Form & Social Links",
      ],
    },

    {
      slug: "ayurchat",
      title: "AyurChat - Ayurvedic AI Wellness Companion",
      category: "Health & Wellness",
      description:
        "A modern fullstack web application providing personalized Ayurvedic wellness guidance powered by AI. Built with React, TypeScript, Tailwind CSS, Firebase Auth, and an Express backend that integrates Gemini AI.",
      image: ayurChatImg,
      liveUrl: "https://ayudost-chatbot.onrender.com/",
      repoUrl: "",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase Auth", "Express", "Gemini AI"],
      features: [
        "Secure Authentication & SSO",
        "AI Chat Interface with Gemini",
        "Personalized Wellness Insights",
        "Dark/Light Mode",
        "Responsive Design",
      ],
    },
    {
      slug: "devbuddy",
      title: "DevBuddy – Interactive Web Development Learning",
      category: "Education / Learning Platform",
      description:
        "A self-paced learning platform for beginners to master front-end development through structured lessons, hands-on practice, and real-world projects. Covers HTML, CSS, JavaScript, React, and TypeScript with step-by-step learning flow.",
      image: master,
      liveUrl: "https://dev-buddy-notes.lovable.app",
      repoUrl: "https://dev-buddy-notes.lovable.app",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      features: [
        "50+ Structured Lessons",
        "Interactive Coding Examples",
        "Real-World Practice Projects",
        "Beginner-Friendly Curriculum",
        "Clean and Modern UI",
        "Fully Responsive Design",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20" data-scroll-animate="fadeInUp">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've crafted for businesses
            across various industries. Each project showcases our commitment to
            quality and client success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20" data-scroll-animate="stagger">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect group"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    width={600}
                    height={400}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      {/* Live / demo link */}
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open live site for ${project.title}`}
                        >
                          <Button
                            size="sm"
                            className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
                          >
                            <ExternalLink size={16} />
                          </Button>
                        </a>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-primary/10 backdrop-blur-sm text-muted-foreground cursor-not-allowed"
                          aria-disabled={true}
                          title="Live link not available"
                        >
                          <ExternalLink size={16} />
                        </Button>
                      )}

                      {/* GitHub repo link */}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open GitHub repo for ${project.title}`}
                        >
                          <Button
                            size="sm"
                            className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30"
                          >
                            <Github size={16} />
                          </Button>
                        </a>
                      ) : (
                        <Button
                          size="sm"
                          className="bg-primary/10 backdrop-blur-sm text-muted-foreground cursor-not-allowed"
                          aria-disabled={true}
                          title="Repository not available"
                        >
                          <Github size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    {/* View Case Study link */}
                    <Link
                      to={`/portfolio/${project.slug}`}
                      className="inline-block flex-1"
                    >
                      <Button variant="outline" className="w-full">
                        <BookOpen size={16} className="mr-2" />
                        View Case Study
                      </Button>
                    </Link>
                    {/* Pass project title to contact page to prefill form */}
                    <Link
                      to={{ pathname: "/contact", hash: "#contact-form" }}
                      state={{ from: "portfolio", scrollToForm: true, project: project.title }}
                      className="inline-block flex-1"
                    >
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our proven expertise and
            innovative approach.
          </p>
          <Link to={{ pathname: "/contact", hash: "#contact-form" }} state={{ from: "portfolio", scrollToForm: true }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
