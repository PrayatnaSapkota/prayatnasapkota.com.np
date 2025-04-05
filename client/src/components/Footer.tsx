export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#334155]/30 mt-12">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-space font-bold text-[#F8FAFC]">
              <span className="text-[#8B5CF6]">P</span>rayatna <span className="text-[#8B5CF6]">S</span>apkota
            </h3>
            <p className="text-gray-400 mt-1">Exploring Tech, AI & the Cosmic Universe</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/PrayatnaSapkota" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8B5CF6] transition-colors"
            >
              <i className="fab fa-github text-white"></i>
            </a>
            <a 
              href="mailto:mail@prayatnasapkota.com.np" 
              className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8B5CF6] transition-colors"
            >
              <i className="fas fa-envelope text-white"></i>
            </a>
            <a 
              href="#why-zone" 
              className="w-10 h-10 rounded-full bg-[#334155] flex items-center justify-center hover:bg-[#8B5CF6] transition-colors"
            >
              <i className="fas fa-rss text-white"></i>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[#334155]/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Prayatna Sapkota. All rights reserved.
          </p>
          
          <p className="text-gray-400 text-sm">
            <span className="text-[#8B5CF6]">★</span> Hosted on GitHub Pages with Cloudflare CDN
          </p>
        </div>
      </div>
    </footer>
  );
}
