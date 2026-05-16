export default function Project({ projectData }) {
  return (
    <a
      href={projectData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-48 sm:h-52 rounded-xl overflow-hidden cursor-pointer group block border border-white/5 hover:border-white/15 active:scale-[0.98] transition-all duration-300"
      style={{
        backgroundImage: `url(${projectData.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end p-5 sm:p-6">
        <span className="text-text-primary text-sm sm:text-base font-semibold tracking-wide">
          {projectData.title}
        </span>
      </div>
    </a>
  );
}
