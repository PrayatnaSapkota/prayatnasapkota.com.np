import { Brain } from "lucide-react";

export default function AIProjectsSection() {
  return (
    <section id="ai-projects" className="py-20 bg-space-blue-light/50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/3 bottom-1/4 w-96 h-96 bg-nebula-teal opacity-5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">AI <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Projects created fully using artificial intelligence technologies.</p>
          <div className="w-16 h-1 bg-nebula-teal mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-space-blue border border-gray-800 rounded-xl p-8 text-center backdrop-blur-cards">
            <div className="w-20 h-20 bg-cosmic-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="text-nebula-teal text-3xl" />
            </div>
            
            <h3 className="font-space text-2xl mb-4 text-white">Coming Soon!</h3>
            <p className="text-gray-400 mb-6">
              I'm currently working on exciting AI projects that will be showcased here.
              Check back later to see what I've been creating with artificial intelligence.
            </p>
            
            <div className="inline-block relative overflow-hidden">
              <div className="h-1 w-48 bg-gray-800 rounded-full mx-auto">
                <div className="h-full bg-gradient-to-r from-cosmic-purple to-nebula-teal animate-pulse" style={{ width: "30%" }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Projects in development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
