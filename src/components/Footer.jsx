import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="border-t border-white/10 pb-10 pt-8">
      <div className="layout flex flex-col items-center justify-between gap-5 text-center text-sm text-white/55 md:flex-row md:text-left">
        <p>© 2026 Amerinder Verma </p>
        <div className="flex items-center gap-4 text-lg text-white/70">
          <a href="mailto:amerinder.98@gmail.com" aria-label="Email">
            <FiMail />
          </a>
          <a href="https://www.linkedin.com/in/amerinder-verma-911458289/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://github.com/Amerinder" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
