// src/components/BackgroundPattern1.tsx
import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BackgroundPatternMatrix = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Character set inspired by JavaScript code (letters, numbers, symbols)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789{}();=+-*/%><![].,"\'`~_&|?'.split('');

    // Font size and columns
    const fontSize = 12;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    // Adjust color based on theme
    const rainColor = isDark ? '#0aff0a' : '#00cc00'; // Brighter green in dark mode

    const draw = () => {
      if (!ctx) return;

      // Semi-transparent black overlay for fading trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = rainColor;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };

    // Animation loop
    const interval = setInterval(draw, 50); // Slower for subtlety

    // Handle resize
    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 60; // Default height if no parent
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [isDark]); // Re-run effect if theme changes

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" />
  );
};

export default BackgroundPatternMatrix;