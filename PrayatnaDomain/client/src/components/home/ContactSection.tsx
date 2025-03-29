import { Mail, MessageSquare, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const interests = [
    "Research Collaborations",
    "AI Projects",
    "Open Source",
    "Learning Opportunities"
  ];

  return (
    <section id="contact" className="py-20 relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-pink-500 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">Get In <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Touch</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a question or want to collaborate? Reach out through any of these channels.</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 shadow-xl backdrop-blur-cards hover-scale transition-all duration-300 hover:shadow-purple-600/20 hover:shadow-lg">
              <h3 className="font-space text-2xl mb-6 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <a 
                    href="mailto:mail@prayatnasapkota.com.np" 
                    className="flex items-start hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                      <Mail className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-space text-white">Email</h4>
                      <span className="text-gray-400">
                        mail@prayatnasapkota.com.np
                      </span>
                    </div>
                  </a>
                </div>
                
                <div className="flex items-start">
                  <a 
                    href="https://signal.me/#eu/DQWrcF0nHfsvhdsGXE6NeDuujot4HZirRwiapg7iBilF1pa9IhpLjKKEA15nIHA4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                      <MessageSquare className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-space text-white">Signal</h4>
                      <span className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                        Click to connect on Signal
                      </span>
                    </div>
                  </a>
                </div>
                
                <div className="flex items-start">
                  <a 
                    href="https://github.com/PrayatnaSapkota" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                      <Github className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-space text-white">GitHub</h4>
                      <span className="text-gray-400">
                        github.com/PrayatnaSapkota
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/70 border border-gray-800 rounded-xl p-8 shadow-xl backdrop-blur-cards hover-scale transition-all duration-300 hover:shadow-purple-600/20 hover:shadow-lg">
              <h3 className="font-space text-2xl mb-6 text-white">Let's Collaborate</h3>
              
              <p className="mb-6 text-gray-400">
                I'm always interested in new opportunities, collaborations, and discussions about space, 
                AI, and technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-space text-white mb-2">Interested In:</h4>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <Badge 
                        key={interest}
                        variant="outline" 
                        className="bg-purple-900/20 border-purple-500/30 text-gray-300 px-3 py-1 rounded-full hover:bg-purple-900/40 transition-colors duration-300"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  asChild
                  className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-space font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30"
                >
                  <a href="mailto:mail@prayatnasapkota.com.np">Send a Message</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
