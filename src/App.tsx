
import React, { Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen";
import { FooterSection } from "./components/sections/FooterSection";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    {children}
    <FooterSection />
  </>
);

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout><Index /></Layout>} />
                <Route path="/projects" element={<Layout><Projects /></Layout>} />
                <Route path="/project/:id" element={<Layout><ProjectDetail /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
