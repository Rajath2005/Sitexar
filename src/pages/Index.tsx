import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import SplineHero from "@/components/SplineHero";

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
      {/* Hero Section with Spline 3D */}
  <section className="relative bg-[#0B0D12] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
        {/* Spline background with blending and radial gradient overlay */}
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
          <SplineHero />
          <div className="absolute inset-0" style={{background: "radial-gradient(circle at center, rgba(59,130,246,0.1), transparent 70%)"}}></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl xs:text-4xl md:text-6xl font-bold text-center max-w-[90vw] sm:max-w-3xl leading-tight sm:leading-normal">
            Empowering Businesses with{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>
          <p className="text-gray-400 mt-3 sm:mt-4 text-center max-w-[95vw] sm:max-w-xl text-base sm:text-xl">
            Full-stack Development | SEO | Web Solutions
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center">
            <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow-lg hover:opacity-90 transition flex items-center justify-center text-base sm:text-lg">
                Get a Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </button>
            </Link>
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-lg border border-gray-500 text-gray-200 hover:border-cyan-400 hover:text-cyan-400 transition text-base sm:text-lg">
                View Our Work
              </button>
            </Link>
          </div>
        </div>
        {/* Scroll indicator - more visible and mobile friendly */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center bg-background/80 backdrop-blur-md">
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