import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";

const queryClient = new QueryClient();

function AppRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    if (redirect) {
      navigate(redirect);
      window.history.replaceState({}, '', window.location.pathname + redirect);
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;