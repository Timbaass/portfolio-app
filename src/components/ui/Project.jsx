export default function Project({ projectData }) {
  return (
    <a
      href={projectData.url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-48 rounded-lg overflow-hidden cursor-pointer group block"
      style={{
        backgroundImage: `url(${projectData.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <span className="text-white text-xl font-semibold">{projectData.title}</span>
      </div>
    </a>
  );
}
