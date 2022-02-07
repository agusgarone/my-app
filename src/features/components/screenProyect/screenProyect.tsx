/* eslint-disable jsx-a11y/anchor-is-valid */
import "./screenProyect.css";
import vector2 from "../../../vector2.svg";
import vector3 from "../../../vector3.svg";
import { Carousel } from "antd";
import "antd/dist/antd.css";

export const Proyect = () => {
  return (
    <>
      <img src={vector2} alt="vector2" />
      <div className="pantallaProyecto">
        <p>
          <a id="proyectos">Proyectos</a>
        </p>
        <div className="infoProyectos">
          <div className="carrousel">
            <Carousel
              autoplay
              className="carousel"
              style={{ width: "600px", height: "400px" }}
              //   afterChange={(e) => console.log(e)}
              beforeChange={(e) => console.log("pantalla anterior", e)}
            >
              <div>
                <h3 className="contentStyle">1</h3>
              </div>
              <div>
                <h3 className="contentStyle">2</h3>
              </div>
              <div>
                <h3 className="contentStyle">3</h3>
              </div>
              <div>
                <h3 className="contentStyle">4</h3>
              </div>
              <div>
                <h3 className="contentStyle">5</h3>
              </div>
            </Carousel>
          </div>
          <div className="detalle">
            <p className="titulo">nombre proyecto</p>
            <p>descripcion proyecto</p>
          </div>
        </div>
      </div>
      <img src={vector3} alt="vector3" />
    </>
  );
};

export default Proyect;
