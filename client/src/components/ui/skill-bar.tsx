import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
  icon?: string;
  description?: string;
}

export function SkillBar({ skill, percentage, delay = 0, icon, description }: SkillBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-8 p-4 bg-white/40 backdrop-blur-sm rounded-xl border border-primary/10">
      <div className="flex items-center gap-4 mb-3">
        {icon && (
          <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/60 p-1">
            <img
              src={icon}
              alt={skill}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-semibold text-foreground">{skill}</span>
            <span className="text-sm font-medium text-primary">{percentage}%</span>
          </div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
    </div>
  );
}
