
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DividerSection } from "@/components/sections/DividerSection";
import { QuestionsSection } from "@/components/sections/QuestionsSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DividerSection />
      <SkillsSection />
      <ProjectsCarousel />
      <TestimonialsSection />
      <QuestionsSection />
      <FooterSection />
    </main>
  );
};

export default Index;
