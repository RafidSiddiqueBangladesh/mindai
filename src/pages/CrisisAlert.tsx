import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, MessageSquare, Clock, TrendingDown, Brain, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

const CrisisAlert = () => {
  const warningSignals = [
    { time: "2 hours ago", signal: "Speech pattern changes detected - slower responses" },
    { time: "1 hour ago", signal: "Keywords mentioned: 'hopeless', 'giving up'" },
    { time: "30 min ago", signal: "Emotional intensity spike in conversation" },
    { time: "10 min ago", signal: "Extended silence during session" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Navigation */}
        <div className="mb-6 flex gap-2">
          <Button variant="secondary" size="sm" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          </Button>
        </div>
        
        {/* Alert Header */}
        <Card className="p-6 mb-6 bg-destructive/10 border-destructive shadow-soft animate-pulse-glow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-destructive/20 rounded-full">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold text-foreground">High Risk Alert</h1>
                <Badge variant="destructive" className="animate-pulse">
                  IMMEDIATE ATTENTION REQUIRED
                </Badge>
              </div>
              <p className="text-muted-foreground">
                AI system has detected concerning patterns requiring immediate professional intervention
              </p>
            </div>
          </div>
        </Card>

        {/* Patient Information */}
        <Card className="p-6 mb-6 bg-card shadow-card animate-fade-up">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-2xl">
              PS
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground mb-1">Priya Sharma</h2>
              <p className="text-muted-foreground mb-3">Age 42 • Patient ID: #P-2847</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Last Session</p>
                  <p className="font-medium text-foreground">1 day ago</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Treatment Duration</p>
                  <p className="font-medium text-foreground">3 months</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Primary Diagnosis</p>
                  <p className="font-medium text-foreground">Major Depressive Disorder</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Assigned Psychiatrist</p>
                  <p className="font-medium text-foreground">Dr. Rodriguez</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Risk Indicators */}
        <Card className="p-6 mb-6 bg-gradient-card shadow-card animate-fade-up animation-delay-100">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
            <Brain className="w-5 h-5 text-primary" />
            AI-Detected Risk Indicators
          </h3>
          <div className="space-y-3">
            {warningSignals.map((signal, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-destructive/5 rounded-lg border border-destructive/10"
              >
                <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-1">{signal.time}</p>
                  <p className="text-sm text-foreground">{signal.signal}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Escalation Timeline */}
        <Card className="p-6 mb-6 bg-gradient-card shadow-card animate-fade-up animation-delay-200">
          <h3 className="font-semibold mb-4 flex items-center gap-2 text-foreground">
            <TrendingDown className="w-5 h-5 text-destructive" />
            24-Hour Escalation Pattern
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-4">
              {[
                { time: "24 hours ago", status: "Mood score: 6/10 - Stable", color: "bg-success" },
                { time: "12 hours ago", status: "Mood score: 4/10 - Declining", color: "bg-warning" },
                { time: "6 hours ago", status: "Mood score: 2/10 - Critical", color: "bg-destructive" },
                { time: "Now", status: "High risk indicators detected", color: "bg-destructive animate-pulse" },
              ].map((event, index) => (
                <div key={index} className="flex items-start gap-4 relative">
                  <div className={`w-8 h-8 rounded-full ${event.color} flex items-center justify-center z-10`}>
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                    <p className="text-sm font-medium text-foreground">{event.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <Card className="p-6 bg-gradient-card shadow-card">
          <h3 className="font-semibold mb-4 text-foreground">Immediate Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="destructive" size="lg" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Call Patient Now
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <MessageSquare className="w-5 h-5 mr-2" />
              Send Emergency Message
            </Button>
            <Button variant="outline" size="lg" className="w-full" asChild>
              <Link to="/family">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Notify Emergency Contact
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full">
              <Phone className="w-5 h-5 mr-2" />
              Contact Crisis Helpline
            </Button>
          </div>
        </Card>

        {/* Professional Resources */}
        <Card className="mt-6 p-4 bg-primary/5 border-primary/20">
          <p className="text-sm text-center text-muted-foreground">
            <strong className="text-foreground">Crisis Resources:</strong> National Suicide Prevention Lifeline: 988 • Crisis Text Line: Text HOME to 741741
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CrisisAlert;
