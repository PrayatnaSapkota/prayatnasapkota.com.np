import { RocketIcon, MicroscopeIcon, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-purple-600 opacity-15 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-fuchsia-600 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Me</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="bg-gray-900/70 border-gray-800 shadow-xl backdrop-blur-cards transform transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-600/20 hover:shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-space text-2xl mb-4 text-white">Who I Am</h3>
              <p className="mb-4">
                I'm Prayatna, a passionate learner and aspiring Machine Learning Engineer with a deep interest in cosmology and AI. 
              </p>
              <p className="mb-4">
                I love questioning everything, experimenting, and working on projects that push my understanding of the universe and technology.
              </p>
              <p>
                My journey bridges the gap between computational intelligence and the cosmic mysteries that have fascinated humanity for centuries.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card className="bg-gray-900/70 border-gray-800 shadow-xl backdrop-blur-cards transform transition-all duration-300 hover:translate-x-2 hover:shadow-purple-600/20 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <RocketIcon className="text-purple-400 text-2xl mr-4 animate-float" />
                  <h3 className="font-space text-xl text-white">Aspiration</h3>
                </div>
                <p>Building AI systems that can help us better understand and explore space.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/70 border-gray-800 shadow-xl backdrop-blur-cards transform transition-all duration-300 hover:translate-x-2 hover:shadow-purple-600/20 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MicroscopeIcon className="text-purple-400 text-2xl mr-4 animate-float" />
                  <h3 className="font-space text-xl text-white">Approach</h3>
                </div>
                <p>I embrace curiosity, question assumptions, and learn through experimentation.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/70 border-gray-800 shadow-xl backdrop-blur-cards transform transition-all duration-300 hover:translate-x-2 hover:shadow-purple-600/20 hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-purple-400 text-2xl mr-4 animate-float" />
                  <h3 className="font-space text-xl text-white">Interests</h3>
                </div>
                <p>Machine learning, cosmology, physics, and the intersection of AI with space exploration.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
