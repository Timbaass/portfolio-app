export default function Footer() {
  return (
    <footer className="border-t border-gray-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Sol - İsim/Logo */}
          <div className="text-xl font-semibold">
            Özgür Meşe
          </div>

          {/* Orta - Sosyal Medya Linkleri */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:email@example.com"
              className="hover:text-gray-400 transition-colors"
            >
              Email
            </a>
          </div>

          {/* Sağ - Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
}
