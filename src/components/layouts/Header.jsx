import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import portfolio_logo from "../../assets/portfolio-logo.png";
import { buttonCaps } from "../../../data.js";
import Button from "../ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full py-4 sm:py-5 border-b border-white/5 relative z-50">
      <div className="flex flex-row justify-between mx-auto max-w-6xl items-center text-text-primary px-6 sm:px-12">
        {/* Logo */}
        <a href="/" className="flex items-center relative z-50">
          <img src={portfolio_logo} alt="Portfolio Logo" className="w-16 sm:w-24 mix-blend-lighten" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {buttonCaps.map((buttonCap, index) => (
            <Button key={index} buttonCap={buttonCap} />
          ))}
        </nav>

        {/* Hamburger Button — mobile only */}
        <button
          className="sm:hidden relative z-50 flex flex-col items-center justify-center w-11 h-11 rounded-lg active:bg-white/10 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block w-[22px] h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out mt-[5px] ${isMenuOpen ? "opacity-0 scale-x-0" : ""
              }`}
          />
          <span
            className={`block w-[22px] h-[2px] bg-text-primary rounded-full transition-all duration-300 ease-in-out mt-[5px] origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ backgroundColor: "#111111" }}
      >
        <nav className={`flex flex-col items-center justify-center h-full gap-1 transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}>
          {buttonCaps.map((buttonCap, index) => (
            <div key={index} onClick={handleNavClick}>
              <Button buttonCap={buttonCap} mobile />
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
