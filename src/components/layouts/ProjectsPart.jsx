import Project from "../ui/Project";
import { projectsData } from "../../../data.js";

export default function ProjectPart() {
  return (
    <section id="projects" className="flex flex-col w-full px-4 sm:px-12 py-12 sm:py-20">
      <h2 className="text-text-primary text-xl sm:text-3xl text-center font-semibold tracking-tight mb-8 sm:mb-10">
        Projects
      </h2>
      <div className="flex w-full justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl gap-4 sm:gap-6">
          {projectsData.map((projectData, index) => (
            <Project key={index} projectData={projectData} />
          ))}
        </div>
      </div>
    </section>
  );
}
