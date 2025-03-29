import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillsSection from "@/components/home/SkillsSection";
import MissionsSection from "@/components/home/MissionsSection";
import EducationTimelineSection from "@/components/home/EducationTimelineSection";
import SpaceGallerySection from "@/components/home/SpaceGallerySection";
import ContactSection from "@/components/home/ContactSection";
import StarsBackground from "@/components/ui/stars-background";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    
    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn?.classList.remove("scale-0");
        scrollToTopBtn?.classList.add("scale-100");
      } else {
        scrollToTopBtn?.classList.remove("scale-100");
        scrollToTopBtn?.classList.add("scale-0");
      }
      
      // Handle section animations on scroll
      const fadeInSections = document.querySelectorAll('.fade-in-section');
      fadeInSections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('is-visible');
        }
      });
    };
    
    // Add smooth scrolling to all anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        const section = document.querySelector(href as string);
        if (section) {
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without reloading page
          window.history.pushState({}, '', href);
        }
      }
    };
    
    // Add fade-in-section class to all main sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
      section.classList.add('fade-in-section');
    });
    
    // Trigger initial scroll check for sections already in view
    setTimeout(() => handleScroll(), 100);
    
    window.addEventListener("scroll", handleScroll);
    document.body.addEventListener('click', handleSmoothScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen bg-black text-gray-200 overflow-x-hidden font-inter">
      <StarsBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <MissionsSection />
        <EducationTimelineSection />
        <SpaceGallerySection />
        <ContactSection />
      </main>
      <Footer />
      
      <Button
        id="scroll-to-top"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 bg-purple-600/80 hover:bg-purple-600 text-white w-12 h-12",
          "rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 scale-0 z-50"
        )}
        size="icon"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  );
}
