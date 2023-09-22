/* eslint-disable no-inner-declarations */
import { useEffect, useRef, useState } from 'react';

function CanvasAnimation() {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const canvas = canvasRef.current;

    // Check if the canvas element is available before accessing its context
    if (canvas) {
      const ctx = canvas.getContext('2d');

      // Set canvas size based on window dimensions
      canvas.width = canvasSize.width;
      canvas.height = canvasSize.height;

      // Canvas-related code
      const w = canvas.width;
      const h = canvas.height;
      const hue = 217;
      const stars = [];
      const maxStars = 1400;

      // Thanks @jackrugile for the performance tip! https://codepen.io/jackrugile/pen/BjBGoM
      // Cache gradient
      const canvas2 = document.createElement('canvas');
      const ctx2 = canvas2.getContext('2d');
      canvas2.width = 100;
      canvas2.height = 100;
      const half = canvas2.width / 2;
      const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, '#fff');
      gradient2.addColorStop(0.1, `hsl(${hue}, 61%, 33%)`);
      gradient2.addColorStop(0.25, `hsl(${hue}, 64%, 6%)`);
      gradient2.addColorStop(1, 'transparent');

      ctx2.fillStyle = gradient2;
      ctx2.beginPath();
      ctx2.arc(half, half, half, 0, Math.PI * 2);
      ctx2.fill();

      // End cache

      function random(min, max) {
        if (arguments.length < 2) {
          max = min;
          min = 0;
        }

        if (min > max) {
          let hold = max;
          max = min;
          min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function maxOrbit(x, y) {
        const max = Math.max(x, y);
        const diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
      }

      class Star {
        constructor () {
          this.orbitRadius = random(maxOrbit(w, h));
          this.radius = random(60, this.orbitRadius) / 12;
          this.orbitX = w / 2;
          this.orbitY = h / 2;
          this.timePassed = random(0, maxStars);
          this.speed = 0.0005;
          this.alpha = random(2, 10) / 10;

          stars.push(this);
        }

        draw() {
          const x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
          const y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
          const twinkle = random(10);

          if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
          } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
          }

          ctx.globalAlpha = this.alpha;
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
          this.timePassed += this.speed;
        }
      }

      for (let i = 0; i < maxStars; i++) {
        new Star();
      }

      function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = `hsla(${hue}, 64%, 6%, 1)`;
        ctx.fillRect(0, 0, w, h);

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
        }

        requestAnimationFrame(animation);
      }

      animation(); // Start the animation loop

      return () => {
        // Cleanup logic (e.g., stop animation)
        // No cleanup needed in this example
      };
    }
  }, [canvasSize]);

  // Handle window resize to update canvas size
  const handleResize = () => {
    setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}

export default CanvasAnimation;
