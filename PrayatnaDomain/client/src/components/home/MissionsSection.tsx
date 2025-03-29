import MissionCard from "@/components/ui/mission-card";
import { missions } from "@/lib/constants";

export default function MissionsSection() {
  return (
    <section id="missions" className="py-20 relative bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-purple-600 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-fuchsia-500 opacity-10 rounded-full filter blur-3xl animate-pulse-glow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">My <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Missions</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Projects that I'm working on or planning to develop in the near future.</p>
          <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission) => (
            <MissionCard key={mission.title} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
}
