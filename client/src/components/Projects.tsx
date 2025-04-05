export default function Projects() {
  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <span className="text-[#8B5CF6] text-4xl mr-2">🛰️</span> Projects & Missions
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mission Alpha */}
        <div className="bg-gradient-to-br from-[#334155]/80 to-[#1E293B]/90 border border-[#64748B]/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transform hover:-translate-y-1">
          <div className="p-8">
            <div className="w-14 h-14 bg-[#0F172A]/70 rounded-xl flex items-center justify-center mb-4 border border-[#8B5CF6]/30">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-2xl font-space font-semibold mb-4 text-[#F8FAFC]">Mission Alpha</h3>
            <p className="text-gray-300 mb-4">AI model to classify space objects (planets, stars, galaxies).</p>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">AI</span>
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">Python</span>
              </div>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mission Beta */}
        <div className="bg-gradient-to-br from-[#334155]/80 to-[#1E293B]/90 border border-[#64748B]/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transform hover:-translate-y-1">
          <div className="p-8">
            <div className="w-14 h-14 bg-[#0F172A]/70 rounded-xl flex items-center justify-center mb-4 border border-[#8B5CF6]/30">
              <span className="text-2xl">🔭</span>
            </div>
            <h3 className="text-2xl font-space font-semibold mb-4 text-[#F8FAFC]">AstroVision</h3>
            <p className="text-gray-300 mb-4">AI-based astronomy assistant that identifies celestial objects.</p>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">AI</span>
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">Astronomy</span>
              </div>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Mission Gamma */}
        <div className="bg-gradient-to-br from-[#334155]/80 to-[#1E293B]/90 border border-[#64748B]/30 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] transform hover:-translate-y-1">
          <div className="p-8">
            <div className="w-14 h-14 bg-[#0F172A]/70 rounded-xl flex items-center justify-center mb-4 border border-[#8B5CF6]/30">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-2xl font-space font-semibold mb-4 text-[#F8FAFC]">Cosmic Weather</h3>
            <p className="text-gray-300 mb-4">Space weather prediction AI that forecasts solar activity.</p>
            
            <div className="mt-6 flex justify-between items-center">
              <div className="flex space-x-2">
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">AI</span>
                <span className="px-3 py-1.5 bg-[#0F172A]/70 text-xs rounded-lg text-[#8B5CF6] font-medium">Weather</span>
              </div>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition-all duration-300">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
