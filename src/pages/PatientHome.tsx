import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar, MessageCircle, Trophy, Smile, Frown, Meh, Heart, Activity, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import psychiatristImage from "@/assets/psychiatrist.jpg";

const PatientHome = () => {
  const moodOptions = [
    { icon: Smile, label: "Great", color: "text-success" },
    { icon: Heart, label: "Good", color: "text-primary" },
    { icon: Meh, label: "Okay", color: "text-warning" },
    { icon: Frown, label: "Low", color: "text-destructive" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Good Morning, Sarah</h1>
              <p className="text-sm text-muted-foreground">How are you feeling today?</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-success/10 px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">7 day streak! 🔥</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Mood Tracker Widget */}
        <Card className="p-6 bg-gradient-card shadow-card animate-fade-up">
          <h2 className="text-lg font-semibold mb-4 text-foreground">How are you feeling?</h2>
          <div className="grid grid-cols-4 gap-4">
            {moodOptions.map((mood) => (
              <button
                key={mood.label}
                className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-muted/50 transition-all hover:scale-105"
              >
                <mood.icon className={`w-8 h-8 ${mood.color}`} />
                <span className="text-sm font-medium text-foreground">{mood.label}</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Upcoming Consultation */}
        <Card className="p-6 bg-gradient-card shadow-card animate-fade-up animation-delay-100">
          <div className="flex items-start gap-4">
            <img
              src={psychiatristImage}
              alt="Dr. Priya Sharma"
              className="w-16 h-16 rounded-full object-cover shadow-soft"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Upcoming Session</h3>
              <p className="text-sm text-muted-foreground">Dr. Priya Sharma</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Today at 3:00 PM</span>
              </div>
            </div>
            <Button variant="hero" asChild>
              <Link to="/video-call">Join Call</Link>
            </Button>
          </div>
        </Card>

        {/* Daily CBT Exercise */}
        <Card className="p-6 bg-gradient-card shadow-card animate-fade-up animation-delay-200">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-foreground">Daily Exercise: Breathing</h3>
                <p className="text-sm text-muted-foreground">5 minutes • Mindfulness</p>
              </div>
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Progress this week</span>
                <span className="font-medium text-primary">4/7 days</span>
              </div>
              <Progress value={57} className="h-2" />
            </div>
            <Button variant="hero" className="w-full" asChild>
              <Link to="/exercise">Start Exercise</Link>
            </Button>
          </div>
        </Card>

        {/* AI Assistant */}
        <Card className="p-6 bg-primary/5 border-primary/20 shadow-card animate-fade-up animation-delay-300">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-full">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">Need to talk?</h3>
              <p className="text-sm text-muted-foreground">Your AI companion is here 24/7</p>
            </div>
            <Button variant="default" asChild>
              <Link to="/assessment">Chat Now</Link>
            </Button>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Sessions", value: "12", icon: Calendar },
            { label: "Exercises", value: "28", icon: Activity },
            { label: "Streak", value: "7d", icon: Trophy },
            { label: "Points", value: "450", icon: Heart },
          ].map((stat) => (
            <Card key={stat.label} className="p-4 bg-gradient-card shadow-card text-center animate-scale-in">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-card border-t border-border p-4">
        <div className="container mx-auto flex justify-around">
          <Link to="/patient" className="flex flex-col gap-1 items-center text-muted-foreground hover:text-foreground transition-colors">
            <Activity className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/video-call" className="flex flex-col gap-1 items-center text-muted-foreground hover:text-foreground transition-colors">
            <Calendar className="w-5 h-5" />
            <span className="text-xs">Sessions</span>
          </Link>
          <Link to="/exercise" className="flex flex-col gap-1 items-center text-muted-foreground hover:text-foreground transition-colors">
            <Trophy className="w-5 h-5" />
            <span className="text-xs">Exercises</span>
          </Link>
          <Link to="/assessment" className="flex flex-col gap-1 items-center text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Chat</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default PatientHome;
