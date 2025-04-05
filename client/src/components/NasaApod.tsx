import { useState, useEffect } from "react";

// Example APOD data for demonstration
const placeholderApod = {
  date: "2023-04-05",
  title: "Cosmic Wonder: M31 Andromeda Galaxy",
  explanation: "The Andromeda Galaxy (M31) is the closest large galaxy to our Milky Way and one of the most spectacular objects in the night sky. At 2.5 million light-years away, it's the most distant object visible to the naked eye. This spiral galaxy contains approximately one trillion stars, roughly twice the number in our own galaxy. Astronomers believe that in approximately 4.5 billion years, the Andromeda Galaxy and the Milky Way will collide, eventually merging into a single new galaxy.",
  url: "https://apod.nasa.gov/apod/image/2304/M31_JWST_Webb.jpg",
  hdurl: "https://apod.nasa.gov/apod/image/2304/M31_JWST_Webb_3000.jpg"
};

export default function NasaApod() {
  // Use state to simulate loading for a brief moment
  const [isLoading, setIsLoading] = useState(true);
  
  // Simulate loading effect - disappears after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="nasa-apod" className="py-16 scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <div className="relative mr-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-lg rotate-45 absolute"></div>
          <span className="relative z-10 text-white flex items-center justify-center w-10 h-10">🪐</span>
        </div>
        NASA Astronomy Picture of the Day
      </h2>
      
      <div className="bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 border border-[#64748B]/30 rounded-xl overflow-hidden backdrop-blur-sm relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#8B5CF6]/5 to-transparent rounded-full blur-3xl"></div>
        
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div id="apod-container" className="bg-[#0F172A]/70 rounded-xl overflow-hidden aspect-video relative shadow-lg border border-[#334155]">
                {isLoading ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#8B5CF6]"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#8B5CF6] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={placeholderApod.url} 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105" 
                    alt={placeholderApod.title}
                  />
                )}
                
                {/* Image overlay with gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0F172A] to-transparent opacity-70"></div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <h3 className="text-xl font-space font-semibold text-[#F8FAFC]">
                  {isLoading ? "Loading today's cosmic wonder..." : placeholderApod.title}
                </h3>
                <span className="text-gray-400 text-sm bg-[#0F172A]/50 px-3 py-1 rounded-full">
                  {placeholderApod.date}
                </span>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-[#1E293B]/70 to-[#0F172A]/70 rounded-xl p-6 backdrop-blur-sm h-full border border-[#334155]/50 shadow-lg">
                <h4 className="text-lg font-space font-medium mb-4 text-[#F8FAFC] flex items-center">
                  <span className="w-6 h-6 flex items-center justify-center bg-[#8B5CF6]/20 rounded-full mr-2 text-sm">ℹ️</span>
                  About APOD
                </h4>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    I'm a space lover, so I've integrated NASA's APOD into my site. It showcases the latest cosmic photos and explanations.
                  </p>
                  
                  <div className="bg-[#0F172A]/50 rounded-lg p-4 border border-[#334155]/70">
                    <p className="text-gray-300 text-sm max-h-60 overflow-y-auto pr-2 leading-relaxed">
                      {isLoading ? "Loading explanation..." : placeholderApod.explanation}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#334155]">
                  <div className="flex items-center justify-end">
                    {!isLoading && (
                      <a 
                        href={placeholderApod.hdurl} 
                        className="px-4 py-2 bg-[#8B5CF6]/20 hover:bg-[#8B5CF6]/30 text-[#8B5CF6] rounded-lg transition-colors flex items-center text-sm" 
                        target="_blank"
                      >
                        <i className="fas fa-download mr-2"></i> View HD Image
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
