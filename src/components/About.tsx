
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, MapPin, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A driven Chartered Accountancy student with a passion for financial innovation and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently pursuing Chartered Accountancy with a deep fascination for how finance, 
              technology, and entrepreneurship intersect in today's rapidly evolving world. My approach 
              combines traditional financial expertise with modern technological insights.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I believe in transparency, data-driven thinking, and the power of financial literacy 
              to transform lives and businesses. My goal is to bridge the gap between complex 
              financial concepts and practical applications in the digital age.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Delhi, India</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Pursuing Chartered Accountancy</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Target className="h-5 w-5 mr-2 text-primary" />
                  Focus Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Finance, AI, Technology, Entrepreneurship</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Transparency, Data-driven, Innovation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
