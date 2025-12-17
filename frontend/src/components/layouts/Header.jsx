import portfolio_logo from "../../assets/portfolio-logo.png";
import { buttonCaps } from "../../../data.js";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="flex justify-between mx-auto max-w-6xl items-center text-white">
        <a href="/" className="flex items-center">
          <img src={portfolio_logo} alt="Portfolio Logo" className="w-32" />
        </a>
        <div className="flex gap-8 text-sm">
          {buttonCaps.map(buttonCap => {
            return (
              <Button buttonCap={buttonCap}/>
            )
          })}
        </div>
      </div>
    </header>
  );
}
