export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-20 relative">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-[#6366F1]/10 to-transparent rounded-full blur-3xl"></div>
    
      <div className="relative">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
              <div className="relative mr-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] rounded-lg rotate-45 absolute"></div>
                <span className="relative z-10 text-white flex items-center justify-center w-10 h-10">✦</span>
              </div>
              About Me
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed bg-gradient-to-br from-[#334155]/50 to-[#1E293B]/50 p-6 rounded-xl border border-[#64748B]/30 backdrop-blur-sm">
              <p>
                Hi, I'm <span className="font-semibold text-white">Prayatna Sapkota</span>, a passionate computer science student and aspiring Machine Learning engineer from Nepal. I'm deeply curious about AI, cosmology, and space, and I love using tech to explore the universe.
              </p>
              <p>
                I enjoy coding, problem-solving, and building things that make sense (and ask questions). I'm currently learning Python and C, and I have a basic but enough understanding of HTML & CSS to build my own world on the web.
              </p>
            </div>
            
            <h3 className="text-2xl font-space font-semibold mt-12 mb-6 text-[#F8FAFC] flex items-center">
              <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-[#8B5CF6]">🛣️</span>
              </div>
              My Journey & Goals
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-[#334155]/40 to-[#1E293B]/40 p-5 rounded-xl border border-[#64748B]/20 hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <span className="text-[#8B5CF6]">📚</span>
                  </div>
                  <h4 className="font-medium text-white ml-3">Currently Studying</h4>
                </div>
                <p className="text-gray-300">Physics, Computer Science, Chemistry, Math, English, and Nepali (Grade 11).</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#334155]/40 to-[#1E293B]/40 p-5 rounded-xl border border-[#64748B]/20 hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <span className="text-[#8B5CF6]">🚀</span>
                  </div>
                  <h4 className="font-medium text-white ml-3">Dream</h4>
                </div>
                <p className="text-gray-300">To become a Machine Learning Engineer and contribute to AI-driven space research.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#334155]/40 to-[#1E293B]/40 p-5 rounded-xl border border-[#64748B]/20 hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <span className="text-[#8B5CF6]">💡</span>
                  </div>
                  <h4 className="font-medium text-white ml-3">Interests</h4>
                </div>
                <p className="text-gray-300">AI, Space, Cosmology, Physics, Problem-Solving.</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#334155]/40 to-[#1E293B]/40 p-5 rounded-xl border border-[#64748B]/20 hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] group">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#8B5CF6]/10 rounded-full flex items-center justify-center group-hover:bg-[#8B5CF6]/20 transition-colors duration-300">
                    <span className="text-[#8B5CF6]">🌍</span>
                  </div>
                  <h4 className="font-medium text-white ml-3">Future Plans</h4>
                </div>
                <p className="text-gray-300">Travel the world, explore the unknown, and maybe die in space someday!</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-gradient-to-br from-[#334155]/40 to-[#1E293B]/40 p-6 rounded-xl border border-[#64748B]/30 backdrop-blur-sm shadow-[0_0_25px_rgba(15,23,42,0.3)]">
              <h3 className="text-xl font-space font-semibold mb-6 text-[#F8FAFC] flex items-center">
                <div className="w-8 h-8 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-[#8B5CF6]">🔍</span>
                </div>
                Quick Facts
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-center p-3 rounded-lg hover:bg-[#0F172A]/30 transition-colors">
                  <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center mr-4 border border-[#64748B]/30">
                    <span className="text-[#8B5CF6]">📍</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Location</span>
                    <span className="font-medium text-[#F8FAFC]">Nepal</span>
                  </div>
                </li>
                
                <li className="flex items-center p-3 rounded-lg hover:bg-[#0F172A]/30 transition-colors">
                  <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center mr-4 border border-[#64748B]/30">
                    <span className="text-[#8B5CF6]">🎓</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Education</span>
                    <span className="font-medium text-[#F8FAFC]">Grade 11 Student</span>
                  </div>
                </li>
                
                <li className="flex items-center p-3 rounded-lg hover:bg-[#0F172A]/30 transition-colors">
                  <div className="w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center mr-4 border border-[#64748B]/30">
                    <span className="text-[#8B5CF6]">🔬</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm block">Focus Areas</span>
                    <span className="font-medium text-[#F8FAFC]">AI, Space, Cosmology</span>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#64748B]/30">
                <h4 className="text-lg font-medium mb-5 text-[#F8FAFC] flex items-center">
                  <div className="w-7 h-7 bg-[#8B5CF6]/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#8B5CF6] text-sm">🧠</span>
                  </div>
                  Learning Journey
                </h4>
                
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">Python</span>
                      <span className="text-[#8B5CF6] text-sm bg-[#8B5CF6]/10 px-2 py-1 rounded-full">Learning</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2.5 p-0.5">
                      <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] h-1.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">C</span>
                      <span className="text-[#8B5CF6] text-sm bg-[#8B5CF6]/10 px-2 py-1 rounded-full">Learning</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2.5 p-0.5">
                      <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] h-1.5 rounded-full" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white">HTML & CSS</span>
                      <span className="text-[#8B5CF6] text-sm bg-[#8B5CF6]/10 px-2 py-1 rounded-full">Basic</span>
                    </div>
                    <div className="w-full bg-[#0F172A] rounded-full h-2.5 p-0.5">
                      <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] h-1.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
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
