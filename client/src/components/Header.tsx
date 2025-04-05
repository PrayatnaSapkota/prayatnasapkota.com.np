import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop <= 300) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
      
      // Update header style on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0F172A]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1]" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#6366F1]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-2xl font-space font-bold text-[#F8FAFC] relative flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mr-1 text-3xl">P</span>rayatna 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] mx-1 text-3xl">S</span>apkota
              </div>
            </div>
          </a>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-1 items-center">
              {[
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'nasa-apod', label: 'NASA APOD' },
                { id: 'skills', label: 'Skills' },
                { id: 'why-zone', label: 'Why Zone' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 group hover:bg-[#334155]/30 ${activeSection === item.id ? 'text-[#F8FAFC]' : 'text-gray-400'}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[#F8FAFC]"
            aria-label="Toggle menu"
          >
            <div className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></div>
            <div className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#0F172A]/95 backdrop-blur-lg z-40 pt-20 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
      >
        <ul className="p-6 space-y-4">
          {[
            { id: 'about', label: 'About', icon: '👤' },
            { id: 'projects', label: 'Projects', icon: '🛠️' },
            { id: 'nasa-apod', label: 'NASA APOD', icon: '🪐' },
            { id: 'skills', label: 'Skills', icon: '📊' },
            { id: 'why-zone', label: 'Why Zone', icon: '🤔' },
            { id: 'contact', label: 'Contact', icon: '✉️' }
          ].map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={`flex items-center p-3 rounded-xl transition-all ${activeSection === item.id ? 'bg-[#334155]/40 text-white' : 'text-gray-400 hover:bg-[#334155]/20 hover:text-white'}`}
                onClick={closeMobileMenu}
              >
                <span className="w-8 h-8 flex items-center justify-center mr-3 text-lg">{item.icon}</span>
                <span className="text-lg">{item.label}</span>
                {activeSection === item.id && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
