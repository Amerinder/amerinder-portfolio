import { useEffect, useRef } from 'react';

function StarBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    if (!canvas) {
      return undefined;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return undefined;
    }
    let width = 0;
    let height = 0;
    let animationFrame;
    let stars = [];
    let shootingStars = [];
    let nextSpawnAt = 0;

    const randomBetween = (min, max) => Math.random() * (max - min) + min;

    const createStar = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randomBetween(1, 3),
      alpha: randomBetween(0.35, 0.95),
      blinkSpeed: randomBetween(0.35, 1.1),
      blinkOffset: Math.random() * Math.PI * 2,
      drift: randomBetween(0.015, 0.06),
    });

    const createShootingStar = (now) => {
      const length = randomBetween(100, 200);
      const duration = randomBetween(6.5, 9.5);
      const startX = -randomBetween(120, width * 0.2);
      const startY = randomBetween(-height * 0.1, height * 0.35);
      const endX = width + randomBetween(40, width * 0.25);
      const endY = startY + randomBetween(height * 0.35, height * 0.8);
      return {
        startX,
        startY,
        endX,
        endY,
        length,
        life: duration,
        bornAt: now,
        opacity: randomBetween(0.8, 1),
        headRadius: randomBetween(2.4, 3.6),
      };
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const starCount = Math.max(200, Math.min(400, Math.floor((width * height) / 5200)));
      stars = Array.from({ length: starCount }, createStar);
    };

    const scheduleNextSpawn = (now) => {
      nextSpawnAt = now + randomBetween(1800, 3600);
    };

    const drawGradient = () => {
      const gradient = context.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#020617');
      gradient.addColorStop(0.52, '#050816');
      gradient.addColorStop(1, '#000000');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const drawStars = (time) => {
      stars.forEach((star) => {
        const twinkle = (Math.sin(time * 0.0012 * star.blinkSpeed + star.blinkOffset) + 1) / 2;
        const opacity = star.alpha * (0.45 + twinkle * 0.55);
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255,255,255,${opacity})`;
        context.shadowBlur = 8 + star.radius * 4;
        context.shadowColor = `rgba(255,255,255,${opacity})`;
        context.fill();

        star.y += star.drift;
        if (star.y > height + 3) {
          star.y = -3;
          star.x = Math.random() * width;
        }
      });
    };

    const drawShootingStars = (time) => {
      if (time >= nextSpawnAt && shootingStars.length < 6) {
        const burstCount = Math.random() > 0.55 ? 2 : 1;
        for (let index = 0; index < burstCount && shootingStars.length < 7; index += 1) {
          shootingStars.push(createShootingStar(time + index * 220));
        }
        scheduleNextSpawn(time);
      }

      shootingStars = shootingStars.filter((star) => time - star.bornAt < star.life * 1000);

      shootingStars.forEach((star) => {
        const elapsed = (time - star.bornAt) / 1000;
        const progress = Math.min(elapsed / star.life, 1);
        const headX = star.startX + (star.endX - star.startX) * progress;
        const headY = star.startY + (star.endY - star.startY) * progress;
        const directionX = star.endX - star.startX;
        const directionY = star.endY - star.startY;
        const directionLength = Math.hypot(directionX, directionY) || 1;
        const unitX = directionX / directionLength;
        const unitY = directionY / directionLength;
        const tailX = headX - unitX * star.length;
        const tailY = headY - unitY * star.length;
        const fade = Math.max(0, 1 - progress) * star.opacity;

        context.beginPath();
        const gradient = context.createLinearGradient(headX, headY, tailX, tailY);
        gradient.addColorStop(0, `rgba(255,255,255,${fade})`);
        gradient.addColorStop(0.35, `rgba(255,255,255,${fade * 0.8})`);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        context.strokeStyle = gradient;
        context.lineWidth = 2.8;
        context.shadowBlur = 26;
        context.shadowColor = `rgba(255,255,255,${fade})`;
        context.moveTo(headX, headY);
        context.lineTo(tailX, tailY);
        context.stroke();

        context.beginPath();
        context.fillStyle = `rgba(255,255,255,${fade})`;
        context.arc(headX, headY, star.headRadius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const render = (time) => {
      animationFrame = requestAnimationFrame(render);
      context.clearRect(0, 0, width, height);
      drawGradient();
      drawStars(time);
      drawShootingStars(time);
      context.shadowBlur = 0;
    };

    resize();
    const startTime = performance.now();
    shootingStars = [
      createShootingStar(startTime),
      createShootingStar(startTime + 260),
      createShootingStar(startTime + 520),
    ];
    scheduleNextSpawn(startTime + 1000);
    animationFrame = requestAnimationFrame(render);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={mountRef} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}

export default StarBackground;
