import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ".contact-reveal", start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="contact-reveal text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
            <h2 className="contact-reveal text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              Let's create something <span className="gold-gradient-text">extraordinary</span>
            </h2>
            <p className="contact-reveal text-muted-foreground text-lg font-body leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Let's turn your vision into reality.
            </p>

            <div className="contact-reveal mt-10 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body">hello@myportfolio.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-body">New Delhi, India</span>
              </div>
            </div>

            <div className="contact-reveal mt-10 flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
                >
                  {social} <ArrowUpRight className="w-3 h-3" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="contact-reveal">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted-foreground font-body mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground font-body mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground font-body mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground font-body focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-wider uppercase rounded-lg hover:shadow-[0_0_30px_-5px_hsl(38_90%_55%/0.5)] transition-all duration-500"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
