import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "react-router-dom";
import { setPageMeta, pageMetaData } from "@/utils/seo";
import { SITE_CONFIG, WHATSAPP_URL } from "@/lib/siteConfig";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Keys are stored in .env file
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      name: formData.name,      // Matches {{name}}
      email: formData.email,    // Matches {{email}} (Reply To)
      title: "New Message from Website", // Matches {{title}}
      service: formData.service || "Not specified",
      budget: formData.budget || "Not specified",
      timeline: formData.timeline || "Not specified",
      message: formData.message, // Matches Content
      time: new Date().toLocaleString(), // Matches {{time}}
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", service: "", budget: "", timeline: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again later or contact us directly at sitexar.team@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      details: SITE_CONFIG.email,
      description: "Send us an email anytime",
      href: `mailto:${SITE_CONFIG.email}`
    },
    {
      icon: Phone,
      title: "Call Us",
      details: SITE_CONFIG.phoneDisplay,
      description: "Mon-Fri 9AM-6PM IST",
      href: SITE_CONFIG.phoneHref
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "Start a quick chat",
      description: "Fastest way to get a response",
      href: WHATSAPP_URL
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: SITE_CONFIG.location,
      description: "Our headquarters"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 24 Hours",
      description: "We respond quickly"
    }
  ];

  const location = useLocation();
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPageMeta(pageMetaData.contact);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    
    // If navigated with a hash (#contact-form) or state asking to scroll, scroll the form into view
    const shouldScroll =
      location.hash === "#contact-form" || (location.state && (location.state as any).scrollToForm) || (location.state && (location.state as any).from === "portfolio");

    if (shouldScroll) {
      // small timeout to ensure layout/route change settled
      setTimeout(() => {
        const el = formRef.current ?? document.getElementById("contact-form");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  }, [location]);

  // Prefill form if project provided in state or query param
  useEffect(() => {
    const stateProject = (location.state as any)?.project as string | undefined;
    const queryParams = new URLSearchParams(location.search);
    const qProject = queryParams.get("project");
    const projectName = stateProject ?? qProject;

    if (projectName) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I'm interested in a quote for the project: ${projectName}. Please advise next steps and estimated timeline.`
      }));
    }
  }, [location.search, location.state]);

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
    <div className="min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology?
            Let's discuss your project and bring your vision to life.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <a href={SITE_CONFIG.phoneHref} className="inline-flex items-center justify-center rounded-lg border border-primary/40 px-5 py-3 text-sm font-medium text-primary hover:bg-primary/10 transition-colors">
              <Phone size={16} className="mr-2" /> Call {SITE_CONFIG.phoneDisplay}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-green-500 px-5 py-3 text-sm font-medium text-white hover:bg-green-600 transition-colors">
              <MessageCircle size={16} className="mr-2" /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div id="contact-form" ref={formRef}>
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
                    <Label htmlFor="service">Service Interest (Optional)</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}>
                      <SelectTrigger className="mt-2 glass border-border/50">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select value={formData.budget} onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                        <SelectTrigger className="mt-2 glass border-border/50">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5K</SelectItem>
                          <SelectItem value="5k-10k">$5K - $10K</SelectItem>
                          <SelectItem value="10k-25k">$10K - $25K</SelectItem>
                          <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                          <SelectItem value="50k-plus">$50K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline">Project Timeline (Optional)</Label>
                      <Select value={formData.timeline} onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger className="mt-2 glass border-border/50">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (1-2 weeks)</SelectItem>
                          <SelectItem value="1-month">1 Month</SelectItem>
                          <SelectItem value="1-3-months">1-3 Months</SelectItem>
                          <SelectItem value="3-6-months">3-6 Months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
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
                  <p className="text-xs text-muted-foreground text-center">
                    Prefer direct communication? <a href={SITE_CONFIG.phoneHref} className="text-primary hover:underline">Call us</a> or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">start a WhatsApp chat</a>.
                  </p>
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
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-primary font-medium mb-1 inline-block hover:underline"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-primary font-medium mb-1">{info.details}</p>
                    )}
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

            {/* Map Embed */}
            <Card className="glass border-border/50" data-parallax data-parallax-speed="0.06" data-parallax-axis="both">
              <CardContent className="p-0">
                <div className="h-48 rounded-lg overflow-hidden" data-parallax data-parallax-speed="0.04" data-parallax-axis="both">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53762.69788604216!2d74.82232815585881!3d12.93780255286444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1758611138438!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

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