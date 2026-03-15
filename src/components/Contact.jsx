import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownloadCloud, FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    formData.set('_subject', `Portfolio inquiry from ${name}`);
    formData.set('_captcha', 'false');
    formData.set('_template', 'table');

    try {
      setSending(true);
      const response = await fetch('https://formsubmit.co/ajax/amerinder.98@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      formRef.current.reset();
      setStatus('Thanks for reaching out. You will get a reply within 24 hours.');
    } catch (error) {
      setStatus('Message failed to send. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-gap pb-24">
      <div className="layout">
        <div className="mx-auto mb-5">
          <p className="eyebrow w-fit">Contact</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-panel p-8 md:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <h2 className="section-title !mt-0">Let&apos;s build something impressive together.</h2>
              <div className="mt-8 space-y-5 text-white/75">
                <a href="mailto:amerinder.98@gmail.com" className="contact-item">
                  <FiMail /> amerinder.98@gmail.com
                </a>
                <a href="tel:+919815810667" className="contact-item">
                  <FiPhone /> +91-9815810667
                </a>
                <a href="https://www.linkedin.com/in/amerinder-verma-911458289/" target="_blank" rel="noreferrer" className="contact-item">
                  <FiLinkedin /> linkedin.com/in/amerinder-verma-911458289
                </a>
                <a href="https://github.com/Amerinder" target="_blank" rel="noreferrer" className="contact-item">
                  <FiGithub /> github.com/Amerinder
                </a>
              </div>
              <div className="mt-8">
                <a href="/Amerinder_CV.png" download className="btn-primary">
                  Download CV <FiDownloadCloud />
                </a>
              </div>
            </div>

            <motion.form
              ref={formRef}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input name="name" type="text" placeholder="Name" required className="field" />
              <input name="email" type="email" placeholder="Email" required className="field" />
              <textarea name="message" rows="6" placeholder="Message" required className="field resize-none" />
              <button type="submit" disabled={sending} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {status && <p className="text-sm text-secondary">{status}</p>}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
