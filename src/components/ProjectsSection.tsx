import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "A modern e-commerce experience with real-time inventory, dynamic filtering, and seamless checkout flow.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design & Development",
    description: "Analytics dashboard with real-time data visualization, role-based access, and custom reporting tools.",
    tech: ["TypeScript", "Next.js", "D3.js", "Tailwind"],
    color: "from-primary/15 to-transparent",
  },
  {
    title: "Mobile Banking App",
    category: "Product Design",
    description: "A fintech mobile application with biometric auth, instant transfers, and investment tracking.",
    tech: ["React Native", "Firebase", "Plaid API"],
    color: "from-primary/10 to-primary/5",
  },
  {
    title: "AI Content Studio",
    category: "Full Stack Development",
    description: "AI-powered content creation platform with multi-modal generation, brand voice training, and team collaboration.",
    tech: ["Python", "OpenAI", "React", "AWS"],
    color: "from-primary/20 to-transparent",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.2,
          scrollTrigger: { trigger: ".project-card", start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Selected Work</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-16">
          Projects that <span className="gold-gradient-text">define</span> me
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="project-card group relative rounded-2xl overflow-hidden glass-card cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs text-muted-foreground tracking-[0.2em] uppercase font-body">
                    {project.category}
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-body bg-secondary rounded-full text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Number */}
                <span className="absolute bottom-6 right-8 text-7xl font-display font-bold text-foreground/[0.03] group-hover:text-primary/10 transition-colors duration-700">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
