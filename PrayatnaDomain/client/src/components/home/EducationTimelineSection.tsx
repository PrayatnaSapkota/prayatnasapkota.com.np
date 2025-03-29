import { Scroll, GraduationCap, Calendar, Award } from "lucide-react";
import { cn } from "@/lib/utils";

// Prayatna's actual education history
const educationHistory = [
  {
    id: 1,
    institution: "High School",
    degree: "Grade 11",
    period: "2025 - Present",
    description: "Currently studying in high school. In Nepal, 11th and 12th grades comprise high school education.",
    current: true
  },
  {
    id: 2,
    institution: "Secondary Education Examination (SEE)",
    degree: "10th Grade",
    period: "2024",
    description: "Successfully completed SEE, the Nepalese secondary education examination.",
    current: false
  },
  {
    id: 3,
    institution: "Nepal CTEVT",
    degree: "Mobile Repair Level 1 Certification",
    period: "2024",
    description: "Obtained professional certification in mobile device repair and maintenance.",
    current: false
  }
];

export default function EducationTimelineSection() {
  return (
    <section id="education" className="py-20 relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/3 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute right-10 bottom-10 w-64 h-64 bg-fuchsia-500 opacity-15 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">Education <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Timeline</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">My academic journey and educational background.</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-purple-800/40"></div>
            
            {/* Timeline events */}
            {educationHistory.map((item, index) => (
              <div 
                key={item.id}
                className={cn(
                  "relative flex flex-col md:flex-row mb-12 items-center md:items-start",
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start md:text-right"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full z-10 animate-pulse-glow"></div>
                
                {/* Content */}
                <div className={cn(
                  "w-full md:w-5/12 bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow-xl mt-6 md:mt-0",
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12",
                  "hover-scale transition-all duration-300 hover:shadow-purple-600/20 hover:shadow-lg"
                )}>
                  <div className="flex items-center mb-3">
                    <GraduationCap className={cn(
                      "text-purple-400 mr-3",
                      item.current && "animate-float"
                    )} />
                    <h3 className="font-space text-xl text-white">{item.degree}</h3>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Calendar className="text-purple-400 mr-3 h-4 w-4" />
                    <span className="text-gray-400 text-sm">{item.period}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Award className="text-purple-400 mr-3 h-4 w-4" />
                    <span className="text-white">{item.institution}</span>
                  </div>
                  
                  <p className="text-gray-400">{item.description}</p>
                  
                  {item.current && (
                    <div className="mt-4 bg-purple-900/30 border border-purple-500/30 rounded-lg p-3">
                      <p className="text-sm text-gray-300 italic">
                        Currently studying in high school.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm italic">
              <Scroll className="inline mr-2 h-4 w-4 text-purple-400" />
              Education is the gateway to endless possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}