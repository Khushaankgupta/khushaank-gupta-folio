
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
            Khushaank Gupta
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Chartered Accountancy Student | Finance Enthusiast | Tech & AI Passionate
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Based in Delhi, India, I'm passionate about Finance, Money, Entrepreneurship, Technology, and AI. 
            Currently pursuing Chartered Accountancy with a forward-looking approach to data-driven decision making.
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
