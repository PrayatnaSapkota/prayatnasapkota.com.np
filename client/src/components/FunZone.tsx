export default function FunZone() {
  return (
    <section id="fun-zone" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <span className="text-[#8B5CF6] text-4xl mr-2">🎥</span> Fun Zone
      </h2>
      
      <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden">
        <div className="p-6">
          <p className="text-lg text-gray-300 mb-6">
            I love sci-fi movies. They fuel my dreamer brain. Some favorites:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Lost in Space */}
            <div className="bg-[#0F172A]/60 rounded-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                {/* Using a gradient background for movies */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold p-4 text-center">
                  LOST IN SPACE
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-space font-semibold text-[#F8FAFC]">Lost in Space</h3>
                </div>
              </div>
            </div>
            
            {/* Another Life */}
            <div className="bg-[#0F172A]/60 rounded-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                {/* Using a gradient background for movies */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold p-4 text-center">
                  ANOTHER LIFE
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-space font-semibold text-[#F8FAFC]">Another Life</h3>
                </div>
              </div>
            </div>
            
            {/* Interstellar */}
            <div className="bg-[#0F172A]/60 rounded-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                {/* Using a gradient background for movies */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-gray-900"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold p-4 text-center">
                  INTERSTELLAR
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-space font-semibold text-[#F8FAFC]">Interstellar</h3>
                  <p className="text-[#8B5CF6] text-sm">(of course!)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-[#334155] text-center">
            <p className="text-gray-300">
              <i className="fas fa-quote-left text-[#8B5CF6]/50 mr-2"></i>
              The cosmos is within us. We are made of star-stuff.
              <i className="fas fa-quote-right text-[#8B5CF6]/50 ml-2"></i>
            </p>
            <p className="text-right text-[#8B5CF6] text-sm mt-2">— Carl Sagan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
