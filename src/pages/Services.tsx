import { Code, Layers, BarChart2, Zap, Briefcase, PenTool, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Responsive, fast-loading websites built with modern technologies to ensure optimal performance across all devices.",
      features: ["Custom CMS Development", "E-commerce Solutions", "Landing Pages"],
      color: "indigo"
    },
    {
      icon: Layers,
      title: "App Development",
      description: "Custom full-stack applications designed to streamline your business operations and enhance productivity.",
      features: ["Cross-platform Apps", "SaaS Applications", "API Development"],
      color: "purple"
    },
    {
      icon: BarChart2,
      title: "SEO Services",
      description: "Comprehensive search engine optimization to increase your online visibility and attract more customers.",
      features: ["Keyword Research", "On-page Optimization", "Content Strategy"],
      color: "pink"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing website or application to improve user experience and search rankings.",
      features: ["Load Time Analysis", "Code Optimization", "Caching Strategies"],
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Small Business Solutions",
      description: "Affordable digital solutions designed specifically for small businesses and startups.",
      features: ["Starter Websites", "Business Automation", "Digital Presence Packages"],
      color: "green"
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that enhance user engagement and drive conversions.",
      features: ["Wireframing & Prototyping", "User Research", "Interaction Design"],
      color: "yellow"
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "We analyze your needs and define project requirements.",
      color: "indigo"
    },
    {
      number: "2", 
      title: "Planning",
      description: "We create a detailed roadmap for your project.",
      color: "purple"
    },
    {
      number: "3",
      title: "Development", 
      description: "Our team builds your solution with regular updates.",
      color: "pink"
    },
    {
      number: "4",
      title: "Delivery",
      description: "We launch your project and provide ongoing support.",
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="glass border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="service-icon w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto transition-transform duration-600 hover:rotate-y-180">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <Check size={16} className="text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="block">
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-20 mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A structured approach to delivering exceptional results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gradient">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="glass rounded-2xl p-12 text-center border border-border/50 animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get in touch with us to discuss how we can help bring your vision to life.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;