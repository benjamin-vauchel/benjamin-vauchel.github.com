import { ModeProvider } from "@/contexts/ModeContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PostsSection } from "@/components/PostsSection";
import { FormationSection } from "@/components/FormationSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <ModeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FormationSection />
        <PostsSection />
        <FooterSection />
      </div>
    </ModeProvider>
  );
};

export default Index;
