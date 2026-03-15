import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = ['Home', 'About', 'Skills', 'Projects', 'Training', 'Contact'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 mx-auto mt-4 w-[min(94%,1180px)] rounded-full border ${
        scrolled ? 'border-white/20 bg-white/10 backdrop-blur-2xl' : 'border-white/10 bg-white/5 backdrop-blur-xl'
      }`}
    >
      <nav className="flex items-center justify-between px-5 py-4 md:px-7">
        <a href="#home" className="font-display text-xl font-bold tracking-wide text-white">
          Amerinder<span className="text-secondary">.dev</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-secondary to-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-3 mb-3 rounded-3xl border border-white/10 bg-[#0f1028]/95 p-4 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
