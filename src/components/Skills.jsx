import { motion } from 'framer-motion';
import { skillGroups, progressSkills } from '../data/skills';

function SkillCard({ name, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.18 }}
      className="rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 flex-none place-items-center rounded-[0.8rem] border border-white/10 bg-white/[0.04]">
          <Icon className="text-[1rem] text-secondary" />
        </div>
        <div className="min-w-0">
          <span className="block text-[13px] font-semibold leading-5 text-white/90 sm:text-sm">{name}</span>
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-gap">
      <div className="layout">
        <div className="max-w-3xl">
          <div className="inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary">What I Work With</p>
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-6xl">Tech Stack</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">Tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-base text-white">{group.title}</h3>
                  <div className="ml-4 h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-2">
                  {group.items.map((skill) => (
                    <SkillCard key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-xl xl:flex xl:h-fit xl:flex-col self-start">
            <h3 className="font-display text-2xl text-white">Skill Progress</h3>
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
