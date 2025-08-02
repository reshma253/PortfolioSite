import { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
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
