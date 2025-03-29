import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#missions", label: "Missions" },
  { href: "#education", label: "Education" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-filter backdrop-blur-md border-b border-gray-800 transition-colors duration-300",
      isScrolled && "shadow-md shadow-purple-900/20"
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="#home" className="font-space font-bold text-2xl text-white">
            Prayatna Sapkota<span className="text-purple-400">.</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="font-space hover:text-purple-400 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <Button 
            onClick={toggleMenu} 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "md:hidden bg-gray-900/90 border-t border-gray-800 transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-space py-2 hover:text-purple-400 transition-colors duration-300"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
