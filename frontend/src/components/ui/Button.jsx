export default function Button({ buttonCap, ...props }) {
  let cssClass = "text-lg cursor-pointer px-6 py-2.5 font-medium";

  if (buttonCap === "Contact Me")
    cssClass += " rounded-full text-stone-700 bg-white border border-stone-200";

  return (
    <p>
      <button className={cssClass}>{buttonCap}</button>
    </p>
  );
}
