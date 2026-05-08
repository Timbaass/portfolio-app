import Marquee from "react-fast-marquee";
import { logos } from "../../../data.js";

export default function SkillsPart() {
  return (
    <div id="skills" className="flex flex-col text-white text-center mt-32 justify-center items-center max-w-6xl m-auto">
      <h2 className="upppercase text-3xl font-bold mb-6">Skills</h2>
      <Marquee pauseOnHover={false} gradient={true} gradientColor="black" gradientWidth={100}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="backdrop-blur-sm border-none flex justify-center items-center mx-4 p-2 rounded-full w-24 h-24"
          >
            <img
              src={logo.icon}
              alt={logo.name}
              className="w-12 h-12 object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
