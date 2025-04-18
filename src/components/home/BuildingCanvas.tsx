
import { useEffect, useRef, useState } from 'react';

export function BuildingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  
  useEffect(() => {
    // Ensure canvas is properly initialized
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return false;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      
      // Set canvas dimensions considering device pixel ratio
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      return true;
    };
    
    // Try to initialize canvas and set ready state
    const canvasReady = initCanvas();
    setIsCanvasReady(canvasReady);
    
    // Handle window resize
    const handleResize = () => {
      if (initCanvas()) {
        // Force a redraw
        setIsCanvasReady(false);
        setTimeout(() => setIsCanvasReady(true), 10);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isCanvasReady) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Enable scroll after animation completes
    if (buildingProgress >= 100 && !isComplete) {
      setIsComplete(true);
      document.body.style.overflow = 'auto';
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    const buildingWidth = canvas.offsetWidth * 0.2; // Slimmer building
    const buildingHeight = canvas.offsetHeight * 0.7; // Taller building
    const buildingX = canvas.offsetWidth * 0.7; // Position to the right side
    const buildingY = canvas.offsetHeight - buildingHeight;
    
    // Draw modern building based on progress
    const currentHeight = (buildingHeight * buildingProgress) / 100;
    
    // Building foundation
    ctx.fillStyle = '#333';
    ctx.fillRect(buildingX, buildingY + buildingHeight - currentHeight, buildingWidth, currentHeight);
    
    // Glass windows
    const floors = Math.floor(currentHeight / (buildingHeight / 12));
    for (let i = 0; i < floors; i++) {
      const floorHeight = buildingHeight / 12;
      const windowWidth = buildingWidth * 0.8;
      const windowX = buildingX + (buildingWidth - windowWidth) / 2;
      const windowY = buildingY + buildingHeight - (i + 1) * floorHeight;
      
      ctx.fillStyle = '#33C3F0';
      ctx.fillRect(windowX, windowY, windowWidth, floorHeight * 0.6);
    }
    
    // Modern architectural details
    if (buildingProgress > 50) {
      // Add a second tower
      const tower2Width = buildingWidth * 0.6;
      const tower2Height = currentHeight * 0.8;
      const tower2X = buildingX - tower2Width - 10;
      const tower2Y = buildingY + buildingHeight - tower2Height;
      
      ctx.fillStyle = '#444';
      ctx.fillRect(tower2X, tower2Y, tower2Width, tower2Height);
      
      // Windows for second tower
      const tower2Floors = Math.floor(tower2Height / (buildingHeight / 12));
      for (let i = 0; i < tower2Floors; i++) {
        const floorHeight = buildingHeight / 12;
        const windowWidth = tower2Width * 0.7;
        const windowX = tower2X + (tower2Width - windowWidth) / 2;
        const windowY = tower2Y + i * floorHeight;
        
        ctx.fillStyle = '#5CEFFF';
        ctx.fillRect(windowX, windowY, windowWidth, floorHeight * 0.6);
      }
    }
    
    // Roof details
    if (buildingProgress > 90) {
      ctx.fillStyle = '#1EAEDB';
      ctx.beginPath();
      ctx.moveTo(buildingX, buildingY + buildingHeight - currentHeight);
      ctx.lineTo(buildingX + buildingWidth / 2, buildingY + buildingHeight - currentHeight - buildingHeight * 0.1);
      ctx.lineTo(buildingX + buildingWidth, buildingY + buildingHeight - currentHeight);
      ctx.fill();
    }
  }, [buildingProgress, isComplete, isCanvasReady]);
  
  useEffect(() => {
    if (!isCanvasReady) return;
    
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
    }, 40); // Slightly faster animation
    
    return () => {
      clearInterval(animationInterval);
      document.body.style.overflow = 'auto';
    };
  }, [isCanvasReady]);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 right-0 w-full h-full"
        style={{ 
          opacity: isComplete ? 0.6 : 0.8,
          transition: 'opacity 1s ease-out'
        }}
      />
      {isCanvasReady && !isComplete && (
        <div className="absolute bottom-10 right-10 text-center text-white bg-black/30 px-3 py-1 rounded-md">
          Building in progress... {Math.round(buildingProgress)}%
        </div>
      )}
    </div>
  );
}
