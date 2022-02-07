import "./Inicio.css";
import { Home } from "../components/screenHome/screenHome";
import About from "../components/screenAbout/screenAbout";
import Proyect from "../components/screenProyect/screenProyect";
import Contact from "../components/screenContact/screenContact";
// import vector1 from "../../vector1.svg";
// import vector2 from "../../vector2.svg";
// import vector3 from "../../vector3.svg";

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
