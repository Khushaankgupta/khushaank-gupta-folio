
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Calculator, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Financial Analysis Tool",
      description: "Developed a machine learning model to analyze financial statements and predict business performance metrics using Python and various ML libraries.",
      technologies: ["Python", "Machine Learning", "Financial Modeling", "Data Analysis"],
      icon: Brain,
      status: "In Development"
    },
    {
      title: "Personal Finance Tracker",
      description: "Created a comprehensive personal finance management system with expense tracking, budget planning, and investment portfolio analysis.",
      technologies: ["Excel VBA", "Power BI", "Financial Planning", "Data Visualization"],
      icon: Calculator,
      status: "Completed"
    },
    {
      title: "Market Trend Analysis Dashboard",
      description: "Built an interactive dashboard for analyzing stock market trends and economic indicators with real-time data integration.",
      technologies: ["Tableau", "SQL", "Market Analysis", "Data Visualization"],
      icon: TrendingUp,
      status: "Completed"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projects & Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my practical application of finance and technology skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <project.icon className="h-8 w-8 text-primary" />
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Academic Projects
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Throughout my CA journey, I've worked on various academic projects that combine 
            theoretical knowledge with practical applications in finance and technology.
          </p>
          <Button variant="outline" size="lg">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
