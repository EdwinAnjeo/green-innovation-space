
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import StationDetail from "./pages/StationDetail";
import Stations from "./pages/Stations";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success-stories" element={<Blog />} />
          <Route path="/stations/:stationId" element={<StationDetail />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          {/* Redirect old blog path to success-stories */}
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
