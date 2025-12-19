export default function Button({ buttonCap, ...props }) {
  let cssClass = "text-lg cursor-pointer px-6 py-2.5 font-medium";

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
    <p>
      <button className={cssClass}>{buttonCap}</button>
    </p>
  );
}
