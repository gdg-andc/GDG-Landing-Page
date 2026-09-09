import { useEffect, useRef } from 'react';

export default function WaveDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gap = 30; 
      const rows = Math.ceil(canvas.height / gap) + 2;
      const cols = Math.ceil(canvas.width / gap) + 2;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * gap;
          const y = i * gap;
          
          // Complex wave calculation
          const wave1 = Math.sin((x * 0.003) + (time * 0.002));
          const wave2 = Math.cos((y * 0.005) + (time * 0.002));
          const wave3 = Math.sin((x * 0.005) + (y * 0.005) + (time * 0.003));
          
          let xOffset = wave1 * 10 + wave3 * 5;
          let yOffset = wave2 * 10 + wave3 * 5;

          // Mouse interaction
          const dx = mouseRef.current.x - (x + xOffset);
          const dy = mouseRef.current.y - (y + yOffset);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 300; // Interaction radius

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            // Move dots towards cursor (attraction)
            xOffset += dx * force * 0.2;
            yOffset += dy * force * 0.2;
          }
          
          // Fixed size for all dots
          const size = 2;

          // Increased opacity for better visibility
          // Base alpha increased from ~0.15 to ~0.4
          const alpha = 0.15 + (Math.sin((x * y) * 0.0001 + time * 0.005) + 1) * 0.2;

          // Darker color (Slate-600) for better contrast against white
          ctx.fillStyle = `rgba(71, 85, 105, ${alpha})`; 
          
          ctx.beginPath();
          ctx.arc(x + xOffset, y + yOffset, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full pointer-events-none"
    />
  );
}
