import { motion } from 'framer-motion';
import { skillGroups, progressSkills } from '../data/skills';

function SkillCard({ name, icon: Icon }) {
  return (
    <motion.div whileHover={{ scale: 1.03, y: -4 }} transition={{ duration: 0.18 }} className="hex-card">
      <div className="flex min-h-[42px] items-end justify-center">
        <Icon className="text-[1.28rem] text-secondary" />
      </div>
      <span className="mt-1.5 block min-h-[32px] text-center text-xs font-semibold leading-4 text-white/90">{name}</span>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="layout">
        <div className="max-w-3xl">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">A blend of engineering fundamentals, modern frontend craft, and backend practicality.</h2>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title} className="card-panel p-3">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-base text-white">{group.title}</h3>
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <div className="skills-grid">
                  {group.items.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="card-panel h-fit p-5 xl:flex xl:min-h-[560px] xl:flex-col">
            <h3 className="font-display text-xl text-white">Skill Progress</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:flex-1 xl:grid-cols-1 xl:content-between">
              {progressSkills.map((skill, index) => (
                <div key={skill.name} className="xl:flex xl:flex-col xl:justify-center">
                  <div className="mb-2 text-sm font-medium text-white/75">{skill.name}</div>
                  <div className="h-2.5 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7, delay: index * 0.05 }}
                      className="h-full rounded-full bg-gradient-to-r from-secondary via-white to-primary shadow-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
