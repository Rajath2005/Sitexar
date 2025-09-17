import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson Plumbing Services",
      role: "Business Owner",
      rating: 5,
      text: "TechCraft completely transformed our online presence. Our new website has increased our leads by 300% and the booking system has streamlined our entire operation. Exceptional work!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      company: "MediCare Family Clinic",
      role: "Medical Director",
      rating: 5,
      text: "The patient portal they developed has revolutionized how we manage appointments and medical records. Our patients love the convenience and our staff productivity has increased significantly.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Rodriguez",
      company: "ShopLocal Marketplace",
      role: "E-commerce Manager",
      rating: 5,
      text: "Their e-commerce solution exceeded our expectations. The multi-vendor platform is robust, user-friendly, and has helped us grow from 5 to 50+ vendors in just 6 months.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      company: "FitTracker App",
      role: "Startup Founder",
      rating: 5,
      text: "Working with TechCraft was a game-changer for our startup. They delivered a feature-rich fitness app that our users absolutely love. Professional, reliable, and innovative team!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      company: "EduLearn Platform",
      role: "Education Director",
      rating: 5,
      text: "The learning management system they built has transformed online education for our institution. The interface is intuitive and the analytics help us track student progress effectively.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Carlos Martinez",
      company: "RestaurantHub",
      role: "Restaurant Owner",
      rating: 5,
      text: "Our restaurant's efficiency has improved dramatically with their management system. Online ordering and table reservations have never been easier. Highly recommend TechCraft!",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Client <span className="text-gradient">Testimonials</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied clients have to say about working with TechCraft Solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass rounded-xl p-6 border border-border/50">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-effect">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="text-primary mr-2" size={24} />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="glass rounded-2xl p-12 border border-border/50 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Success Process</h2>
            <p className="text-xl text-muted-foreground">
              Here's how we ensure every client gets exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We understand your business goals and requirements" },
              { step: "02", title: "Strategy", desc: "We create a tailored plan for your project" },
              { step: "03", title: "Development", desc: "We build your solution with precision and care" },
              { step: "04", title: "Launch & Support", desc: "We deploy and provide ongoing support" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve similar results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
              Start Your Success Story
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;