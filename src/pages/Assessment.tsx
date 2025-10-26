import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Smile, Meh, Frown, ThumbsUp, ThumbsDown, Mic, ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(3);
  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const moodOptions = [
    { icon: Smile, label: "Very Happy", color: "hover:bg-success/10 hover:border-success" },
    { icon: ThumbsUp, label: "Happy", color: "hover:bg-primary/10 hover:border-primary" },
    { icon: Meh, label: "Okay", color: "hover:bg-warning/10 hover:border-warning" },
    { icon: ThumbsDown, label: "Sad", color: "hover:bg-destructive/10 hover:border-destructive/50" },
    { icon: Frown, label: "Very Sad", color: "hover:bg-destructive/10 hover:border-destructive" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-card shadow-soft animate-fade-up">
        {/* Back Button */}
        <div className="mb-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/patient">
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
        
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Step {currentStep} of {totalSteps}</span>
            <span className="font-medium text-primary">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              How have you been feeling this week?
            </h2>
            <p className="text-muted-foreground">
              Select the option that best describes your mood
            </p>
          </div>

          {/* Mood Selection */}
          <div className="grid grid-cols-5 gap-4">
            {moodOptions.map((mood) => (
              <button
                key={mood.label}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-border transition-all hover:scale-105 ${mood.color}`}
              >
                <mood.icon className="w-8 h-8" />
                <span className="text-sm font-medium text-center">{mood.label}</span>
              </button>
            ))}
          </div>

          {/* Optional Text Input */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              Tell us more (optional)
            </label>
            <div className="relative">
              <Textarea
                placeholder="Share your thoughts and feelings here..."
                className="min-h-[120px] resize-none"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute bottom-3 right-3"
              >
                <Mic className="w-5 h-5 text-primary" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              variant="ghost"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            >
              Skip
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Encouraging Message */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-sm text-center text-muted-foreground">
            💙 Your responses help us provide better support tailored just for you
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Assessment;
