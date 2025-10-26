import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Video, VideoOff, Mic, MicOff, PhoneOff, AlertCircle, ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import aiAvatar from "@/assets/ai-avatar.png";

const VideoCall = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="absolute top-4 left-4 z-50 flex gap-2">
        <Button variant="secondary" size="sm" asChild>
          <Link to="/patient">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
        </Button>
        <Button variant="secondary" size="sm" asChild>
          <Link to="/">
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </Button>
      </div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-4 h-[calc(100vh-2rem)]">
          {/* Main Video Area - 2 columns */}
          <div className="lg:col-span-2 space-y-4">
            {/* AI Avatar */}
            <Card className="relative h-2/3 overflow-hidden bg-gradient-hero shadow-soft">
              <img
                src={aiAvatar}
                alt="AI Mental Health Counselor"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-success text-success-foreground">
                  AI Assistant Active
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3">
                  <p className="text-sm font-medium text-foreground">Dr. Mira AI</p>
                  <p className="text-xs text-muted-foreground">Your Mental Health Companion</p>
                </div>
              </div>
            </Card>

            {/* Patient Video (Picture-in-Picture) */}
            <Card className="h-1/3 overflow-hidden shadow-card">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-primary">SP</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Sarah Peterson</p>
                </div>
              </div>
            </Card>

            {/* Controls */}
            <div className="flex justify-center gap-4">
              <Button variant="secondary" size="icon" className="w-12 h-12 rounded-full">
                <Mic className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon" className="w-12 h-12 rounded-full">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="destructive" size="icon" className="w-14 h-14 rounded-full" onClick={() => navigate("/patient")}>
                <PhoneOff className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Analysis & Transcript */}
          <div className="space-y-4 overflow-y-auto">
            {/* Real-time Emotion Analysis */}
            <Card className="p-4 bg-gradient-card shadow-card animate-fade-in">
              <h3 className="font-semibold mb-4 text-foreground">Emotion Analysis</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Mood</span>
                    <span className="font-medium text-primary">Calm</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Anxiety</span>
                    <span className="font-medium text-warning">Low</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Engagement</span>
                    <span className="font-medium text-success">High</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Live Transcript */}
            <Card className="p-4 bg-gradient-card shadow-card flex-1">
              <h3 className="font-semibold mb-4 text-foreground">Live Transcript</h3>
              <div className="space-y-4 text-sm">
                <div className="space-y-1">
                  <p className="font-medium text-primary">Dr. Mira AI</p>
                  <p className="text-muted-foreground">
                    How have you been feeling since our last session?
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-foreground">You</p>
                  <p className="text-muted-foreground">
                    I've been doing better. The breathing exercises have really helped...
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-primary">Dr. Mira AI</p>
                  <p className="text-muted-foreground">
                    That's wonderful to hear! Can you tell me more about what specifically has improved?
                  </p>
                </div>
              </div>
            </Card>

            {/* Emergency Alert */}
            <Card className="p-4 bg-destructive/10 border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                <div className="space-y-1 flex-1">
                  <p className="text-sm font-medium text-foreground">Emergency Help</p>
                  <p className="text-xs text-muted-foreground">
                    If you need immediate assistance, click here
                  </p>
                </div>
                <Button variant="destructive" size="sm" asChild>
                  <Link to="/crisis">Alert</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCall;
