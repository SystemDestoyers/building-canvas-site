
import { useEffect, useRef, useState } from 'react';

export function BuildingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Enable scroll after animation completes
    if (buildingProgress >= 100 && !isComplete) {
      setIsComplete(true);
      document.body.style.overflow = 'auto';
    }
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    const buildingWidth = canvas.offsetWidth * 0.3;
    const buildingHeight = canvas.offsetHeight * 0.6;
    const buildingX = (canvas.offsetWidth - buildingWidth) / 2;
    const buildingY = canvas.offsetHeight - buildingHeight;
    
    // Draw modern building based on progress
    const currentHeight = (buildingHeight * buildingProgress) / 100;
    
    // Building foundation
    ctx.fillStyle = '#333';
    ctx.fillRect(buildingX, buildingY + buildingHeight - currentHeight, buildingWidth, currentHeight);
    
    // Glass windows
    const floors = Math.floor(currentHeight / (buildingHeight / 10));
    for (let i = 0; i < floors; i++) {
      const floorHeight = buildingHeight / 10;
      const windowWidth = buildingWidth * 0.8;
      const windowX = buildingX + (buildingWidth - windowWidth) / 2;
      const windowY = buildingY + buildingHeight - (i + 1) * floorHeight;
      
      ctx.fillStyle = '#33C3F0';
      ctx.fillRect(windowX, windowY, windowWidth, floorHeight * 0.6);
    }
    
    // Modern architectural details
    if (buildingProgress > 90) {
      // Roof details
      ctx.fillStyle = '#1EAEDB';
      ctx.beginPath();
      ctx.moveTo(buildingX, buildingY + buildingHeight - currentHeight);
      ctx.lineTo(buildingX + buildingWidth / 2, buildingY + buildingHeight - currentHeight - buildingHeight * 0.1);
      ctx.lineTo(buildingX + buildingWidth, buildingY + buildingHeight - currentHeight);
      ctx.fill();
    }
  }, [buildingProgress, isComplete]);
  
  useEffect(() => {
    // Lock scrolling initially
    document.body.style.overflow = 'hidden';
    
    // Start animation
    const animationInterval = setInterval(() => {
      setBuildingProgress(prev => {
        if (prev >= 100) {
          clearInterval(animationInterval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 50);
    
    return () => {
      clearInterval(animationInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ 
          opacity: isComplete ? 0.3 : 1,
          transition: 'opacity 1s ease-out'
        }}
      />
      {!isComplete && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-gray-500">
          Building in progress... {Math.round(buildingProgress)}%
        </div>
      )}
    </div>
  );
}
