import { Users, Target, Award, Zap, Code2, Palette, TrendingUp, Globe, Brain, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Rajath",
      role: "Lead Developer",
      image: team1,
      bio: "Specialist in building robust, scalable web applications with a focus on clean and efficient code.",
      github: "Rajath2005"
    },
    {
      name: "Rithesh",
      role: "UX/UI Designer",
      image: team2,
      bio: "Crafting intuitive, user-centered, and visually compelling digital experiences.",
      github: "Rithesh"
    },
    {
      name: "Sanath",
      role: "Backend Developer",
      image: team1,
      bio: "Specializes in scalable backend systems, APIs, and database optimization.",
      github: "Sanath00007"
    },
    {
      name: "Sharath",
      role: "SEO Expert",
      image: team2,
      bio: "Digital marketing specialist with expertise in SEO and performance optimization.",
      github: "Sharx2503"
    },
    {
      name: "Sudeep",
      role: "Frontend Developer",
      image: team1,
      bio: "React specialist creating responsive and interactive user interfaces.",
      github: "sudeep-patali"
    },
    {
      name: "Sheethal",
      role: "Project Manager",
      image: team2,
      bio: "Ensuring projects stay on track and are delivered on time without compromising on quality.",
      github: "Sheethal"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "We believe in the power of teamwork and collective expertise."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every project is approached with clear objectives and measurable outcomes."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We never compromise on quality and always deliver exceptional results."
    }
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Building modern, responsive, and scalable web applications using cutting-edge technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating stunning, user-centered digital experiences that drive engagement."
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing",
      description: "Optimizing your digital presence with data-driven SEO and marketing strategies."
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Leveraging artificial intelligence to enhance functionality and user experience."
    }
  ];

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Vite", icon: "⚡" },
    { name: "shadcn/ui", icon: "🎭" }
  ];

  const achievements = [
    { label: "Projects Delivered", value: "10+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Team Members", value: "6" },
    { label: "Years in Business", value: "1+" }
  ];

  const roadmapItems = [
    {
      title: "AI Chatbot Integration",
      description: "Smart chatbots and content generation for enhanced user interaction.",
      status: "In Progress"
    },
    {
      title: "Advanced Analytics Dashboard",
      description: "Real-time analytics and insights for data-driven decision making.",
      status: "In Progress"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-gradient">Sitexar</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of 6 dedicated developers and designers creating high-performance websites and applications
            that help businesses thrive in the digital world through cutting-edge technology and creative excellence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-20 border border-border/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-6">
              Delivering scalable, fast, and secure digital solutions for small and medium businesses. 
              We combine cutting-edge technology with creative design to help our clients achieve 
              their digital goals and grow their online presence.
            </p>
            <div className="text-muted-foreground italic max-w-4xl mx-auto">
              💡 <strong>Our Philosophy:</strong> We believe in cross-functional collaboration. Every team member contributes to development, 
              design, marketing, and strategy — because great digital solutions require diverse perspectives!
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-6">
                    <value.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-lg flex-shrink-0">
                      <service.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-20 border border-border/50">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.value}</div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="glass rounded-2xl p-8 md:p-12 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-6 rounded-lg hover:bg-primary/10 transition-all duration-300">
                  <span className="text-4xl mb-3">{tech.icon}</span>
                  <p className="text-sm font-medium text-center">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Development Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmapItems.map((item, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        item.status === "In Progress" ? "bg-primary" : "bg-muted-foreground"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "In Progress" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            🎯 Full-Stack Contributors - Every team member contributes to development, design, 
            marketing, and strategy to ensure comprehensive digital solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary/20"
                    />
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <a 
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>@{member.github}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass rounded-2xl p-12 border border-border/50">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and creative excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contact@sitexar.com"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </a>
              <a 
                href="https://github.com/Rajath2005/Sitexar"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:border-primary hover:bg-primary/5 transition-all"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;