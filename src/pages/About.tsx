import { Users, Target, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: team1,
      bio: "Full-stack developer with 8+ years of experience in React, Node.js, and cloud technologies."
    },
    {
      name: "Sarah Chen",
      role: "UX/UI Designer",
      image: team2,
      bio: "Creative designer focused on user-centered design and modern digital experiences."
    },
    {
      name: "Mike Rodriguez",
      role: "Backend Developer",
      image: team1,
      bio: "Specializes in scalable backend systems, APIs, and database optimization."
    },
    {
      name: "Emily Davis",
      role: "SEO Expert",
      image: team2,
      bio: "Digital marketing specialist with expertise in SEO and performance optimization."
    },
    {
      name: "David Kim",
      role: "Frontend Developer",
      image: team1,
      bio: "React specialist creating responsive and interactive user interfaces."
    },
    {
      name: "Lisa Wang",
      role: "Project Manager",
      image: team2,
      bio: "Ensures projects are delivered on time with exceptional quality and client satisfaction."
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

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">About <span className="text-gradient">TechCraft</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of 6 dedicated developers creating high-performance websites and applications
            that help businesses thrive in the digital world.
          </p>
        </div>

        {/* Mission Section */}
        <div className="glass rounded-2xl p-8 md:p-12 mb-20 border border-border/50">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Delivering scalable, fast, and secure digital solutions for small and medium businesses. 
              We combine cutting-edge technology with creative design to help our clients achieve 
              their digital goals and grow their online presence.
            </p>
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

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
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
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;