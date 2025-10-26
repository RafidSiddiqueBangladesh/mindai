import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Cloud, Phone, Users, Video, Brain, Shield, Clock, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import ecosystemImage from "@/assets/ecosystem.jpg";

const Ecosystem = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Patient Mobile App",
      description: "24/7 AI companion, mood tracking, CBT exercises, and video consultations",
      color: "text-primary",
    },
    {
      icon: Monitor,
      title: "Psychiatrist Dashboard",
      description: "Real-time patient monitoring, AI insights, and comprehensive reporting",
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "AI Engine",
      description: "Advanced emotion detection, pattern recognition, and risk assessment",
      color: "text-primary-glow",
    },
    {
      icon: Phone,
      title: "IVR System",
      description: "Voice-based support for users with basic phones or limited internet",
      color: "text-success",
    },
    {
      icon: Users,
      title: "Family Support",
      description: "Culturally-sensitive notifications and resources for family members",
      color: "text-warning",
    },
    {
      icon: Video,
      title: "Video Consultations",
      description: "Secure, HIPAA-compliant sessions with real-time analysis",
      color: "text-primary",
    },
  ];

  const statistics = [
    { label: "Active Users", value: "10K+", icon: Users },
    { label: "Success Rate", value: "87%", icon: Brain },
    { label: "Uptime", value: "99.9%", icon: Clock },
    { label: "Languages", value: "12+", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-border p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
            Complete Mental Health{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ecosystem
            </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              An integrated platform connecting patients, professionals, and AI for comprehensive mental healthcare
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* System Architecture Visualization */}
        <Card className="p-8 mb-12 bg-gradient-card shadow-soft overflow-hidden animate-fade-up">
          <div className="relative">
            <img
              src={ecosystemImage}
              alt="MindBridge AI Ecosystem Architecture"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent rounded-lg" />
          </div>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statistics.map((stat, index) => (
            <Card
              key={stat.label}
              className="p-6 bg-gradient-card shadow-card text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 bg-gradient-card shadow-card hover:shadow-soft transition-all hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Benefits */}
        <Card className="p-8 bg-primary/5 border-primary/20 shadow-soft">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Why MindBridge AI?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground">Secure & Private</h3>
              <p className="text-sm text-muted-foreground">
                HIPAA-compliant with end-to-end encryption protecting patient data
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Advanced algorithms detect patterns and risks early for timely intervention
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground">Culturally Sensitive</h3>
              <p className="text-sm text-muted-foreground">
                Multilingual support with understanding of diverse cultural contexts
              </p>
            </div>
          </div>
        </Card>

        {/* Tech Stack */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4">Powered By</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Tailwind CSS", "AI/ML", "WebRTC", "Cloud Infrastructure"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
