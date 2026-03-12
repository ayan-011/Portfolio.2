import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-text",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ".about-text", start: "top 85%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        ".stat-item",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: ".stat-item", start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="about-text text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
            <h2 className="about-text text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Passionate about creating <span className="gold-gradient-text">pixel-perfect</span> solutions
            </h2>
          </div>

          <div>
            <p className="about-text text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a full-stack developer and designer who thrives at the intersection of creativity and technology. 
              With expertise in React, TypeScript, and modern design tools, I bring ideas to life through 
              clean code and stunning visuals.
            </p>
            <p className="about-text text-muted-foreground text-lg leading-relaxed">
              Every project is an opportunity to push boundaries. I focus on performance, accessibility, 
              and creating experiences that leave a lasting impression on users.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/50">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-center md:text-left">
              <p className="text-4xl md:text-5xl font-display font-bold gold-gradient-text">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground tracking-wide uppercase font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
