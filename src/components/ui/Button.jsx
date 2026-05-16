import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Button({ buttonCap, mobile = false, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSectionId = (cap) => {
    const sectionMap = {
      Projects: "projects",
      Skills: "skills",
    };
    return sectionMap[cap];
  };

  const handleClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 250);
    } else {
      scrollToSection(sectionId);
    }
  };

  // Mobile menu styles
  if (mobile) {
    if (buttonCap === "Contact Me") {
      return (
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=msozgur44@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-lg cursor-pointer px-10 py-3.5 font-semibold whitespace-nowrap rounded-full bg-text-primary text-surface hover:bg-white/80 active:scale-95 transition-all duration-200 mt-4"
        >
          {buttonCap}
        </a>
      );
    }

    if (buttonCap === "About me") {
      return (
        <Link
          to="/about"
          className="block text-center text-2xl cursor-pointer px-8 py-4 font-medium whitespace-nowrap text-text-secondary hover:text-text-primary active:text-text-primary transition-colors duration-200"
        >
          {buttonCap}
        </Link>
      );
    }

    return (
      <button
        className="block text-center text-2xl cursor-pointer px-8 py-4 font-medium whitespace-nowrap text-text-secondary hover:text-text-primary active:text-text-primary transition-colors duration-200"
        onClick={() => handleClick(getSectionId(buttonCap))}
      >
        {buttonCap}
      </button>
    );
  }

  // Desktop styles
  const baseClass = "text-sm sm:text-base cursor-pointer px-4 sm:px-5 py-2 sm:py-2.5 font-medium whitespace-nowrap rounded-lg transition-colors duration-200";

  if (buttonCap === "Contact Me") {
    return (
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=msozgur44@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass + " rounded-full bg-text-primary text-surface font-semibold hover:bg-white/80"}
      >
        {buttonCap}
      </a>
    );
  }

  const linkClass = baseClass + " text-text-secondary hover:text-text-primary hover:bg-white/5";

  if (buttonCap === "About me") {
    return (
      <Link to="/about" className={linkClass}>
        {buttonCap}
      </Link>
    );
  }

  return (
    <button
      className={linkClass}
      onClick={() => handleClick(getSectionId(buttonCap))}
    >
      {buttonCap}
    </button>
  );
}
