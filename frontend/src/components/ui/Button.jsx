export default function Button({ buttonCap, ...props }) {
  let cssClass = "text-lg cursor-pointer px-6 py-2.5 font-medium";

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSectionId = (cap) => {
    const sectionMap = {
      "About me": "about",
      "Projects": "projects",
      "Skills": "skills",
    };
    return sectionMap[cap];
  };

  if (buttonCap === "Contact Me") {
    cssClass += " rounded-full text-stone-700 bg-stone-200 hover:bg-stone-400 transition-colors";
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

  return (
    <button
      className={cssClass}
      onClick={() => scrollToSection(getSectionId(buttonCap))}
    >
      {buttonCap}
    </button>
  );
}
