import { Satellite, Rocket, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TechStack {
  name: string;
}

export interface Mission {
  title: string;
  subtitle: string;
  description: string;
  status: "In Progress" | "Planned";
  icon: "satellite" | "rocket" | "planet";
  techStack: TechStack[];
}

interface MissionCardProps {
  mission: Mission;
}

export default function MissionCard({ mission }: MissionCardProps) {
  const getStatusBadgeClass = (status: string) => {
    return status === "In Progress" 
      ? "bg-purple-500/90 text-white" 
      : "bg-gray-600/90 text-white";
  };

  const renderIcon = () => {
    switch (mission.icon) {
      case "satellite":
        return <Satellite className="text-white text-6xl opacity-40 animate-float" />;
      case "rocket":
        return <Rocket className="text-white text-6xl opacity-40 animate-float" />;
      case "planet":
        return <Globe className="text-white text-6xl opacity-40 animate-rotate-slow" />;
      default:
        return <Satellite className="text-white text-6xl opacity-40 animate-float" />;
    }
  };

  return (
    <div className="mission-card bg-gray-900/70 border border-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-lg hover:shadow-purple-600/30">
      <div className="h-48 bg-gradient-to-br from-purple-600/50 to-pink-600/40 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {renderIcon()}
        </div>
        <div className={cn(
          "absolute top-4 left-4 font-space font-medium px-3 py-1 rounded-full text-sm",
          getStatusBadgeClass(mission.status)
        )}>
          {mission.status}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-space text-xl text-white mb-2">{mission.title}</h3>
        <h4 className="text-purple-400 font-space mb-3">{mission.subtitle}</h4>
        
        <p className="text-gray-400 mb-4">{mission.description}</p>
        
        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-1">Tech Stack:</div>
          <div className="flex flex-wrap gap-2">
            {mission.techStack.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="bg-gray-900/80 border-purple-600/30 px-2 py-1 rounded text-xs hover:bg-purple-900/20 transition-colors duration-300"
              >
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-purple-400 text-sm font-space">Planned</span>
        </div>
      </div>
    </div>
  );
}
