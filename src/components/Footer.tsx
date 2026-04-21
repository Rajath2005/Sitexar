import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG, WHATSAPP_URL } from "@/lib/siteConfig";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: SITE_CONFIG.social.linkedin },
    { name: "GitHub", icon: Github, url: SITE_CONFIG.social.github },
    { name: "Twitter", icon: Twitter, url: SITE_CONFIG.social.twitter },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Sitexar
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge technology solutions. 
              We deliver scalable, fast, and secure digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:glow-effect"
                >
                  <social.icon size={20} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 mb-4 text-sm text-muted-foreground">
              <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-primary transition-colors">{SITE_CONFIG.email}</a>
              <a href={SITE_CONFIG.phoneHref} className="block hover:text-primary transition-colors">{SITE_CONFIG.phoneDisplay}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">WhatsApp Chat</a>
            </div>
            <Link to={{ pathname: "/contact", hash: "#contact-form" }} state={{ from: "footer", scrollToForm: true }}>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full">
                Book a Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border/50 pt-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Stay in the loop</p>
            <div className="flex gap-2">
              <input
                type="email"
                aria-label="Newsletter email"
                placeholder="Your email"
                className="h-9 w-full rounded-md border border-border bg-background px-3 text-sm"
              />
              <Button size="sm" variant="outline">Join</Button>
            </div>
          </div>
          <div className="flex items-end md:justify-end">
            <p className="text-muted-foreground">
              © 2026 Sitexar. All rights reserved.
            </p>
          </div>
        </div>

        <div className="pt-4 text-center">
          <p className="text-muted-foreground">
            Built for modern startups, optimized for mobile-first growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;