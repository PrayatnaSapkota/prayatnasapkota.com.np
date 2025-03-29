import { Button } from "@/components/ui/button";
import { UserCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent opacity-30"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-pink-500/20 rounded-full animate-pulse-glow blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-600/20 rounded-full animate-pulse-glow blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="font-space font-bold text-4xl md:text-6xl mb-4">
              Hello, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Prayatna Sapkota</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-300">
              Machine Learning Engineer & Cosmology Enthusiast
            </p>
            <p className="mb-8 text-gray-400 max-w-lg">
              Exploring the intersection of artificial intelligence and the universe, 
              one question and experiment at a time.
            </p>
            <div className="flex space-x-4">
              <Button 
                asChild
                className="bg-purple-600 hover:bg-purple-700 text-white font-space font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30"
              >
                <a href="#about">Discover More</a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border border-pink-500 text-pink-400 hover:bg-pink-800/10 font-space font-medium transition-all duration-300"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 opacity-20 animate-pulse-glow"></div>
              <div className="absolute w-full h-full flex items-center justify-center">
                <div className={cn(
                  "w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-500/30 flex items-center justify-center bg-black/30 backdrop-blur-sm",
                  "animate-float"
                )}>
                  <div className="text-center">
                    <UserCircle2 className="h-16 w-16 md:h-20 md:w-20 text-white mb-2 mx-auto animate-pulse" />
                    <div className="font-space font-medium text-lg text-purple-400">Machine Learning</div>
                    <div className="font-space font-medium text-lg text-pink-400">Cosmology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-purple-400 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
