
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hacker-dark border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-hacker-green font-orbitron font-bold text-xl text-glow">
              R<span className="text-white">.</span>HACKER
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              Powered by Rajan Hacker | <span className="text-hacker-green">Ethical Hacking for a Safer Tomorrow</span>
            </p>
            <div className="mt-2 font-roboto-mono text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} | All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
