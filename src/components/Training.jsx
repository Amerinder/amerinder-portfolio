import { motion } from 'framer-motion';

function Training() {
  return (
    <section id="training" className="section-gap">
      <div className="layout grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-panel p-8"
        >
          <p className="eyebrow">Training</p>
          <h2 className="section-title !mt-3">Mobile Application Development using Flutter</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-secondary/80">CipherSchools • Jun 2025 - Jul 2025</p>
          <p className="mt-6 text-white/70">
            Designed and developed a Flutter-based grievance management application with authentication, real-time tracking, and a
            structured complaint flow.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'Firebase authentication',
              'Grievance management system',
              'Real-time database integration',
              'Complaint tracking workflow',
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-white/80">
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="card-panel p-8"
        >
          <p className="eyebrow">Impact</p>
          <div className="mt-5 space-y-5">
            {[
              { label: 'Authentication', value: 'Secure Firebase sign-in for student access' },
              { label: 'Database', value: 'Real-time complaint storage and updates' },
              { label: 'Efficiency', value: 'Submission flow optimized to under 30 seconds' },
              { label: 'Outcome', value: 'Cleaner reporting and better issue resolution visibility' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-secondary/80">{item.label}</p>
                <p className="mt-2 text-white/75">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Training;
