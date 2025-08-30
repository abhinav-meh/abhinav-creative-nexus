import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Lab from "./pages/Lab";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Zori from "./pages/projects/Zori";
import Sapera from "./pages/projects/Sapera";
import StyleSetuper from "./pages/projects/StyleSetuper";
import Amazeballs from "./pages/projects/Amazeballs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="dark">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/projects/zori" element={<Zori />} />
            <Route path="/projects/sapera" element={<Sapera />} />
            <Route path="/projects/style-setuper" element={<StyleSetuper />} />
            <Route path="/projects/amazeballs" element={<Amazeballs />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
