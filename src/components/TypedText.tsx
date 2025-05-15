
import React, { useState, useEffect } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
  loop?: boolean;
  delay?: number;
}

const TypedText = ({ 
  text, 
  speed = 50, 
  className = "", 
  loop = false,
  delay = 1000
}: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        if (loop) {
          setIsDeleting(true);
        }
      }, delay);
      return () => clearTimeout(timer);
    }
    
    if (currentIndex <= text.length && !isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
        
        if (currentIndex === text.length && loop) {
          setIsPaused(true);
        }
      }, speed);
    } else if (isDeleting && currentIndex >= 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex));
        setCurrentIndex(currentIndex - 1);
        
        if (currentIndex === 0) {
          setIsDeleting(false);
        }
      }, speed / 2);
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, isDeleting, isPaused, loop, delay]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="animate-pulse">_</span>
    </span>
  );
};

export default TypedText;
