import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Bell, Users, TrendingUp, AlertTriangle, Video, FileText, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const patients = [
    {
      id: 1,
      name: "Sarah Peterson",
      age: 28,
      risk: "low",
      lastSession: "2 days ago",
      notes: "Showing improvement in anxiety management",
      progress: 75,
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 35,
      risk: "medium",
      lastSession: "5 days ago",
      notes: "Missed last session, follow-up needed",
      progress: 45,
    },
    {
      id: 3,
      name: "Priya Sharma",
      age: 42,
      risk: "high",
      lastSession: "1 day ago",
      notes: "Requires immediate attention - crisis intervention",
      progress: 30,
    },
    {
      id: 4,
      name: "James Wilson",
      age: 31,
      risk: "low",
      lastSession: "4 days ago",
      notes: "Consistent progress with CBT exercises",
      progress: 80,
    },
  ];

  const getRiskBadge = (risk: string) => {
    if (risk === "high") return <Badge variant="destructive">High Risk</Badge>;
    if (risk === "medium") return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
    return <Badge variant="secondary">Low Risk</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card border-b border-border p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <Home className="w-5 h-5" />
                </Link>
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Psychiatrist Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Dr. Rodriguez</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
              </Button>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                DR
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-card shadow-card animate-fade-up">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Patients</p>
                <p className="text-3xl font-bold text-foreground">127</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-card shadow-card animate-fade-up animation-delay-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">High Risk</p>
                <p className="text-3xl font-bold text-destructive">8</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-card shadow-card animate-fade-up animation-delay-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Progress</p>
                <p className="text-3xl font-bold text-success">+23%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
          </Card>
          <Card className="p-6 bg-gradient-card shadow-card animate-fade-up animation-delay-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Sessions</p>
                <p className="text-3xl font-bold text-foreground">6</p>
              </div>
              <Video className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="p-4 mb-6 bg-card shadow-card">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">All Patients</Button>
            <Button variant="outline">High Risk</Button>
            <Button variant="outline">Recent</Button>
          </div>
        </Card>

        {/* Patient Cards */}
        <div className="grid gap-4">
          {patients.map((patient, index) => (
            <Card
              key={patient.id}
              className="p-6 bg-gradient-card shadow-card hover:shadow-soft transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                {/* Patient Avatar */}
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary font-semibold text-xl flex-shrink-0">
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>

                {/* Patient Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{patient.name}</h3>
                      <p className="text-sm text-muted-foreground">Age {patient.age} • Last session: {patient.lastSession}</p>
                    </div>
                    {getRiskBadge(patient.risk)}
                  </div>

                  <p className="text-sm text-muted-foreground mb-3">{patient.notes}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Treatment Progress</span>
                      <span className="font-medium text-primary">{patient.progress}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${patient.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="default" size="sm" asChild>
                      <Link to="/video-call">
                        <Video className="w-4 h-4 mr-2" />
                        Start Session
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      View Report
                    </Button>
                    {patient.risk === "high" && (
                      <Button variant="destructive" size="sm" asChild>
                        <Link to="/crisis">
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Alert
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
