import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";


import { useState } from "react";
import emailjs from "emailjs-com";  

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kamalganths2004@gmail.com",
      href: "mailto:kamalganths2004@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9445171305",
      href: "tel:+919445171305"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/KamalGanth",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "www.linkedin.com/in/kamalganth-s-794454245",
      color: "hover:text-blue-400"
    }
  ];

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs
    .send(
      "service_uhxbe3k",   // from EmailJS dashboard
      "template_bieag5e",  // from EmailJS dashboard
      form,
      "t2sopvbU5tf1i9Ram"    // from EmailJS dashboard
    )
    .then(() => {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" }); // reset form
    })
    .catch((err) => alert("Failed to send: " + err.text));
};

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              <span className="text-primary">{"<"}</span>
              Get In Touch
              <span className="text-primary">{" />"}</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to bring your AI and Machine Learning projects to life? Let's collaborate and build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold font-mono mb-6">
                  <span className="text-primary">// </span>
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities, whether it's a challenging project, 
                  a collaboration, or just a conversation about AI and technology. Feel free to reach out!
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-primary/20 hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground font-mono">{info.label}</p>
                          {info.href !== "#" ? (
                            <a 
                              href={info.href} 
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold font-mono mb-4">
                  <span className="text-primary">// </span>
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="p-4 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <Card className="bg-gradient-primary border-0 shadow-glow">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold font-mono mb-4 text-primary-foreground">
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-foreground">60+</p>
                      <p className="text-sm text-primary-foreground/80">LeetCode Problems</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-foreground">3+</p>
                      <p className="text-sm text-primary-foreground/80">Major Projects</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-foreground">5+</p>
                      <p className="text-sm text-primary-foreground/80">Certifications</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-foreground">25+</p>
                      <p className="text-sm text-primary-foreground/80">CodeChef Problems</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold font-mono mb-6">
                  <span className="text-primary">// </span>
                  Send Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground font-mono mb-2 block">
                        Name
                      </label>
                      <Input 
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className="bg-background border-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground font-mono mb-2 block">
                        Email
                      </label>
                      <Input 
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="bg-background border-primary/20 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground font-mono mb-2 block">
                      Subject
                    </label>
                    <Input 
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration"
                      className="bg-background border-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-muted-foreground font-mono mb-2 block">
                      Message
                    </label>
                    <Textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        rows={6}
                        className="bg-background border-primary/20 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-mono font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};




export default Contact;