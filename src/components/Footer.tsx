import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <Separator className="mb-8" />
        <div className="text-center">
          <p className="text-muted-foreground mb-2">© 2025 Khushaank Gupta. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
