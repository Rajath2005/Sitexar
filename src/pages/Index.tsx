import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const features = [
    {
      icon: Code,
      title: "Modern Development",
      description: "Cutting-edge technologies and best practices for exceptional results."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers exceptional user experiences."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Empowering Businesses with{" "}
              <span className="text-gradient">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Full-stack Development | SEO | Web Solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-effect">
                  Get a Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="glass border-primary/50 hover:bg-primary/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TechCraft?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-6">
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of satisfied clients who have elevated their digital presence with our expert solutions.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Start Your Project Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;