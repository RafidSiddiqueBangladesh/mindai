import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Shield, Brain, Globe, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Comprehensive Mental Health Care
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Combining AI technology with professional psychiatric care for better mental health outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Support",
                  description: "24/7 intelligent companion that understands and responds to your needs",
                },
                {
                  icon: Shield,
                  title: "Professional Care",
                  description: "Licensed psychiatrists review all insights and provide expert guidance",
                },
                {
                  icon: Globe,
                  title: "Culturally Sensitive",
                  description: "Multilingual support designed for diverse communities worldwide",
                },
                {
                  icon: Clock,
                  title: "Always Available",
                  description: "Round-the-clock access through app, web, or phone",
                },
              ].map((feature, index) => (
                <Card
                  key={feature.title}
                  className="p-6 bg-gradient-card shadow-card hover:shadow-soft transition-all hover:scale-105 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-fade-up">
              <h2 className="text-4xl font-bold text-foreground">
                Ready to Start Your Mental Health Journey?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands who are already getting the support they deserve
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button variant="outline" size="xl">
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 MindBridge AI. Empowering mental wellness through technology.</p>
          <p className="text-sm mt-2">HIPAA Compliant • Secure • Confidential</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
