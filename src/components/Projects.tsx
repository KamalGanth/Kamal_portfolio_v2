import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Titanic Survival Prediction",
      year: "2023",
      description: "Analyzed the Titanic dataset using Python libraries like Pandas, NumPy, and Scikit-learn. Employed regression models to predict survival based on features such as age, gender, and ticket class. Evaluated models using cross-validation and grid search, and created insights with Matplotlib and Seaborn.",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Machine Learning"],
      type: "Machine Learning",
      category: "Data Science"
    },
    {
      title: "Film Flix - Content-based Filtering",
      year: "2024",
      description: "Developed a content-based recommendation system that uses cosine similarity to suggest movies and anime based on metadata like genre and keywords. Built with React.js frontend with Node.js and Streamlit, providing a user-friendly interface. The model was trained, scored as a pickle file, and deployed for real time recommendation.",
      technologies: ["Python", "React.js", "Node.js", "Streamlit", "Cosine Similarity", "Content Filtering"],
      type: "Recommendation System",
      category: "Full Stack + ML"
    },
    {
      title: "MultiModal Gen-AI",
      year: "2024",
      description: "Developed a multimodal Gen-AI system using RAG architecture to process and analyze various file types (PDF, audio, image) and answer related questions. Leveraged LangChain and Hugging Face's sentence-transformers for embeddings, Chroma DB for storage, and MultiQuery Retriever for information retrieval. Incorporated Gemini for audio generation and GTTS for text-to-speech conversion.",
      technologies: ["Python", "RAG", "LangChain", "Hugging Face", "Chroma DB", "Gemini", "GTTS", "MultiQuery"],
      type: "Generative AI",
      category: "AI/ML"
    }
  ];

  const internship = {
    company: "Tech Stack, Python, LangChain, Streamlit",
    position: "Teck Stack Python LangChain Streamlit Hugging-Face",
    period: "Recent",
    description: "Worked with cutting-edge AI technologies including Python, LangChain, Streamlit, and Hugging Face models to build innovative AI solutions."
  };

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-4">
              <span className="text-primary">{"<"}</span>
              Projects & Experience
              <span className="text-primary">{" />"}</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Showcasing my journey in AI, Machine Learning, and Software Development
            </p>
          </div>

          {/* Internship Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold font-mono mb-6 text-center">
              <span className="text-primary">// </span>
              Internship Experience
            </h3>
            <Card className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-mono text-primary">
                      Tech Stack Intern
                    </CardTitle>
                    <p className="text-muted-foreground">{internship.company}</p>
                  </div>
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {internship.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Python", "LangChain", "Streamlit", "Hugging Face", "AI/ML"].map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold font-mono mb-6 text-center">
              <span className="text-primary">// </span>
              Featured Projects
            </h3>
            
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl font-mono group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          <Calendar className="h-3 w-3 mr-1" />
                          {project.year}
                        </Badge>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <Badge className="bg-primary/20 text-primary border-primary/30">
                          {project.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-secondary/50 text-secondary-foreground">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all font-mono"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all font-mono"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-primary p-8 border-0 shadow-glow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold font-mono mb-4 text-primary-foreground">
                  Interested in collaborating?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  I'm always open to discussing new opportunities and innovative projects.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 font-mono font-medium"
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;