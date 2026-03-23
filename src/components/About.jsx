import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="section-gap">
      <div className="layout">
        <div className="mb-5">
          <p className="eyebrow w-fit">About Me</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full py-2"
        >
          <h2 className="section-title">Full-stack development focused on modern MERN applications and meaningful user experiences.</h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-white/72">
            <p>
              I am a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). I
              enjoy building modern, scalable web applications that combine clean design with efficient backend systems.
            </p>
            <p>
              My focus is on creating responsive user interfaces, developing robust APIs, and managing databases to build complete
              end-to-end applications. I enjoy solving real-world problems through technology and continuously improving my skills by
              working with new tools and frameworks.
            </p>
            <p>
              I am always eager to learn, collaborate, and develop impactful digital products that provide meaningful user
              experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
