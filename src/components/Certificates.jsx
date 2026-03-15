import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { certificates } from '../data/projects';

function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const featured = certificates.slice(0, 3);
  const visibleCertificates = showAll ? certificates : featured;

  return (
    <section id="certificates" className="section-gap pt-4">
      <div className="layout">
        <div className="max-w-3xl">
          <p className="eyebrow">Certificates</p>
          <h2 className="section-title !text-2xl md:!text-3xl">Verified learning milestones across software, communication, systems, and AI.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.file}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="card-panel p-6"
            >
              <a href={certificate.file} target="_blank" rel="noreferrer" className="flex items-start gap-4">
                <div className="grid size-14 shrink-0 place-items-center rounded-2xl border border-secondary/20 bg-secondary/10 text-secondary">
                  <FiAward size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white/85">{certificate.title}</p>
                  <p className="mt-2 text-sm text-white/55">{certificate.issuer}</p>
                  <p className="mt-4 text-sm text-secondary">Open certificate</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        {certificates.length > featured.length && (
          <div className="mt-10 flex justify-center">
            <button type="button" onClick={() => setShowAll((value) => !value)} className="btn-secondary">
              {showAll ? 'Show Less' : 'View More Certificates'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certificates;
