import { Link } from "wouter";
import { Github, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="font-space font-bold text-2xl text-white">
              Prayatna Sapkota<span className="text-purple-400">.</span>
            </Link>
            <p className="text-gray-500 mt-2">Machine Learning Engineer & Cosmology Enthusiast</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/PrayatnaSapkota" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="mailto:mail@prayatnasapkota.com.np" 
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://signal.me/#eu/DQWrcF0nHfsvhdsGXE6NeDuujot4HZirRwiapg7iBilF1pa9IhpLjKKEA15nIHA4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              aria-label="Signal"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Prayatna Sapkota. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
