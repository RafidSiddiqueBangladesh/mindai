import { Button } from "@/components/ui/button";
import { Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Mental Health Support,{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                AI-powered mental health care that connects you with compassionate support 24/7, 
                backed by professional psychiatrists who truly understand.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" className="animate-pulse-glow">
                Get Started
              </Button>
              <Button variant="outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Culturally Sensitive</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative rounded-3xl overflow-hidden shadow-soft animate-float">
              <img
                src={heroImage}
                alt="Diverse people using MindBridge AI for mental health support"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
