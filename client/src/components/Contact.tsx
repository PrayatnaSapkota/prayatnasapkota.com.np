export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-20">
      <h2 className="text-3xl font-space font-bold mb-8 text-[#F8FAFC] flex items-center">
        <span className="text-[#8B5CF6] text-4xl mr-2">💬</span> Contact & Socials
      </h2>
      
      <div className="bg-[#334155]/30 border border-[#64748B]/30 rounded-lg overflow-hidden max-w-2xl mx-auto">
        <div className="p-6">
          <h3 className="text-xl font-space font-semibold mb-6 text-[#F8FAFC]">Get In Touch</h3>
          
          <div className="space-y-4">
            <a 
              href="https://signal.me/#eu/DQWrcF0nHfsvhdsGXE6NeDuujot4HZirRwiapg7iBilF1pa9IhpLjKKEA15nIHA4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-[#0F172A]/40 rounded-md hover:bg-[#0F172A]/60 transition-colors"
            >
              <div className="w-10 h-10 bg-[#0F172A] rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-comment text-[#8B5CF6]"></i>
              </div>
              <div>
                <h4 className="font-medium text-[#F8FAFC]">Signal</h4>
                <p className="text-gray-400 text-sm">Chat with Me</p>
              </div>
              <i className="fas fa-external-link-alt ml-auto text-[#8B5CF6] text-sm"></i>
            </a>
            
            <a 
              href="mailto:mail@prayatnasapkota.com.np" 
              className="flex items-center p-3 bg-[#0F172A]/40 rounded-md hover:bg-[#0F172A]/60 transition-colors"
            >
              <div className="w-10 h-10 bg-[#0F172A] rounded-full flex items-center justify-center mr-4">
                <i className="fas fa-envelope text-[#8B5CF6]"></i>
              </div>
              <div>
                <h4 className="font-medium text-[#F8FAFC]">Gmail</h4>
                <p className="text-gray-400 text-sm">mail@prayatnasapkota.com.np</p>
              </div>
              <i className="fas fa-external-link-alt ml-auto text-[#8B5CF6] text-sm"></i>
            </a>
            
            <a 
              href="https://github.com/PrayatnaSapkota" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-[#0F172A]/40 rounded-md hover:bg-[#0F172A]/60 transition-colors"
            >
              <div className="w-10 h-10 bg-[#0F172A] rounded-full flex items-center justify-center mr-4">
                <i className="fab fa-github text-[#8B5CF6]"></i>
              </div>
              <div>
                <h4 className="font-medium text-[#F8FAFC]">GitHub</h4>
                <p className="text-gray-400 text-sm">github.com/PrayatnaSapkota</p>
              </div>
              <i className="fas fa-external-link-alt ml-auto text-[#8B5CF6] text-sm"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
