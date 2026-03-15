import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

function ProjectCard({ project, index }) {
  const handleMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = (y / rect.height - 0.5) * -10;
    const rotateY = (x / rect.width - 0.5) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const reset = (event) => {
    event.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="project-card transition-transform duration-200"
    >
      <img src={project.image} alt={project.title} className="h-56 w-full rounded-[1.5rem] object-cover" loading="lazy" />
      <div className="mt-6">
        <h3 className="font-display text-2xl text-white">{project.title}</h3>
        <p className="mt-3 text-white/70">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-secondary">
              {item}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-2 text-sm text-white/60">
          {project.highlights.map((highlight) => (
            <li key={highlight}>• {highlight}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
            GitHub <FiGithub />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-gap">
      <div className="layout">
        <div className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected builds that show product thinking, interface polish, and execution.</h2>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
