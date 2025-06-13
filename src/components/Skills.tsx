
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, Brain, Code, DollarSign, BarChart } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Finance & Accounting",
      icon: Calculator,
      skills: ["Financial Analysis", "Taxation", "Auditing", "Financial Reporting", "Cost Accounting", "Budget Planning"]
    },
    {
      title: "Technology & AI",
      icon: Brain,
      skills: ["Artificial Intelligence", "Machine Learning", "Data Analysis", "Financial Modeling", "Excel/Spreadsheets", "Automation"]
    },
    {
      title: "Business & Strategy",
      icon: TrendingUp,
      skills: ["Entrepreneurship", "Business Strategy", "Market Analysis", "Risk Management", "Investment Analysis", "Financial Planning"]
    },
    {
      title: "Technical Skills",
      icon: Code,
      skills: ["Python", "SQL", "Power BI", "Tableau", "Advanced Excel", "Financial Software"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive blend of traditional finance knowledge and modern technology skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <category.icon className="h-6 w-6 mr-3 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Financial Expertise</h4>
              <p className="text-muted-foreground">Deep understanding of accounting principles, taxation, and financial analysis</p>
            </div>
            <div className="text-center">
              <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Tech Innovation</h4>
              <p className="text-muted-foreground">Leveraging AI and technology to solve complex financial challenges</p>
            </div>
            <div className="text-center">
              <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-foreground mb-2">Data-Driven Analysis</h4>
              <p className="text-muted-foreground">Using data and analytics to drive informed business decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
