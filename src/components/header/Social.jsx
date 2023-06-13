import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

const Social = () => {
  return (
    <div className="social bounce-in-button">
      <a
        href="https://github.com/HarshaVardhanVerasani?tab=repositories"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Github"
        target="__blank"
      >
        <VscGithubInverted size="1.3em" />
      </a>
      <a
        href="https://www.linkedin.com/in/harshavardhanverasani/"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Linkedin"
        target="__blank"
      >
        <BsLinkedin size="1.3em" />
      </a>
      <a href=".." data-tooltip-id="my-tooltip" data-tooltip-content="Facebook">
        <BsFacebook size="1.3em" />
      </a>
      <a href=".." data-tooltip-id="my-tooltip" data-tooltip-content="Twitter">
        <FaTwitter size="1.3em" />
      </a>
      <a
        href=".."
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Instagram"
      >
        <AiFillInstagram size="1.3em" />
      </a>
    </div>
  );
};

export default Social;
