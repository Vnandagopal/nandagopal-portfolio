import AnnouncementBar from "./components/home/AnnouncementBar";
import Navbar from "./components/navigation/Navbar";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ExperienceSection from "./components/home/ExperienceSection";
import SkillsSection from "./components/home/SkillSection";
import EducationSection from "./components/home/EducationSection";
import ProjectsSection from "./components/home/ProjectsSection";
import PraiseSection from "./components/home/PraiseSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/common/Footer";

import BackgroundDecorations from "./components/common/BackgroundDecorations";

import "./App.css";

function App() {
  return (
    <div className="portfolio-app">
      <BackgroundDecorations />

      <AnnouncementBar />
      <Navbar />

      <div className="home-canvas">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <PraiseSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;