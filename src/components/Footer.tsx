const Footer = () => (
  <footer className="py-10 section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-lg font-bold gold-gradient-text">Portfolio</span>
      <p className="text-sm text-text-dim font-body">
        © {new Date().getFullYear()} — Designed & built with passion
      </p>
    </div>
  </footer>
);

export default Footer;
