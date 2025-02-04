
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsCarousel } from "@/components/sections/ProjectsCarousel";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DividerSection } from "@/components/sections/DividerSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DividerSection />
      <SkillsSection />
      <ProjectsCarousel />
      <TestimonialsSection />
    </main>
  );
};

export default Index;
