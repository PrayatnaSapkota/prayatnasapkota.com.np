import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import NasaApod from "@/components/NasaApod";
import Skills from "@/components/Skills";
import WhyZone from "@/components/WhyZone";
import Achievements from "@/components/Achievements";
import FunZone from "@/components/FunZone";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [stars, setStars] = useState<{left: string, top: string, size: string, delay: string}[]>([]);

  useEffect(() => {
    // Create stars background
    const createStars = () => {
      const count = window.innerWidth < 768 ? 50 : 100;
      const newStars = [];
      
      for (let i = 0; i < count; i++) {
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        
        // Random position
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        
        // Random animation delay
        const delay = `${Math.random() * 4}s`;
        
        newStars.push({ left, top, size: `${size}px`, delay });
      }
      
      setStars(newStars);
    };

    createStars();
    
    const handleResize = () => {
      createStars();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-gray-200 font-sans relative">
      {/* Star background */}
      <div className="fixed inset-0 z-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-80 animate-[twinkle_4s_infinite]"
            style={{
              width: star.size,
              height: star.size,
              left: star.left,
              top: star.top,
              animationDelay: star.delay
            }}
          />
        ))}
      </div>

      <Header />
      
      <main className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <Hero />
        <About />
        <Projects />
        <NasaApod />
        <Skills />
        <WhyZone />
        <Achievements />
        <FunZone />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
