import { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let circles: Circle[];

    // Define the colors for the bubbles, using your site's palette with some transparency
    const colors = [
      'rgba(59, 130, 246, 0.2)',  // blue-500
      'rgba(37, 99, 235, 0.2)',   // blue-600
      'rgba(29, 78, 216, 0.2)',   // blue-700
      'rgba(71, 85, 105, 0.2)',   // slate-500
    ];

    class Circle {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
      private ctx: CanvasRenderingContext2D;

      constructor(
        x: number,
        y: number,
        radius: number,
        dx: number,
        dy: number,
        color: string,
        ctx: CanvasRenderingContext2D
      ) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.ctx = ctx;
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
      }

      update() {
        // --- ✅ CODE IMPROVEMENT: Access canvas via context to ensure it's not null ---
        const canvas = this.ctx.canvas;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const init = () => {
      // Guard against null canvas or context, especially for the resize handler
      if (!canvas || !ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      circles = [];
      // Adjust density based on screen size
      const circleCount = Math.floor((canvas.width * canvas.height) / 20000);

      for (let i = 0; i < circleCount; i++) {
        const radius = Math.random() * 15 + 5;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 0.4;
        const dy = (Math.random() - 0.5) * 0.4;
        const color = colors[Math.floor(Math.random() * colors.length)];
        circles.push(new Circle(x, y, radius, dx, dy, color, ctx));
      }
    };

    const animate = () => {
      // Schedule the next frame
      animationFrameId = requestAnimationFrame(animate);

      // Guard against null canvas/context or uninitialized circles array before drawing
      if (!canvas || !ctx || !circles) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach(circle => circle.update());
    };

    const handleResize = () => { init(); };
    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />;
};

export default AnimatedBackground;