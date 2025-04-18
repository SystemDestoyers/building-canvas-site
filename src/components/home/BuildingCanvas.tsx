
import { useEffect, useRef, useState } from 'react';

export function BuildingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isCanvasReady, setIsCanvasReady] = useState(false);
  
  useEffect(() => {
    const initCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return false;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return false;
      
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      
      return true;
    };
    
    const canvasReady = initCanvas();
    setIsCanvasReady(canvasReady);
    
    const handleResize = () => {
      if (initCanvas()) {
        setIsCanvasReady(false);
        setTimeout(() => setIsCanvasReady(true), 10);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / scrollHeight) * 100;
      setBuildingProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize progress based on current scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isCanvasReady) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    const buildingWidth = canvas.offsetWidth * 0.2;
    const buildingHeight = canvas.offsetHeight * 0.7;
    const buildingX = canvas.offsetWidth * 0.7;
    const buildingY = canvas.offsetHeight - buildingHeight;
    
    const currentHeight = (buildingHeight * buildingProgress) / 100;
    
    // Draw modern building based on progress
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
    
    // Modern architectural details for taller progress
    if (buildingProgress > 50) {
      const tower2Width = buildingWidth * 0.6;
      const tower2Height = currentHeight * 0.8;
      const tower2X = buildingX - tower2Width - 10;
      const tower2Y = buildingY + buildingHeight - tower2Height;
      
      ctx.fillStyle = '#444';
      ctx.fillRect(tower2X, tower2Y, tower2Width, tower2Height);
      
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
    
    // Roof details at high progress
    if (buildingProgress > 90) {
      ctx.fillStyle = '#1EAEDB';
      ctx.beginPath();
      ctx.moveTo(buildingX, buildingY + buildingHeight - currentHeight);
      ctx.lineTo(buildingX + buildingWidth / 2, buildingY + buildingHeight - currentHeight - buildingHeight * 0.1);
      ctx.lineTo(buildingX + buildingWidth, buildingY + buildingHeight - currentHeight);
      ctx.fill();
    }
  }, [buildingProgress, isCanvasReady]);
  
  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 right-0 w-full h-full"
        style={{ 
          opacity: 0.8,
          transition: 'opacity 1s ease-out'
        }}
      />
    </div>
  );
}
