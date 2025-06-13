
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            <span className="inline-block transition-all duration-300 hover:font-extrabold hover:text-primary hover:scale-105 hover:-translate-y-1 cursor-default">
              Khushaank
            </span>{" "}
            <span className="inline-block transition-all duration-300 hover:font-extrabold hover:text-primary hover:scale-105 hover:-translate-y-1 cursor-default">
              Gupta
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            <span className="inline-block transition-all duration-300 hover:font-bold hover:text-foreground hover:scale-110 cursor-default">
              Chartered Accountancy Student
            </span>{" "}
            |{" "}
            <span className="inline-block transition-all duration-300 hover:font-bold hover:text-foreground hover:scale-110 cursor-default">
              Finance Enthusiast
            </span>{" "}
            |{" "}
            <span className="inline-block transition-all duration-300 hover:font-bold hover:text-foreground hover:scale-110 cursor-default">
              Tech & AI Passionate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-foreground cursor-default">
              Based in Delhi, India
            </span>
            , I'm passionate about{" "}
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-primary cursor-default">
              Finance
            </span>
            ,{" "}
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-primary cursor-default">
              Money
            </span>
            ,{" "}
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-primary cursor-default">
              Entrepreneurship
            </span>
            ,{" "}
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-primary cursor-default">
              Technology
            </span>
            , and{" "}
            <span className="inline-block transition-all duration-300 hover:font-semibold hover:text-primary cursor-default">
              AI
            </span>
            . Currently pursuing Chartered Accountancy with a forward-looking approach to data-driven decision making.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              onClick={() => scrollToSection("about")} 
              size="lg"
              className="w-full sm:w-auto"
            >
              <FileText className="mr-2 h-4 w-4" />
              Learn More About Me
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          <button 
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
