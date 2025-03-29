import { Code, Brain, Atom } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SkillBar from "@/components/ui/skill-bar";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "Python (Learning)", level: "Beginner", percentage: 30 },
    { name: "C (Learning)", level: "Beginner", percentage: 30 },
    { name: "HTML", level: "Advanced", percentage: 85 },
    { name: "CSS (Basic)", level: "Basic", percentage: 40 },
  ];

  const aiSkills = [
    { name: "TensorFlow (Exploring)", level: "Beginner", percentage: 35 },
    { name: "OpenCV (Exploring)", level: "Beginner", percentage: 30 },
  ];

  const physicsInterests = [
    "Problem Solving",
    "Theoretical Physics",
    "Cosmology",
    "Mathematical Modeling",
  ];

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-600 opacity-15 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-fuchsia-500 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">Technical <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span></h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Programming Skills */}
          <div className="bg-gray-900/70 backdrop-blur-cards p-8 rounded-xl border border-gray-800 shadow-xl hover-scale transition-all duration-300 hover:shadow-purple-600/20 hover:shadow-lg">
            <h3 className="font-space text-2xl mb-6 text-white flex items-center">
              <Code className="text-purple-400 mr-3" /> Programming
            </h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
          
          {/* AI & ML Skills */}
          <div className="bg-gray-900/70 backdrop-blur-cards p-8 rounded-xl border border-gray-800 shadow-xl hover-scale transition-all duration-300 hover:shadow-purple-600/20 hover:shadow-lg">
            <h3 className="font-space text-2xl mb-6 text-white flex items-center">
              <Brain className="text-purple-400 mr-3" /> AI & Machine Learning
            </h3>
            
            <div className="space-y-6">
              {aiSkills.map((skill) => (
                <SkillBar 
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  percentage={skill.percentage}
                />
              ))}
            </div>
            
            <h3 className="font-space text-2xl mt-10 mb-6 text-white flex items-center">
              <Atom className="text-purple-400 mr-3 animate-rotate-slow" /> Physics & Mathematics
            </h3>
            
            <div>
              <p className="mb-4">Passionate about physics and cosmology, with a focus on improving problem-solving skills.</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {physicsInterests.map((interest) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
