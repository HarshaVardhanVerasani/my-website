import React from "react";
import Countries from "../../assets/countries.png";
import Crm from "../../assets/crm.jpg";
import Ecom from "../../assets/e-com.jpg";
import Games from "../../assets/games.jpg";
import Netflix from "../../assets/netflix.jpeg";
import Reds from "../../assets/redstore.jpg";
import "./portfolio.css";

const objArr = [
  {
    title: "E-commerce app",
    image: `${Ecom}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/E-commerce-app-React",
    liveDemo: "https://project-black-six.vercel.app/",
    description:
      "Build responsive, accessible, and dynamic web pages to enable users to navigate the site easily with all working functionalities",
    techStacks: [
      "HTML",
      "CSS",
      "React",
      "Chakra UI",
      "React Redux",
      "Redux ToolKit",
      "Bootstrap",
      "React Icons",
      "Axios",
    ],
  },
  {
    title: "Games Store",
    image: `${Games}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/Games-Store",
    liveDemo: "https://games-store-topaz.vercel.app/",
    description:
      "This a game store you play games from this store. Right now they are limited games new games will arrive soon",
    techStacks: [
      "React",
      "HTML",
      "CSS",
      "React Toastify",
      "React ToolTip",
      "Chakra UI",
    ],
  },

  {
    title: "CRM Application",
    image: `${Crm}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/crm_frontend",
    liveDemo: "https://crm-frontend-delta.vercel.app/",
    description:
      "This is an customer relation management website where user rise the complains and engineers will resolve those issues update back in crm app.",
    techStacks: [
      "React.js",
      "Redux",
      "Redux TollKit",
      "Bootstrap",
      "Node.js",
      "MongoDB",
      "Axios",
      "React Toastify",
      "Material Table",
    ],
  },
  {
    title: "Netflix Clone",
    image: `${Netflix}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/netflix",
    liveDemo: "https://netflix-dusky-seven.vercel.app/",
    description:
      "This website consists of everything form authentication and movies and fully responsive design watch trailers of the movies and different genres of movies.",
    techStacks: [
      "React",
      "Redux",
      "Redux TollKit",
      "Material UI",
      "Axios",
      "React Toastify",
    ],
  },
  {
    title: "Countries Finding App",
    image: `${Countries}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/countries_finder",
    liveDemo: "https://countries-finder-rho.vercel.app/",
    description: "This website consists all countries you click on any country get the more information like population and location of the country and their native languages, currency & symbol and region etc...",
    techStacks: ["React", "Bootstrap", "Axios"],
  },
  {
    title: "Red Store",
    image: `${Reds}`,
    githubLink: "https://github.com/HarshaVardhanVerasani/Red-Store-Static",
    liveDemo:
      "https://harshavardhanverasani.github.io/Red-Store-Static/E-commerce/src/html/index.html",
    description:
      "This is Static version of RedStore Website conceptual design of e-commerce",
    techStacks: ["HTML", "CSS", "JavaScript"],
  },
];

const Portfolio = () => {
  return (
    <section id="projects">
      <h4 style={{ textAlign: "center" }}>My Recent Work</h4>
      <h2 style={{ color: "var(--color-primary)" }}>Portfolio</h2>
      <div className="container portfolio__container">
        {objArr.map((obj, i) => {
          const {
            title,
            image,
            githubLink,
            liveDemo,
            description,
            techStacks,
          } = obj;
          return (
            <article className="portfolio__item" key={i}>
              <div className="portfolio_img">
                <img src={image} alt={title} />
              </div>
              <h3 style={{ color: "var(--color-primary)" }}>{title}</h3>
              <div className="description">
                <p>{description}</p>
                <h4>Tech Stacks Used</h4>
                <div className="tech-stacks">
                  {techStacks.map((el, i) => (
                    <span className="badge" key={i}>
                      {el}
                    </span>
                  ))}
                </div>
              </div>
              <div className="cta">
                <a href={githubLink} target="__blank" className="btn">
                  GitHub
                </a>
                <a href={liveDemo} target="__blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
