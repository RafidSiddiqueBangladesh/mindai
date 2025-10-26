import { Button } from "@/components/ui/button";
import { Menu, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">MindBridge AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/patient" className="text-muted-foreground hover:text-foreground transition-colors">
              Patient Home
            </Link>
            <Link to="/assessment" className="text-muted-foreground hover:text-foreground transition-colors">
              Assessment
            </Link>
            <Link to="/exercise" className="text-muted-foreground hover:text-foreground transition-colors">
              Exercises
            </Link>
            <Link to="/video-call" className="text-muted-foreground hover:text-foreground transition-colors">
              Video Call
            </Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link to="/ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">
              Ecosystem
            </Link>
            <Button variant="hero" asChild>
              <Link to="/patient">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
