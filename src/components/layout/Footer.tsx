import { Link } from "react-router-dom";
import { Zap, Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const contacts = [
  { name: "Rahul Sharma", role: "President", email: "rahul@whizzydavians.com", phone: "+91 98765 43210" },
  { name: "Priya Patel", role: "Vice President", email: "priya@whizzydavians.com", phone: "+91 98765 43211" },
  { name: "Amit Kumar", role: "Secretary", email: "amit@whizzydavians.com", phone: "+91 98765 43212" },
];

const socials = [
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/whizzydavians" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/whizzydavians" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/whizzydavians" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/whizzydavians" },
];

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Whizzy */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-club-blue via-club-green to-club-red flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Whizzy Davians
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Whizzy Davians is a vibrant college club dedicated to empowering students 
              through exciting events, sports tournaments, cultural programs, and leadership 
              development opportunities. Join us in creating unforgettable memories!
            </p>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contacts.map((contact) => (
                  <div key={contact.name} className="space-y-1">
                    <p className="font-medium text-foreground text-sm">{contact.name}</p>
                    <p className="text-xs text-club-blue font-medium">{contact.role}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                        {contact.email.split('@')[0]}
                      </a>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      <span>{contact.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-glow-blue transition-all duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Whizzy Davians Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
