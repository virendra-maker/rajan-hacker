
import { useState, useEffect } from 'react';

interface AnimatedSkillBarProps {
  name: string;
  percentage: number;
}

const AnimatedSkillBar = ({ name, percentage }: AnimatedSkillBarProps) => {
  const [width, setWidth] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [name]);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setWidth(percentage);
      }, 200);
    }
  }, [isVisible, percentage]);

  return (
    <div 
      id={`skill-${name.replace(/\s+/g, '-')}`} 
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="terminal-text text-sm">{name}</span>
        <span className="text-sm text-hacker-green">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded">
        <div 
          className="h-full bg-hacker-green rounded transition-all duration-1000 ease-out border-glow"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
