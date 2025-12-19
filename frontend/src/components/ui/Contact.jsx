export default function Contact({contactData}) {
  return (
    <div>
      <a
        href={contactData.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 bg-stone-200 rounded-xl hover:bg-stone-400 transition-colors"
      >
        <img src={contactData.icon} alt={contactData.name} className="w-6" />
      </a>
    </div>
  );
}
