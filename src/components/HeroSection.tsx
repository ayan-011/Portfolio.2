import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll(".hero-line");
    gsap.fromTo(
      lines,
      { y: 120, skewY: 5, opacity: 0 },
      { y: 0, skewY: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.15, delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          Creative Developer & Designer
        </motion.p>

        {/* <div ref={headingRef}>
          <div className="text-reveal-line">
            <h1 className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl   font-display font-bold leading-[0.9] tracking-tight">
              Crafting
            </h1>
          </div>
          <div className="text-reveal-line">
            <h1 className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl   font-display font-bold leading-[0.9] tracking-tight">
              Digital <span className="gold-gradient-text">Experiences</span>
            </h1>
          </div>
          <div className="text-reveal-line">
            <h1 className="hero-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl   font-display font-bold leading-[0.9] tracking-tight">
              That Inspire
            </h1>
          </div>
        </div> */}

        {/* <motion.p ref={headingRef} className="w-full bg-red z-999 p-4">Crafting digital experiences that inspire</motion.p> */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-10 max-w-lg text-muted-foreground text-lg font-body leading-relaxed"
        >
          I build immersive web experiences with modern technologies, 
          blending aesthetics with performance to create something truly memorable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:shadow-[0_0_30px_-5px_hsl(38_90%_55%/0.5)] transition-all duration-500"
          >
            View Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 border border-border text-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:border-primary/50 hover:text-primary transition-all duration-500"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-dim text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
