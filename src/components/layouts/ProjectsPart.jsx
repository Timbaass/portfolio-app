import Project from "../ui/Project";
import { projectsData } from "../../../data.js";

export default function ProjectPart() {
  return (
    <div id="projects" className="flex flex-col w-full px-4 sm:px-6 mt-12 sm:mt-16">
      <h2 className="text-white text-2xl sm:text-3xl text-center font-bold">Projects</h2>
      <div className="flex w-full justify-center mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl gap-4 sm:gap-6">
          {projectsData.map((projectData, index) => (
            <Project key={index} projectData={projectData} />
          ))}
        </div>
      </div>
    </div>
  );
}
