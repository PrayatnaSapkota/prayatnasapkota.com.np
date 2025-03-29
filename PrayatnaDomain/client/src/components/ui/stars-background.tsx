import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      // Clear existing stars
      container.innerHTML = '';
      
      // Create number of stars based on screen size
      const numberOfStars = Math.floor((windowWidth * windowHeight) / 10000);
      
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        container.appendChild(star);
      }
    };
    
    // Init stars and recreate on resize
    createStars();
    window.addEventListener('resize', createStars);
    
    return () => {
      window.removeEventListener('resize', createStars);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        zIndex: 0,
      }}
    />
  );
}
