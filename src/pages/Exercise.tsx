import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Award, Star, Flame, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import meditationBg from "@/assets/meditation-bg.jpg";

const Exercise = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setBreathingPhase((prev) => {
        if (prev === "inhale") return "hold";
        if (prev === "hold") return "exhale";
        return "inhale";
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (breathingPhase === "inhale") setScale(1.4);
    else if (breathingPhase === "hold") setScale(1.4);
    else setScale(1);
  }, [breathingPhase]);

  const getPhaseText = () => {
    if (breathingPhase === "inhale") return "Breathe In...";
    if (breathingPhase === "hold") return "Hold...";
    return "Breathe Out...";
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-lg border-b border-border p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/patient">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <h1 className="text-xl font-bold text-foreground">Breathing Exercise</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <Home className="w-4 h-4" />
                </Link>
              </Button>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Flame className="w-3 h-3" />
                7 day streak
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                +50 XP
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Exercise Card */}
          <Card className="relative overflow-hidden shadow-soft">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <img
                src={meditationBg}
                alt="Peaceful meditation background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative p-12 flex flex-col items-center justify-center min-h-[500px]">
              {/* Breathing Circle */}
              <div className="relative mb-8">
                <div
                  className="w-64 h-64 rounded-full bg-gradient-primary flex items-center justify-center transition-transform duration-[4000ms] ease-in-out shadow-glow animate-breathe"
                  style={{ transform: `scale(${scale})` }}
                >
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white mb-2">{getPhaseText()}</p>
                    <p className="text-sm text-white/80">Follow the circle</p>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl -z-10 animate-pulse-glow" />
              </div>

              {/* Controls */}
              <Button
                variant={isPlaying ? "secondary" : "hero"}
                size="lg"
                onClick={() => setIsPlaying(!isPlaying)}
                className="shadow-soft"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    Start Exercise
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Achievement Badges */}
          <Card className="p-6 bg-gradient-card shadow-card animate-fade-up">
            <h3 className="font-semibold mb-4 text-foreground">Your Achievements</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Bronze", icon: Award, color: "text-warning", unlocked: true },
                { label: "Silver", icon: Award, color: "text-muted-foreground", unlocked: true },
                { label: "Gold", icon: Award, color: "text-muted-foreground", unlocked: false },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg ${
                    badge.unlocked ? "bg-primary/10" : "bg-muted/20"
                  }`}
                >
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                  <span className="text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Other Exercises */}
          <Card className="p-6 bg-gradient-card shadow-card">
            <h3 className="font-semibold mb-4 text-foreground">More Exercises</h3>
            <div className="space-y-3">
              {[
                { name: "Journaling", duration: "10 min", points: 30 },
                { name: "Gratitude Practice", duration: "5 min", points: 20 },
                { name: "Progressive Relaxation", duration: "15 min", points: 40 },
              ].map((exercise) => (
                <button
                  key={exercise.name}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                >
                  <div>
                    <p className="font-medium text-foreground">{exercise.name}</p>
                    <p className="text-sm text-muted-foreground">{exercise.duration}</p>
                  </div>
                  <Badge variant="secondary">+{exercise.points} XP</Badge>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
