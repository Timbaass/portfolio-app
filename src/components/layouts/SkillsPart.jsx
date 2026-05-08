import Marquee from "react-fast-marquee";
import { logos } from "../../../data.js";

export default function SkillsPart() {
  return (
    <div id="skills" className="flex flex-col text-white text-center mt-16 sm:mt-32 justify-center items-center max-w-6xl m-auto px-4 sm:px-6 w-full">
      <h2 className="uppercase text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
      <Marquee pauseOnHover={false} gradient={true} gradientColor="black" gradientWidth={80}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="backdrop-blur-sm border-none flex justify-center items-center mx-2 sm:mx-4 p-2 rounded-full w-16 h-16 sm:w-24 sm:h-24"
          >
            <img
              src={logo.icon}
              alt={logo.name}
              className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
