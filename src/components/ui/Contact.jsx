export default function Contact({ contactData }) {
  return (
    <a
      href={contactData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-white/10 border border-white/5 hover:bg-white/20 hover:border-white/15 active:scale-95 transition-all duration-200"
      aria-label={contactData.name}
    >
      <img src={contactData.icon} alt={contactData.name} className="w-[18px] sm:w-5 brightness-90 invert" />
    </a>
  );
}
