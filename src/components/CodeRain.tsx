
import React, { useEffect, useRef } from 'react';

interface CodeRainProps {
  density?: number;
  speed?: number;
}

const CodeRain = ({ density = 50, speed = 1 }: CodeRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener('resize', resize);
    
    // Extended matrix characters (includes more symbols for hacking feel)
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン><[]{}!@#$%^&*()_+=;:,./\\|~`".split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops: number[] = Array(columns).fill(1);
    
    // Array for character brightness (more variation)
    const brightness: number[] = Array(columns).fill(0.8).map(() => 0.7 + Math.random() * 0.3);
    
    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const character = characters[Math.floor(Math.random() * characters.length)];
        
        // Varying brightness for more realistic matrix effect
        const alpha = brightness[i];
        ctx.fillStyle = `rgba(0, ${Math.floor(255 * alpha)}, ${Math.floor(65 * alpha)}, ${alpha})`;
        ctx.font = `${fontSize}px Roboto Mono`;
        
        // x = column * fontSize, y = drops[column] * fontSize
        ctx.fillText(character, i * fontSize, drops[i] * fontSize);
        
        // Add randomness to the rain effect with density control
        if (drops[i] * fontSize > canvas.height && Math.random() > (0.975 - (density/1000))) {
          drops[i] = 0;
          // Refresh brightness for new drops
          brightness[i] = 0.7 + Math.random() * 0.3;
        }
        
        // Move drop down with variable speed
        drops[i] += speed * (0.8 + Math.random() * 0.4);
      }
    };
    
    const interval = setInterval(draw, 33);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [density, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 opacity-30"
    />
  );
};

export default CodeRain;
