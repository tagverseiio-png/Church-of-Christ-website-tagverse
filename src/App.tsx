import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Admin routes without navigation/footer */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* Public routes with navigation/footer */}
            <Route path="/" element={
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                  <Home />
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTop />
              </div>
            } />
            
            <Route path="/about" element={
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                  <About />
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTop />
              </div>
            } />
            
            <Route path="/gallery" element={
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                  <Gallery />
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTop />
              </div>
            } />
            
            <Route path="/contact" element={
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                  <Contact />
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTop />
              </div>
            } />
            
            {/* 404 Not Found */}
            <Route path="*" element={
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow">
                  <NotFound />
                </main>
                <Footer />
                <WhatsAppButton />
                <ScrollToTop />
              </div>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
