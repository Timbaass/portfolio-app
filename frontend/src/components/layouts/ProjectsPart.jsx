import Project from "../ui/Project";
import { projectsData } from "../../../data.js";

export default function ProjectPart() {
  return (
    <div id="projects" className="flex flex-col w-full px-4 mt-12">
      <h2 className="text-white text-3xl text-center font-bold">Projects</h2>
      <div className="flex w-full justify-center mt-6">
        <div className="grid grid-cols-3 w-full max-w-6xl gap-6">
          {projectsData.map((projectData, index) => (
            <Project key={index} projectData={projectData} />
          ))}
        </div>
      </div>
    </div>
  );
}
