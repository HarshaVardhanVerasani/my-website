import { BsFillMouseFill } from "react-icons/bs";
import { FaLongArrowAltDown } from "react-icons/fa";
import ME from "../../assets/me.jpg";
import CTA from "./CTA";
import Social from "./Social";
import "./header.css";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1 className="text-flicker-in-glow">Harsha Vardhan</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <Social />
        <div className="me bounce-in-button">
          <img src={ME} alt="me" />
        </div>

        <a
          href="#contact"
          className="scroll__down bounce-in-button"
          style={{ cursor: "default" }}
        >
          <BsFillMouseFill size="1.5em" />{" "}
          <FaLongArrowAltDown size={"2em"} className="arrow" />
        </a>
      </div>
    </header>
  );
};

export default Header;
