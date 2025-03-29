import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
}

export default function SkillBar({ name, level, percentage }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={skillRef} className="skill-item">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-purple-400">{level}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2.5">
        <div 
          className={cn(
            "skill-bar rounded-full h-full",
            "bg-gradient-to-r from-purple-500 to-pink-600",
            "transition-all duration-1500 ease-in-out animate-pulse-glow"
          )}
          style={{ width: isVisible ? `${percentage}%` : "0%" }}
        ></div>
      </div>
    </div>
  );
}
