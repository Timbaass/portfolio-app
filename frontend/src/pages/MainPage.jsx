import { contactData } from "../../data.js";
import Contact from "../components/ui/Contact.jsx";
import profilePicture from "../assets/profile-picture.png";

export default function MainPage() {
  return (
    <div className="w-full py-6">
      <div className="flex flex-row justify-between items-center max-w-6xl text-white m-auto px-12 py-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl mb-6">Hi, I am</h1>
          <h1 className="text-6xl font-bold tracking-wider">Özgür Meşe</h1>
          <h2 className="text-stone-400 text-2xl">
            Full Stack Developer | AI Engineer
          </h2>
          <div className="flex flex-row gap-2 mt-6">
            {contactData.map((contact) => {
              return <Contact key={contact.name} contactData={contact} />;
            })}
          </div>
        </div>
        <div className="inline-flex items-center justify-center max-w-90 mr-12">
          <img src={profilePicture} alt="Profile Picture" className="rounded-full"/>
        </div>
      </div>
    </div>
  );
}
