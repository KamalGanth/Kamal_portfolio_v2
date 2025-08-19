import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
              <span className="text-foreground">KAMALGANTH</span>
              <span className="text-primary block md:inline md:ml-4">S</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto mb-6 rounded-full shadow-glow"></div>
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              AI  Engineer
            </p>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Specializing in <span className="text-primary font-semibold">Machine Learning</span>, 
              <span className="text-primary font-semibold"> Generative AI</span>, and 
              <span className="text-primary font-semibold"> Deep Learning</span>,
              <span className="text-primary font-semibold"> Agentic AI</span>. 
              Building intelligent solutions that transform data into insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="#contact" >
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-mono font-medium"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300 font-mono font-medium"
              onClick={() => window.open('https://drive.google.com/file/d/1sfdyu3w8xemefn6LTgQhrs3dkYWgamAp/view?usp=sharing', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/KamalGanth" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="www.linkedin.com/in/kamalganth-s-794454245" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="mailto:kamalganths2004@gmail.com" 
              className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;