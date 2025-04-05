export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <span className="text-[#8B5CF6] text-4xl mr-2">🛠️</span> Skills & Tools
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Languages Section */}
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-semibold mb-4 text-[#F8FAFC] flex items-center">
              <i className="fas fa-code text-[#8B5CF6] mr-2"></i> Languages
            </h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">Py</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span>Python</span>
                    <span className="text-[#8B5CF6] text-sm">Learning</span>
                  </div>
                  <div className="w-full bg-[#334155]/50 rounded-full h-2">
                    <div className="bg-[#8B5CF6] h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">C</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span>C</span>
                    <span className="text-[#8B5CF6] text-sm">Learning</span>
                  </div>
                  <div className="w-full bg-[#334155]/50 rounded-full h-2">
                    <div className="bg-[#8B5CF6] h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>
              </li>
              
              <li className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">H</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span>HTML & CSS</span>
                    <span className="text-[#8B5CF6] text-sm">Basic</span>
                  </div>
                  <div className="w-full bg-[#334155]/50 rounded-full h-2">
                    <div className="bg-[#8B5CF6] h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-semibold mb-4 text-[#F8FAFC] flex items-center">
              <i className="fas fa-wrench text-[#8B5CF6] mr-2"></i> Tools
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-center p-2 hover:bg-[#0F172A]/40 rounded-md transition-colors">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">VS</span>
                </div>
                <span>VS Code</span>
              </li>
              
              <li className="flex items-center p-2 hover:bg-[#0F172A]/40 rounded-md transition-colors">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center mr-3">
                  <i className="fab fa-github text-white"></i>
                </div>
                <span>GitHub Desktop</span>
              </li>
              
              <li className="flex items-center p-2 hover:bg-[#0F172A]/40 rounded-md transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">F</span>
                </div>
                <span>Fedora Linux</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Soft Skills Section */}
        <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-space font-semibold mb-4 text-[#F8FAFC] flex items-center">
              <i className="fas fa-brain text-[#8B5CF6] mr-2"></i> Soft Skills
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-lightbulb text-[#8B5CF6]"></i>
                </div>
                <span>Curiosity</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-palette text-[#8B5CF6]"></i>
                </div>
                <span>Creativity</span>
              </li>
              
              <li className="flex items-center">
                <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-question text-[#8B5CF6]"></i>
                </div>
                <span>Asking "why?" way too often (and proud of it)</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t border-[#334155]">
              <p className="text-gray-300 italic">
                "Curiosity is the compass that guides my exploration through the vast universe of knowledge."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
