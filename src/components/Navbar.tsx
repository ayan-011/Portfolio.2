import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Projects", "Skills", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 section-padding py-5 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/30" : ""
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-2xl font-bold tracking-tight">
            <span className="gold-gradient-text">Portfolio</span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                onClick={() => scrollTo(item)}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="block w-6 h-0.5 bg-foreground" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-foreground" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => scrollTo(item)}
                  className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
