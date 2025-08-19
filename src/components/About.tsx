import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar, ExternalLink } from "lucide-react";

const handleViewCertificate = (link) => {
  window.open(link, '_blank', 'noopener,noreferrer');
};
const About = () => {
  const skills = [
    "Python", "SQL", "OOPS", "Machine Learning", "Generative AI", 
    "NLP", "Agentic AI", "Deep Learning", "Prompt Engineering", 
     
  ];

  const achievements = [
    { platform: "LeetCode", achievement: "Solved 60+ Problems", icon: "🏆" },
    { platform: "CodeChef", achievement: "Solved 25+ Problems", icon: "🥇" },
    { platform: "HackerRank", achievement: "Achieved Silver in Python", icon: "🥈" },
    { platform: "Project Expo", achievement: "Secured 1st Place with Rs.2000 Cash Prize", icon: "🏅" },
    { platform: "Rev Hack 23", achievement: "Cleared 2 rounds among 50 teams", icon: "💻" }

  ];

  

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              <span className="text-primary">{"< "}</span>
              About Me
              <span className="text-primary">{" />"}</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Education & Info */}
            <div className="space-y-8">
              <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold font-mono">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary">B.TECH (Artificial Intelligence & Data Science)</h4>
                      <p className="text-muted-foreground">Sri Eshwar College of Engineering</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2022-2026
                        </span>
                        <span>CGPA: 7.7/10 (SEM 5)</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">HSC</h4>
                      <p className="text-muted-foreground">Adhiyaman Matric Hr. Sec School</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2020-2022
                        </span>
                        <span>89.7%</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">SSLC</h4>
                      <p className="text-muted-foreground">Adhiyaman Matric Hr. Sec School</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2019-2020
                        </span>
                        <span>94.8%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold font-mono">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "C Programming", provider: "Udemy", year: "2023",link: "https://drive.google.com/file/d/1a13exhcuZw7xGzc7sJXNg3oREonBJuW5/view?usp=sharing"},
                      { name: "Crash Course on Python", provider: "Coursera", year: "2023",link: "https://coursera.org/share/20e7ce11b86b7b35b7b1007339f99751" },
                      { name: "Data Structures and Algorithms using C & C++", provider: "Udemy", year: "2023",link: "https://drive.google.com/file/d/1KE2xK9nYLjBsPV_quHowkH92wPWbjgdP/view?usp=sharing" },
                      { name: "Supervised Machine Learning: Regression and Classification", provider: "Coursera", year: "2024",link: "https://coursera.org/share/46e436e140827d6cdf20b5c75c6ea932"},
                      { name: "Advanced Learning", provider: "Coursera", year: "2025",link: "https://coursera.org/share/d9266f3e7c01a8bad51922c20cd9c05a" }
                    ].map((cert, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            {cert.year}
                          </Badge>
                          <button
                            onClick={() => handleViewCertificate(cert.link)}
                            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-md border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills & Achievements */}
            <div className="space-y-8">
              <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-mono mb-4">
                    <span className="text-primary">{"<"}</span>
                    Skills
                    <span className="text-primary">{" />"}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors font-mono"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-mono mb-4">
                    <span className="text-primary">{"<"}</span>
                    Achievements
                    <span className="text-primary">{" />"}</span>
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <span className="text-xl">{achievement.icon}</span>
                        <div>
                          <p className="font-medium text-primary">{achievement.platform}</p>
                          <p className="text-sm text-muted-foreground">{achievement.achievement}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold font-mono mb-4">Contact Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Coimbatore,Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono">📧</span>
                      <a href="mailto:kamalganths2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        kamalganths2004@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono">📱</span>
                      <span className="text-muted-foreground">+91 9445171305</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;