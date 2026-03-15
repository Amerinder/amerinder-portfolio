import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Education from './components/Education';
import Footer from './components/Footer';

import StarBackground from './sections/StarBackground';
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));

function LoadingScreen() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-base">
        <div className="relative mb-8 size-24">
          {[...Array(3)].map((_, index) => (
            <span
              key={index}
              className="absolute inset-0 rounded-full border border-secondary/30"
              style={{ animation: `pulseSlow ${2.8 + index * 0.4}s ease-in-out infinite` }}
            />
          ))}
          <span className="absolute inset-[34%] rounded-full bg-secondary shadow-cyan" />
        </div>
        <p className="font-display text-2xl text-white">Launching Portfolio Orbit</p>
      </motion.div>
    </AnimatePresence>
  );
}

function CustomCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const interactiveSelector = 'a, button, input, textarea, select, .project-card';
    const sparkleLayer = document.getElementById('cursor-sparkles');

    const move = (event) => {
      root.style.setProperty('--cursor-x', `${event.clientX}px`);
      root.style.setProperty('--cursor-y', `${event.clientY}px`);

      if (sparkleLayer && Math.random() > 0.15) {
        const sparkle = document.createElement('span');
        sparkle.className = 'cursor-sparkle';
        sparkle.style.left = `${event.clientX + (Math.random() * 14 - 7)}px`;
        sparkle.style.top = `${event.clientY + (Math.random() * 14 - 7)}px`;
        sparkle.style.width = `${3 + Math.random() * 4}px`;
        sparkle.style.height = sparkle.style.width;
        sparkle.style.animationDuration = `${650 + Math.random() * 550}ms`;
        sparkleLayer.appendChild(sparkle);
        window.setTimeout(() => sparkle.remove(), 1300);
      }
    };

    const activate = () => root.classList.add('cursor-active');
    const deactivate = () => root.classList.remove('cursor-active');

    const interactiveNodes = document.querySelectorAll(interactiveSelector);
    interactiveNodes.forEach((node) => {
      node.addEventListener('pointerenter', activate);
      node.addEventListener('pointerleave', deactivate);
    });

    const leaveWindow = () => root.classList.remove('cursor-visible');
    const enterWindow = () => root.classList.add('cursor-visible');

    root.classList.add('cursor-visible');
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerleave', leaveWindow);
    window.addEventListener('pointerdown', activate);
    window.addEventListener('pointerup', deactivate);
    window.addEventListener('pointerenter', enterWindow);

    return () => {
      interactiveNodes.forEach((node) => {
        node.removeEventListener('pointerenter', activate);
        node.removeEventListener('pointerleave', deactivate);
      });
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerleave', leaveWindow);
      window.removeEventListener('pointerdown', activate);
      window.removeEventListener('pointerup', deactivate);
      window.removeEventListener('pointerenter', enterWindow);
      root.classList.remove('cursor-active');
      root.classList.remove('cursor-visible');
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] hidden md:block" aria-hidden="true">
      <div id="cursor-sparkles" />
      <div id="cursor-star" />
      <div id="cursor-dot" />
      <div id="cursor-aura" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-base font-body text-white">
      <div className="fixed inset-0 z-0">
        <StarBackground />
      </div>
      <CustomCursor />
      {loading && <LoadingScreen />}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Suspense fallback={null}>
          <Certificates />
        </Suspense>
        <Education />
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
        <Footer />
      </div>
    </div>
  );
}

export default App;
