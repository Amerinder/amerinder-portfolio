import { motion } from 'framer-motion';
import { education } from '../data/projects';

function Education() {
  return (
    <section id="education" className="section-gap">
      <div className="layout">
        <div className="max-w-3xl">
          <p className="eyebrow">Education</p>
          <h2 className="section-title !text-2xl md:!text-3xl">Academic timeline shaped by strong fundamentals and continued technical growth.</h2>
        </div>
        <div className="relative mt-14 space-y-8 before:absolute before:left-4 before:top-0 before:h-full before:w-px before:bg-gradient-to-b before:from-secondary before:to-transparent md:before:left-1/2">
          {education.map((item, index) => (
            <motion.div
              key={`${item.school}-${item.year}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className={`relative md:grid md:grid-cols-2 ${index % 2 === 0 ? '' : 'md:[&>div:first-child]:col-start-2 md:[&>div:first-child]:ml-12 md:[&>div:first-child]:w-[calc(100%-3rem)]'}`}
            >
              <div className="card-panel ml-12 p-6 md:ml-0 md:w-[calc(100%-3rem)]">
                <p className="text-sm uppercase tracking-[0.25em] text-secondary/80">{item.year}</p>
                <h3 className="mt-3 font-display text-2xl text-white">{item.school}</h3>
                <p className="mt-2 text-white/70">{item.degree}</p>
                <p className="mt-2 font-semibold text-white">{item.detail}</p>
                <p className="mt-2 text-sm text-white/50">{item.location}</p>
              </div>
              <span className="absolute left-2 top-8 grid size-6 place-items-center rounded-full border border-secondary/60 bg-base shadow-cyan md:left-1/2 md:-translate-x-1/2">
                <span className="size-2 rounded-full bg-secondary" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
