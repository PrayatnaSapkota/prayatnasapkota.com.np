export default function Achievements() {
  return (
    <section id="achievements" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <span className="text-[#8B5CF6] text-4xl mr-2">🏆</span> Achievements & Recognition
      </h2>
      
      <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-48 h-48 mx-auto bg-[#0F172A] rounded-full flex items-center justify-center">
                <i className="fas fa-question text-7xl text-[#8B5CF6] opacity-70"></i>
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-[#8B5CF6] rounded-full animate-pulse opacity-30"></div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <p className="text-lg text-gray-300 mb-4">
              Till now, I haven't won awards or big competitions.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              But hey —
            </p>
            <p className="text-xl font-space font-medium text-[#F8FAFC]">
              Being born and growing into someone who questions everything? That's a pretty badass achievement itself.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#projects" 
                className="px-5 py-2 bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white font-medium rounded-md transition-colors shadow-md text-sm"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-5 py-2 bg-transparent border border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6]/10 font-medium rounded-md transition-colors text-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
