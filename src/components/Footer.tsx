import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/techcraft" },
    { name: "GitHub", icon: Github, url: "https://github.com/techcraft" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/techcraft" },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              TechCraft Solutions
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
            <p className="text-muted-foreground mb-2">team@techcraft.com</p>
            <p className="text-muted-foreground">Ready to start your project?</p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 TechCraft Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;