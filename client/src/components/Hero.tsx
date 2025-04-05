export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-[10%] w-24 h-24 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-[15%] w-32 h-32 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full blur-[80px] opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-[5%] w-16 h-16 bg-[#8B5CF6] rounded-full blur-[60px] opacity-20 animate-ping"></div>
      </div>
      
      {/* Animated constellation lines */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <line x1="200" y1="300" x2="400" y2="250" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="400" y1="250" x2="550" y2="350" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="550" y1="350" x2="700" y2="200" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="700" y1="200" x2="800" y2="400" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="200" y1="300" x2="250" y2="500" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="250" y1="500" x2="400" y2="600" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="400" y1="600" x2="550" y2="700" stroke="#8B5CF6" strokeWidth="1" />
          <line x1="550" y1="700" x2="700" y2="650" stroke="#8B5CF6" strokeWidth="1" />
          
          <circle cx="200" cy="300" r="3" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="400" cy="250" r="2" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="550" cy="350" r="3" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="700" cy="200" r="2" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="800" cy="400" r="3" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="250" cy="500" r="2" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="400" cy="600" r="3" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="550" cy="700" r="2" fill="#8B5CF6" className="animate-pulse" />
          <circle cx="700" cy="650" r="3" fill="#8B5CF6" className="animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-space font-bold leading-tight text-[#F8FAFC]">
              <span className="relative inline-block">
                Exploring
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] to-transparent"></span>
              </span>
              <span className="block mt-3">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] pr-2">Tech</span> 
                & 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] pl-2">AI</span>
              </span>
              <span className="block mt-3 relative">
                <span className="relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]">Cosmic Universe</span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] to-transparent"></span>
                </span>
              </span>
            </h1>
          </div>
          
          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            Welcome to my curiosity-driven journey through code, machine learning, and the vast cosmic mysteries that surround us.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-5">
            <a 
              href="#about" 
              className="group relative px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.4)] overflow-hidden"
            >
              <span className="relative z-10">Discover My Journey</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </a>
            <a 
              href="#projects" 
              className="relative px-8 py-4 bg-transparent border border-[#8B5CF6] text-[#8B5CF6] font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:bg-[#8B5CF6]/10"
            >
              <span>View Projects</span>
            </a>
          </div>
        </div>
        
        <div className="md:w-2/5 relative">
          {/* Animated profile container */}
          <div className="relative">
            {/* Rotating outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#8B5CF6]/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#6366F1]/20 animate-[spin_30s_linear_infinite_reverse]" style={{margin: '-10px'}}></div>
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#8B5CF6]/10 animate-[spin_40s_linear_infinite]" style={{margin: '-20px'}}></div>
            
            {/* Main profile circle */}
            <div className="aspect-square bg-gradient-to-br from-[#334155]/80 to-[#1E293B] rounded-full border border-[#64748B]/30 backdrop-blur-md flex items-center justify-center p-5 animate-[float_6s_ease-in-out_infinite] relative shadow-[0_0_25px_rgba(139,92,246,0.2)]">
              <div className="aspect-square w-[90%] rounded-full overflow-hidden border-4 border-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.3)] relative z-10">
                {/* Profile image or initials */}
                <div className="w-full h-full bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex items-center justify-center relative">
                  <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]">PS</span>
                  
                  {/* Inner decorative elements */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-4 h-4 bg-[#6366F1] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#6366F1] rounded-full animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-70 blur-sm"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#8B5CF6] rounded-full animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-50 blur-sm"></div>
          <div className="absolute top-1/2 -right-10 w-8 h-8 bg-[#6366F1] rounded-full animate-[ping_5s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-40 blur-sm"></div>
        </div>
      </div>
    </section>
  );
}
