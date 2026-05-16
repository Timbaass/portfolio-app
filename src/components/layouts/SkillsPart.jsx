import Marquee from "react-fast-marquee";
import { logos } from "../../../data.js";

export default function SkillsPart() {
  return (
    <section id="skills" className="flex flex-col text-text-primary text-center py-12 sm:py-20 justify-center items-center max-w-6xl m-auto px-4 sm:px-12 w-full">
      <h2 className="text-xl sm:text-3xl font-semibold mb-8 sm:mb-10 tracking-tight">Skills</h2>
      <Marquee pauseOnHover={false} gradient={true} gradientColor="#111111" gradientWidth={40} speed={30}>
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mx-3 sm:mx-5 p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/5 w-20 h-20 sm:w-24 sm:h-24 gap-1.5"
          >
            <img
              src={logo.icon}
              alt={logo.name}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
            <span className="text-text-muted text-[10px] sm:text-xs font-medium">{logo.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
