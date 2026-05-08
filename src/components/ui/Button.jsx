import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Button({ buttonCap, ...props }) {
  const location = useLocation();
  const navigate = useNavigate();
  let cssClass = "text-sm sm:text-lg cursor-pointer px-3 sm:px-6 py-2 sm:py-2.5 font-medium whitespace-nowrap";

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

  if (buttonCap === "Contact Me") {
    cssClass +=
      " rounded-full text-stone-700 bg-stone-200 hover:bg-stone-400 transition-colors";
    return (
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=msozgur44@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={cssClass}
      >
        {buttonCap}
      </a>
    );
  }

  if (buttonCap === "About me") {
    return (
      <Link to="/about" className={cssClass}>
        {buttonCap}
      </Link>
    );
  }

  return (
    <button
      className={cssClass}
      onClick={() => handleClick(getSectionId(buttonCap))}
    >
      {buttonCap}
    </button>
  );
}
