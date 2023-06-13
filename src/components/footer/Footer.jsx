import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { ImGithub, ImTwitter } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiSlack } from "react-icons/si";
import { GiBullseye } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <p className="footer__logo">
        <FaCode/> Harsha Vardhan
        <GiBullseye />
      </p>
      <ul className="permanent_links">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://web.whatsapp.com/" target="__blank">
          <IoLogoWhatsapp />
        </a>
        <a href="https://www.facebook.com/home.php" target="__blank">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/" target="__blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/home" target="__blank">
          <ImTwitter />
        </a>
        <a href="https://github.com/HarshaVardhanVerasani" target="__blank">
          <ImGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/harshavardhanverasani/"
          target="__blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://slack.com/" target="__blank">
          <SiSlack />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Harsha vardhan verasni. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
