import { Code, Smartphone, Search, Zap, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive & Fast",
      details: "Custom websites built with modern technologies like React, TypeScript, and Node.js. We create fast, responsive, and SEO-optimized websites that convert visitors into customers.",
      features: ["Responsive Design", "Performance Optimization", "Cross-browser Compatibility", "Clean Code Architecture"]
    },
    {
      icon: Smartphone,
      title: "Full-Stack App Development",
      description: "Complete Solutions",
      details: "End-to-end application development from database design to user interface. We build scalable web applications that can grow with your business needs.",
      features: ["Frontend & Backend", "Database Design", "API Development", "User Authentication"]
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Rank Higher",
      details: "Comprehensive SEO strategies to improve your website's visibility and organic traffic. We optimize your content, technical SEO, and build quality backlinks.",
      features: ["On-page Optimization", "Technical SEO", "Content Strategy", "Analytics & Reporting"]
    },
    {
      icon: Zap,
      title: "Performance & Speed Optimization",
      description: "Lightning Fast",
      details: "Make your website blazing fast with our optimization techniques. Improve user experience and search rankings with faster loading times.",
      features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Implementation"]
    },
    {
      icon: Settings,
      title: "Custom Small Business Solutions",
      description: "Tailored for You",
      details: "Specialized solutions designed specifically for small and medium businesses. From e-commerce to booking systems, we've got you covered.",
      features: ["E-commerce Solutions", "Booking Systems", "CRM Integration", "Custom Workflows"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business succeed online. 
            From web development to SEO, we've got all your tech needs covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full">
                      <service.icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-primary font-medium mb-4">{service.description}</p>
                    <p className="text-muted-foreground mb-6">{service.details}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-2xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                Get Free Consultation
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
    </div>
  );
};

export default Services;