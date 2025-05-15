
import React from 'react';
import { ExternalLink, Github, Lock, Globe, Shield } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  repoUrl?: string;
  demoUrl?: string;
  icon?: 'shield' | 'globe' | 'lock';
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  repoUrl,
  demoUrl,
  icon = 'shield'
}: ProjectCardProps) => {
  const iconMap = {
    shield: Shield,
    globe: Globe,
    lock: Lock
  };
  
  const IconComponent = iconMap[icon];

  return (
    <div className="glass-card rounded-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:border-hacker-green/30">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-3 gap-2">
          <IconComponent size={20} className="text-hacker-green" />
          <h3 className="text-xl font-orbitron text-white">{title}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs bg-hacker-green/10 text-hacker-green rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-hacker-green transition-colors"
            >
              <Github size={16} />
              <span>Repo</span>
            </a>
          )}
          
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-hacker-green transition-colors"
            >
              <ExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
