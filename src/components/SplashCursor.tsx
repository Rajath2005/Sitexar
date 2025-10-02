import React, { useRef, useEffect } from 'react';

interface Splash {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  opacity: number;
  speed: number;
}

// Helper to convert hex to rgb string
const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
};

const SplashCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Splash objects
    const splashes: Splash[] = [];
    // Single constant color matching site theme
    const color = '#66ccff'; // light blue

    // Mouse position
    const handleMouseMove = (e: MouseEvent) => {
      splashes.push({
        x: e.clientX,
        y: e.clientY,
        radius: 2, // start small dot radius
        maxRadius: Math.random() * 6 + 4, // max radius for dot expansion
        color: color,
        opacity: 1,
        speed: Math.random() * 0.5 + 0.3, // slower expansion for subtle effect
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      splashes.forEach((splash, index) => {
        splash.radius += splash.speed;
        splash.opacity -= 0.02;

        if (splash.opacity <= 0 || splash.radius >= splash.maxRadius) {
          splashes.splice(index, 1);
          return;
        }

        ctx.fillStyle = `rgba(${hexToRgb(splash.color)},${splash.opacity})`;
        ctx.beginPath();
        ctx.arc(splash.x, splash.y, splash.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 10,
        pointerEvents: 'none',
        backgroundColor: 'transparent',
      }}
    />
  );
};

export default SplashCursor;
