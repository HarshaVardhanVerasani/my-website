import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Projects from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Tooltip id="my-tooltip" style={{color:"var(--color-primary)"}}/>
    </div>
  );
}

export default App;
