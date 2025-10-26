import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, MessageCircle, BookOpen, Info, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const FamilyNotification = () => {
  return (
    <div className="min-h-screen bg-gradient-hero p-4 flex items-center justify-center">
      <Card className="max-w-lg w-full p-8 bg-gradient-card shadow-soft animate-fade-up">
        {/* Navigation */}
        <div className="mb-6 flex justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/crisis">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
        </div>
        
        {/* Compassionate Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-warning/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-warning" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Your Family Member Needs Support
          </h1>
          <p className="text-muted-foreground">
            We're reaching out because we care about your family's wellbeing
          </p>
        </div>

        {/* Gentle Information */}
        <Card className="p-4 mb-6 bg-primary/5 border-primary/20">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="space-y-2 text-sm">
              <p className="text-foreground">
                <strong>Priya Sharma</strong> has been using MindBridge AI for mental health support.
              </p>
              <p className="text-muted-foreground">
                Our care team has noticed some signs that suggest additional family support could be helpful at this time.
              </p>
            </div>
          </div>
        </Card>

        {/* What You Can Do */}
        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-foreground">How You Can Help</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-success">1</span>
              </div>
              <p className="text-sm text-muted-foreground pt-1">
                Reach out with a simple, caring message - just knowing someone cares can make a difference
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-success">2</span>
              </div>
              <p className="text-sm text-muted-foreground pt-1">
                Listen without judgment - sometimes the best support is simply being present
              </p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
              <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-success">3</span>
              </div>
              <p className="text-sm text-muted-foreground pt-1">
                Encourage professional support - remind them they're not alone in this journey
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button variant="hero" size="lg" className="w-full">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
          <Button variant="outline" size="lg" className="w-full">
            <MessageCircle className="w-5 h-5 mr-2" />
            Send Message of Support
          </Button>
          <Button variant="ghost" size="lg" className="w-full">
            <BookOpen className="w-5 h-5 mr-2" />
            Learn How to Help
          </Button>
        </div>

        {/* Resources */}
        <Card className="mt-6 p-4 bg-secondary/50">
          <h4 className="font-semibold text-sm mb-2 text-foreground">Crisis Resources</h4>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>National Helpline: 1-800-662-4357</p>
            <p>Crisis Text Line: Text HOME to 741741</p>
            <p>Available 24/7 in English, हिंदी, বাংলা, اردو</p>
          </div>
        </Card>

        {/* Privacy Note */}
        <p className="text-xs text-center text-muted-foreground mt-6">
          This notification is sent with care and respect for privacy. We share only what's necessary to support your loved one's wellbeing.
        </p>
      </Card>
    </div>
  );
};

export default FamilyNotification;
