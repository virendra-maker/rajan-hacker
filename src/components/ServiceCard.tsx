
import React from 'react';
import { Shield, Search, Wifi, Database } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: 'shield' | 'search' | 'wifi' | 'database';
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const iconMap = {
    shield: Shield,
    search: Search,
    wifi: Wifi,
    database: Database
  };
  
  const IconComponent = iconMap[icon];
  
  return (
    <div className="glass-card rounded-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-hacker-green/30">
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-lg bg-hacker-green/10 mr-4 border border-hacker-green/30">
          <IconComponent className="text-hacker-green w-6 h-6" />
        </div>
        <h3 className="font-orbitron text-xl">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
