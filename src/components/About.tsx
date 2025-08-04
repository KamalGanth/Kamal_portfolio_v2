import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "SQL", "OOPS", "Machine Learning", "Generative AI", 
    "NLP", "Agentic AI", "Deep Learning", "Pandas", "NumPy", 
    "Scikit-learn", "LangChain", "Hugging Face"
  ];

  const achievements = [
    { platform: "LeetCode", achievement: "Solved 400+ Problems", icon: "🏆" },
    { platform: "CodeChef", achievement: "Solved 200+ Problems", icon: "🥇" },
    { platform: "HackerRank", achievement: "Achieved Silver in Python", icon: "🥈" },
    { platform: "Project Expo", achievement: "Secured 1st Place with Rs.2000 Cash Prize", icon: "🏅" },
    { platform: "Rest Hackathon", achievement: "Cleared 2 rounds among 50 teams", icon: "💻" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              <span className="text-primary">{"<"}</span>
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
                      <h4 className="font-semibold text-primary">B.TECH (AI&DS)</h4>
                      <p className="text-muted-foreground">Sri Ramakrishna College of Engineering</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          2022-2026
                        </span>
                        <span>CGPA: 7.38/10 (SEM)</span>
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
                      { name: "C Programming", provider: "Udemy", year: "2023" },
                      { name: "Crash Course on Python", provider: "Coursera", year: "2023" },
                      { name: "Machine Learning Data Structures in C and C++", provider: "Udemy", year: "2023" },
                      { name: "Supervised Machine Learning: Regression and Classification", provider: "Coursera", year: "2024" }
                    ].map((cert, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-primary/10 last:border-b-0">
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {cert.year}
                        </Badge>
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
                      <span className="text-muted-foreground">Coimbatore, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono">📧</span>
                      <a href="mailto:kamalganth2004@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        kamalganth2004@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-mono">📱</span>
                      <span className="text-muted-foreground">9445171305</span>
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