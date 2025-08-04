import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo & Description */}
            <div className="text-center md:text-left">
              <div className="font-mono font-bold text-2xl mb-3">
                <span className="text-primary">{"<"}</span>
                <span className="text-foreground">Kamalganth</span>
                <span className="text-primary">{" S />"}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI & Data Science Engineer<br />
                Building the future with intelligent solutions
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-mono font-semibold mb-4 text-primary">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
                <a href="mailto:kamalganth2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Email
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="font-mono font-semibold mb-4 text-primary">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4">
                <a 
                  href="https://github.com" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="mailto:kamalganth2004@gmail.com" 
                  className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/20 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              <p className="flex items-center justify-center md:justify-start gap-1">
                © {currentYear} Kamalganth S. Built with 
                <Heart className="h-4 w-4 text-primary animate-pulse" /> 
                and lots of coffee.
              </p>
            </div>
            <div className="text-muted-foreground text-sm">
              <p className="font-mono">
                <span className="text-primary">{"</"}</span>
                portfolio
                <span className="text-primary">{">"}</span>
              </p>
            </div>
          </div>

          {/* Tech Stack Credits */}
          <div className="text-center mt-6 pt-6 border-t border-primary/10">
            <p className="text-xs text-muted-foreground/70 font-mono">
              Built with React, TypeScript, Tailwind CSS & shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;