export default function Footer() {
  return (
    <footer className="border-t border-white/5 text-text-primary py-6 sm:py-8 mt-8 sm:mt-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-12">
        <div className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:justify-between">
          {/* Name */}
          <div className="text-sm sm:text-base font-semibold tracking-tight">
            Özgür Meşe
          </div>

          {/* Social Links */}
          <div className="flex gap-5 text-xs sm:text-sm">
            <a
              href="https://github.com/Timbaass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/özgürmeşe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:msozgur44@gmail.com"
              className="text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-text-muted text-[11px] sm:text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
