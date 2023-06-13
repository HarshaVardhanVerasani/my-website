import { BiHomeHeart } from "react-icons/bi";
import {
  BsFillChatSquareTextFill,
  BsFillPersonVcardFill,
} from "react-icons/bs";
import { TbPhotoStar } from "react-icons/tb";
import "./nav.css";
import { useState } from "react";

const Nav = () => {

  const [value, setValue] = useState("#header");

  return (
    <nav>
      <div className="container__nav text-focus-in">
        <a
          href="#header"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Home"
          className={value === "#header" ? "selected" : ""}
          onClick={() => setValue("#header")}
        >
          <BiHomeHeart size={"1.2em"} />
        </a>
        <a
          href="#about"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="About Me"
          className={value === "#about" ? "selected" : ""}
          onClick={() => setValue("#about")}
        >
          <BsFillPersonVcardFill size={"1.2em"} />
        </a>
        <a
          href="#projects"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Projects"
          className={value === "#projects" ? "selected" : ""}
          onClick={() => setValue("#projects")}
        >
          <TbPhotoStar size={"1.2em"} />
        </a>
        <a
          href="#contact"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Contact"
          className={value === "#contact" ? "selected" : ""}
          onClick={() => setValue("#contact")}
        >
          <BsFillChatSquareTextFill size={"1.2em"} />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
