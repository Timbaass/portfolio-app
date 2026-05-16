import { contactData } from "../../data.js";
import Contact from "../components/ui/Contact.jsx";
import profilePicture from "../assets/profile-picture.png";
import SkillsPart from "../components/layouts/SkillsPart.jsx";
import ProjectPart from "../components/layouts/ProjectsPart.jsx";

export default function MainPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-6xl text-text-primary m-auto px-6 sm:px-12 py-12 sm:py-24 gap-8 sm:gap-12">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-text-secondary text-base sm:text-xl font-light tracking-wide">
            Hi, I am
          </p>
          <h1 className="text-[2.5rem] leading-tight sm:text-6xl font-bold tracking-tight">
            Özgür Meşe
          </h1>
          <h2 className="text-text-muted text-sm sm:text-xl font-normal">
            Full Stack Developer | AI Engineer
          </h2>
          <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-3 mt-3 sm:mt-5">
            {contactData.map((contact) => {
              return <Contact key={contact.name} contactData={contact} />;
            })}
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-36 h-36 sm:w-56 sm:h-56 rounded-full ring-2 ring-white/10 ring-offset-4 ring-offset-surface overflow-hidden">
            <img
              src={profilePicture}
              alt="Özgür Meşe"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <SkillsPart />
      <ProjectPart />
    </div>
  );
}
