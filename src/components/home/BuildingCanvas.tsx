
import { useEffect, useRef, useState } from 'react';

export function BuildingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [progress, setProgress] = useState(0);
  
  // Animation properties
  const buildingColors = {
    outline: '#403E43',
    windows: '#33C3F0',
    walls: '#F6F6F7',
    foundation: '#8A898C',
    roof: '#1EAEDB'
  };
  
  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = Math.min(scrollPosition / (bodyHeight - windowHeight), 1);
      setProgress(scrollPercentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    
    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    
    // Building dimensions
    const buildingWidth = canvasWidth * 0.6;
    const buildingHeight = canvasHeight * 0.8;
    const buildingX = (canvasWidth - buildingWidth) / 2;
    const buildingY = canvasHeight - buildingHeight;
    
    // Animation based on scroll progress
    const constructionStages = [
      { at: 0.1, draw: drawFoundation },
      { at: 0.3, draw: drawStructure },
      { at: 0.5, draw: drawWindows },
      { at: 0.7, draw: drawRoof },
      { at: 0.9, draw: drawDetails }
    ];
    
    // Draw each stage if scroll has progressed to that point
    constructionStages.forEach((stage, index) => {
      if (progress >= stage.at) {
        stage.draw(ctx, {
          x: buildingX,
          y: buildingY,
          width: buildingWidth,
          height: buildingHeight,
          progress: Math.min((progress - stage.at) / 0.2, 1)
        });
      }
    });
    
    // Drawing functions for each stage
    function drawFoundation(ctx: CanvasRenderingContext2D, building: any) {
      const foundationHeight = building.height * 0.1 * building.progress;
      
      // Foundation
      ctx.fillStyle = buildingColors.foundation;
      ctx.fillRect(
        building.x, 
        building.y + building.height - foundationHeight, 
        building.width, 
        foundationHeight
      );
      
      // Outline
      ctx.strokeStyle = buildingColors.outline;
      ctx.lineWidth = 2;
      ctx.strokeRect(
        building.x, 
        building.y + building.height - foundationHeight, 
        building.width, 
        foundationHeight
      );
    }
    
    function drawStructure(ctx: CanvasRenderingContext2D, building: any) {
      const structureHeight = building.height * 0.8 * building.progress;
      
      // Walls
      ctx.fillStyle = buildingColors.walls;
      ctx.fillRect(
        building.x, 
        building.y + building.height - structureHeight - building.height * 0.1, 
        building.width, 
        structureHeight
      );
      
      // Outline
      ctx.strokeStyle = buildingColors.outline;
      ctx.lineWidth = 2;
      ctx.strokeRect(
        building.x, 
        building.y + building.height - structureHeight - building.height * 0.1, 
        building.width, 
        structureHeight
      );
    }
    
    function drawWindows(ctx: CanvasRenderingContext2D, building: any) {
      const windowSize = building.width * 0.1;
      const windowMargin = windowSize * 0.8;
      const windowRows = 3;
      const windowCols = 4;
      const startX = building.x + (building.width - (windowCols * windowSize + (windowCols - 1) * windowMargin)) / 2;
      const startY = building.y + building.height * 0.2;
      
      // Calculate how many windows to draw based on progress
      const totalWindows = windowRows * windowCols;
      const windowsToDraw = Math.floor(totalWindows * building.progress);
      
      ctx.fillStyle = buildingColors.windows;
      ctx.strokeStyle = buildingColors.outline;
      ctx.lineWidth = 2;
      
      for (let i = 0; i < windowsToDraw; i++) {
        const row = Math.floor(i / windowCols);
        const col = i % windowCols;
        
        const windowX = startX + col * (windowSize + windowMargin);
        const windowY = startY + row * (windowSize + windowMargin);
        
        // Window
        ctx.fillRect(windowX, windowY, windowSize, windowSize);
        ctx.strokeRect(windowX, windowY, windowSize, windowSize);
      }
    }
    
    function drawRoof(ctx: CanvasRenderingContext2D, building: any) {
      const roofHeight = building.height * 0.1 * building.progress;
      
      // Roof
      ctx.fillStyle = buildingColors.roof;
      ctx.beginPath();
      ctx.moveTo(building.x, building.y + building.height * 0.1);
      ctx.lineTo(building.x + building.width / 2, building.y + building.height * 0.1 - roofHeight);
      ctx.lineTo(building.x + building.width, building.y + building.height * 0.1);
      ctx.closePath();
      ctx.fill();
      
      // Outline
      ctx.strokeStyle = buildingColors.outline;
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    function drawDetails(ctx: CanvasRenderingContext2D, building: any) {
      // Door
      const doorWidth = building.width * 0.15 * building.progress;
      const doorHeight = building.height * 0.2 * building.progress;
      const doorX = building.x + building.width / 2 - doorWidth / 2;
      const doorY = building.y + building.height - doorHeight - building.height * 0.1;
      
      ctx.fillStyle = buildingColors.outline;
      ctx.fillRect(doorX, doorY, doorWidth, doorHeight);
      
      // Door handle
      if (building.progress > 0.5) {
        ctx.fillStyle = buildingColors.foundation;
        ctx.beginPath();
        ctx.arc(
          doorX + doorWidth * 0.8, 
          doorY + doorHeight / 2, 
          doorWidth * 0.08, 
          0, 
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    
  }, [progress]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.3 }}
      />
    </div>
  );
}
