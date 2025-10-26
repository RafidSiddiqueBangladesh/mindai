import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PatientHome from "./pages/PatientHome";
import Assessment from "./pages/Assessment";
import Exercise from "./pages/Exercise";
import VideoCall from "./pages/VideoCall";
import Dashboard from "./pages/Dashboard";
import CrisisAlert from "./pages/CrisisAlert";
import FamilyNotification from "./pages/FamilyNotification";
import Ecosystem from "./pages/Ecosystem";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/patient" element={<PatientHome />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/video-call" element={<VideoCall />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crisis" element={<CrisisAlert />} />
          <Route path="/family" element={<FamilyNotification />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
