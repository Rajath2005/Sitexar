import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project1.jpg";
import mediqImg from "@/assets/2.png";
import hibachi from "@/assets/3.jpg";
import nodexScreenshot from "@/assets/4.jpg";
import portfolio from "@/assets/5.jpg";

const Portfolio = () => {
  const projects = [
{
  title: "MediQ Platform",
  category: "Healthcare / Wellness",
  description: "Comprehensive web application blending Ayurvedic wisdom with modern tech. Includes medicine directory, hospital locator, personalized remedies, and appointment booking.",
  // Using a local import for reliability and bundling. Replace with a CDN URL if you
  // prefer to host assets externally.
  image: mediqImg,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  features: [
    "User Authentication & Profiles",
    "Appointment Booking & Scheduling",
    "Ayurvedic Medicine Directory",
    "Nearby Hospital / Clinic Locator",
    "Personalized Remedies & Health Insights",
    "Responsive Design with Dark/Light Mode"
  ]
},

{
  title: "Hibachi Food and Resturant",
  category: "Food & Restaurant",
  description: "Modern restaurant website designed for Hibachi Boost Hub to showcase their fusion menu and elevate their online presence with a premium brand experience.",
  image: hibachi,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
  features: [
    "Dynamic Menu Showcase",
    "Category-Based Food Filters",
    "Chef & Restaurant Story Sections",
    "Customer Testimonials",
    "Call-To-Action Ordering Buttons",
    "Fully Responsive Design"
  ]
}
,
{
  title: "Nodex – Digital No-Due Certificate System",
  category: "Education / Automation",
  description: "End-to-end clearance automation platform that replaces the traditional paper-based No-Due process for colleges. Nodex enables students to track clearance requests while departments verify and approve digitally.",
  image: nodexScreenshot,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
  features: [
    "Role-Based Access (Student, Admin, Faculty, HOD, Library, Hostel, Accounts, Office)",
    "Digital Clearance Workflow",
    "Real-Time Application Tracking",
    "Automated Approval System",
    "Secure Login & Authentication",
    "Activity Logs and Status Dashboard"
  ]
},

{
  title: "Rajath Kiran Portfolio",
  category: "Personal / Portfolio Website",
  description: "My personal brand site showcasing projects, skills, blog posts, and contact info — designed to present a clean, modern, and performance-first developer portfolio.",
  image: portfolio,
  technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  features: [
    "Project Showcase with Live Links & Screenshots",
    "Interactive Skills & Tech Stack Section",
    "Blog / Articles Section",
    "Dark / Light Theme Toggle",
    "Smooth Animations & Transitions",
    "Contact Form & Social Links"
  ]
},

    {
      title: "EduLearn Platform",
      category: "Education",
      description: "Online learning management system with course creation, student progress tracking, and interactive quizzes.",
      image: project1,
      technologies: ["React", "Node.js", "MySQL", "WebRTC"],
      features: [
        "Course Management",
        "Video Streaming",
        "Interactive Quizzes",
        "Student Analytics"
      ]
    },
    {
      title: "RestaurantHub",
      category: "Food & Beverage",
      description: "Restaurant management system with online ordering, table reservations, and kitchen workflow optimization.",
      image: project1,
      technologies: ["React", "Node.js", "Socket.io", "Stripe"],
      features: [
        "Online Ordering",
        "Table Reservations",
        "Kitchen Management",
        "Delivery Tracking"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Our <span className="text-gradient">Portfolio</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've crafted for businesses across various industries. 
            Each project showcases our commitment to quality and client success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <Button size="sm" className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30">
                        <ExternalLink size={16} />
                      </Button>
                      <Button size="sm" className="bg-primary/20 backdrop-blur-sm hover:bg-primary/30">
                        <Github size={16} />
                      </Button>
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
                        <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with our proven expertise and innovative approach.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
            Get Your Free Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;