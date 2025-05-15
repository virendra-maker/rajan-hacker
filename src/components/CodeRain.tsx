
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
    
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split('');
    
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array to track the y position of each column
    const drops: number[] = Array(columns).fill(1);
    
    const draw = () => {
      // Semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(10, 14, 23, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px Roboto Mono`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const character = characters[Math.floor(Math.random() * characters.length)];
        
        // x = column * fontSize, y = drops[column] * fontSize
        ctx.fillText(character, i * fontSize, drops[i] * fontSize);
        
        // Add randomness to the rain effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Move drop down
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33 / speed);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [density, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
    />
  );
};

export default CodeRain;
