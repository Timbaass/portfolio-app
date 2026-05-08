import portfolio_logo from "../../assets/portfolio-logo.png";
import { buttonCaps } from "../../../data.js";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="w-full py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between mx-auto max-w-6xl items-center text-white px-4 sm:px-6 gap-4 sm:gap-0">
        <a href="/" className="flex items-center min-w-[6rem]">
          <img src={portfolio_logo} alt="Portfolio Logo" className="w-24 sm:w-32" />
        </a>
        <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-6 text-sm w-full sm:w-auto">
          {buttonCaps.map((buttonCap, index) => {
            return (
              <Button key={index} buttonCap={buttonCap}/>
            )
          })}
        </div>
      </div>
    </header>
  );
}
