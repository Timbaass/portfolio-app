import { contactData } from "../../data.js";
import Contact from "../components/ui/Contact.jsx";
import profilePicture from "../assets/profile-picture.png";
import SkillsPart from "../components/layouts/SkillsPart.jsx";
import ProjectPart from "../components/layouts/ProjectsPart.jsx";

export default function MainPage() {
  return (
    <div className="w-full py-8 sm:py-6">
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-6xl text-white m-auto px-6 sm:px-12 py-6 gap-8 sm:gap-0">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl mb-3 sm:mb-6">Hi, I am</h1>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide sm:tracking-wider">Özgür Meşe</h1>
          <h2 className="text-stone-400 text-lg sm:text-2xl">
            Full Stack Developer | AI Engineer
          </h2>
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-2 mt-4 sm:mt-6">
            {contactData.map((contact) => {
              return <Contact key={contact.name} contactData={contact} />;
            })}
          </div>
        </div>
        <div className="inline-flex items-center justify-center w-40 h-40 sm:w-64 sm:h-64">
          <img
            src={profilePicture}
            alt="Profile Picture"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
      <SkillsPart />
      <ProjectPart />
    </div>
  );
}
