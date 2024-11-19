import React, { useEffect, useRef } from 'react';

const MatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawRef = useRef<number>(0);
  const frameIntervalRef = useRef<number>(140);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      ctx.scale(dpr, dpr);

      // Set initial background
      ctx.fillStyle = 'rgb(245, 245, 240)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fontSize = 14;
    const columns = Math.floor(window.innerWidth / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -100);

    let animationFrameId: number;

    // Drawing animation with controlled frame rate
    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      // Control frame rate
      if (timestamp - lastDrawRef.current < frameIntervalRef.current) {
        return;
      }

      // Semi-transparent fade effect with white background
      ctx.fillStyle = 'rgba(245, 245, 240, 0.95)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set character style
      ctx.fillStyle = 'rgba(26, 54, 93, 0.35)';
      ctx.font = `${fontSize}px "Courier New", monospace`;
      ctx.textAlign = 'center';

      // Draw characters
      drops.forEach((drop, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize + fontSize / 2;
        const y = drop * fontSize;

        ctx.fillText(char, x, y);

        // Reset drop when it reaches bottom
        if (y > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        } else {
          drops[i] += 0.25;
        }
      });

      lastDrawRef.current = timestamp;
    };

    // Start animation
    draw(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} id="matrix-bg" />;
};

export default MatrixBackground;
