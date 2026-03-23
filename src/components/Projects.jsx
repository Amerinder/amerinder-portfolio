import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

function ProjectCard({ project, index }) {
  const isFeatured = index === 0;

  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -4;
    const rotateY = (x / rect.width - 0.5) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const reset = (event) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="project-card group relative w-[80vw] max-w-[350px] flex-none snap-center overflow-hidden transition-transform duration-200 sm:w-[350px] lg:w-[370px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,255,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(145,94,255,0.16),transparent_40%)] opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">
        <div className="-mx-2 -mt-2 relative overflow-hidden rounded-[1.35rem] sm:-mx-3 sm:-mt-3">
          <img
            src={project.image}
            alt={project.title}
            className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
            loading="lazy"
          />
          <div className="absolute right-4 top-4 flex items-start justify-end gap-3">
            {isFeatured ? (
              <span className="rounded-full border border-secondary/30 bg-secondary/12 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary backdrop-blur-md">
                Featured
              </span>
            ) : null}
          </div>
        </div>

        <div className="mx-2 mt-4 flex flex-1 flex-col space-y-3 sm:mx-3">
          <h3 className="font-display text-lg text-white sm:text-[1.3rem]">{project.title}</h3>
          <p className="text-sm leading-6 text-white/88">{project.description}</p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/45">
            <span>{project.tech.length} technologies</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-medium text-secondary sm:text-[11px]"
              >
                {item}
              </span>
            ))}
          </div>
          <ul className="space-y-2 text-sm text-white/78">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-secondary shadow-[0_0_16px_rgba(0,255,255,0.45)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary px-5 py-2.5">
              GitHub <FiGithub />
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary px-5 py-2.5">
                Live <FiArrowUpRight />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getCardScrollWidth = () => {
    if (!scrollRef.current) {
      return 0;
    }

    const firstCard = scrollRef.current.querySelector('.project-card');
    if (!firstCard) {
      return 0;
    }

    const railStyles = window.getComputedStyle(scrollRef.current.firstElementChild);
    const gap = Number.parseFloat(railStyles.columnGap || railStyles.gap || '0');
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateActiveProject = () => {
    if (!scrollRef.current) {
      return;
    }

    const cardScrollWidth = getCardScrollWidth();
    if (!cardScrollWidth) {
      return;
    }

    const { scrollLeft } = scrollRef.current;
    const nextIndex = Math.round(scrollLeft / cardScrollWidth);
    setActiveIndex(Math.max(0, Math.min(projects.length - 1, nextIndex)));
  };

  return (
    <section id="projects" className="section-gap">
      <div className="layout">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Projects</p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Selected builds that show product thinking, interface polish, and execution.
            </h2>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <div ref={scrollRef} onScroll={updateActiveProject} className="project-rail mx-4 overflow-x-auto py-3 sm:mx-6 sm:py-4 lg:mx-8" aria-label="Project showcase">
            <div className="flex snap-x snap-mandatory gap-3 pr-4 sm:gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => {
                  if (!scrollRef.current) {
                    return;
                  }

                  const cardScrollWidth = getCardScrollWidth();
                  if (!cardScrollWidth) {
                    return;
                  }

                  scrollRef.current.scrollTo({
                    left: cardScrollWidth * index,
                    behavior: 'smooth',
                  });
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'w-10 bg-secondary shadow-[0_0_18px_rgba(0,255,255,0.45)]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to project ${index + 1}: ${project.title}`}
                aria-pressed={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
