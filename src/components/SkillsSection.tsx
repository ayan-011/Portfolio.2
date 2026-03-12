import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "REST APIs", "GraphQL", "AWS"],
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX", "Prototyping", "Design Systems", "Branding"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "CI/CD", "Vercel", "Linux", "Agile"],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-group",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ".skill-group", start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 section-padding bg-surface-elevated/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16">
          Skills & <span className="gold-gradient-text">Technologies</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-group">
              <h3 className="text-xl font-display font-bold mb-6 text-primary">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                    className="text-muted-foreground font-body flex items-center gap-3 cursor-default group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(38_90%_55%/0.5)] transition-all duration-300" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
