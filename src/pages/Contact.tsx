import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "team@techcraft.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Tech Street, Silicon Valley, CA 94301",
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "We respond quickly"
    }
  ];

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "SEO Optimization",
    "UI/UX Design",
    "Custom Software",
    "Technical Consulting",
    "Maintenance & Support"
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="glass border-border/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 glass border-border/50"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 glass border-border/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 glass border-border/50 min-h-[120px]"
                      placeholder="Tell us about your project, timeline, and requirements..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={16} />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.details}</p>
                    <p className="text-muted-foreground text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Services List */}
            <Card className="glass border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="glass border-border/50">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Silicon Valley, CA</p>
                    <p className="text-sm text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity, but most websites take 2-6 weeks and web applications take 6-12 weeks."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer maintenance packages and ongoing support to ensure your solution continues to perform optimally."
              },
              {
                question: "What's included in your SEO services?",
                answer: "Our SEO includes technical optimization, content strategy, keyword research, and monthly performance reports."
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely! We specialize in integrations and can work with your existing tools and systems."
              }
            ].map((faq, index) => (
              <Card key={index} className="glass border-border/50 text-left">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;