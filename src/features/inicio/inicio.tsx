import "./Inicio.css";
import Home from "../components/screenHome/screenHome";
import About from "../components/screenAbout/screenAbout";
import Proyect from "../components/screenProyect/screenProyect";
import Contact from "../components/screenContact/screenContact";

export const Inicio = () => {
  return (
    <div className="body">
      <Home />
      <About />
      <Proyect />
      <Contact />
    </div>
  );
};

export default Inicio;
