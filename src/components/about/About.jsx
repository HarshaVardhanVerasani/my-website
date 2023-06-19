import { AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiChakraui, SiJavascript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import ME2 from "../../assets/me2.jpeg";
import Reveal from "../framermotion/Reveal";
import "./about.css";

const About = () => {
  return (
    <Reveal>
      <section id="about">
        <div className="container container__about">
          <h4>Get To Know</h4>

          <h2 style={{ color: "var(--color-primary)" }}>About Me</h2>

          <div className="about__skills">
            <div className="me">
              <img src={ME2} alt="me" />
            </div>
            <div className="skills-wrapper">
              <p>
                Highly motivated and adaptable web developer with a passion for
                creating engaging user experiences. Proficient in JavaScript,
                React.js, and Redux.js, with a strong foundation in HTML5 and
                CSS3. Adept at problem-solving and collaborating in dynamic,
                fast-paced environments. Committed to delivering high-quality
                code and achieving lasting impacts on user satisfaction. Eager
                to tackle web development challenges and contribute to
                cutting-edge projects.
              </p>

              <h3>Skills I Have</h3>
              <div className="skills">
                <div className="skill">
                  <AiFillHtml5 size="1em" style={{ color: "orange" }} />
                  <h6>HTML</h6>
                </div>
                <div className="skill">
                  <FaCss3Alt size="1em" style={{ color: "blue" }} />
                  <h6>CSS</h6>
                </div>
                <div className="skill">
                  <SiJavascript size="1em" style={{ color: "yellow" }} />
                  <h6>Java Script</h6>
                </div>
                <div className="skill">
                  <FaReact size="1em" style={{ color: "red" }} />
                  <h6>React</h6>
                </div>
                <div className="skill">
                  <FaBootstrap size="1em" style={{ color: "purple" }} />
                  <h6>Bootstrap</h6>
                </div>
                <div className="skill">
                  <TbBrandRedux
                    size="1em"
                    style={{
                      background: "white",
                      color: "purple",
                      borderRadius: "50%",
                    }}
                  />
                  <h6>Redux</h6>
                </div>
                <div className="skill">
                  <SiChakraui size="1em" style={{ color: "aqua" }} />
                  <h6>Chakra UI</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default About;
