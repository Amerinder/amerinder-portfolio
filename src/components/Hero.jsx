import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const roles = ['Full-Stack Developer', 'Frontend Developer', 'Problem Solver'];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const current = roles[roleIndex];
    let char = 0;
    const typer = setInterval(() => {
      char += 1;
      setTyped(current.slice(0, char));
      if (char === current.length) {
        clearInterval(typer);
        setTimeout(() => {
          setTyped('');
          setRoleIndex((value) => (value + 1) % roles.length);
        }, 1400);
      }
    }, 70);

    return () => clearInterval(typer);
  }, [roleIndex]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="layout grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary"
          >
            Computer Science Student • Full-Stack Builder
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl font-bold leading-tight text-white md:text-7xl"
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-secondary via-white to-primary bg-clip-text text-transparent">Amerinder Verma</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-2xl font-semibold text-white/90 md:text-3xl"
          >
            <span className="text-white/70">I build as a </span>
            <span className="text-secondary">{typed}</span>
            <span className="ml-1 inline-block h-7 w-px animate-pulse bg-secondary" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/70"
          >
            Amerinder Verma is a Computer Science Engineering student passionate about building scalable web applications,
            intuitive user interfaces, and efficient backend systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Hire Me <FiArrowRight />
            </a>
            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
            <a href="https://www.linkedin.com/in/amerinder-verma-911458289/" target="_blank" rel="noreferrer" className="btn-ghost">
              LinkedIn
            </a>
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px]">
          <motion.img
            src="/amerinder%20portfolio.png"
            alt="Amerinder portfolio artwork"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="relative z-10 h-auto w-full animate-float object-contain shadow-[0_25px_80px_rgba(0,0,0,0.32)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
