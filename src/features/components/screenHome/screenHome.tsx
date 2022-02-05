import "./screenHome.css";
import { Navbar } from "../navBar/navBar";
import vector1 from "../../../vector1.svg";
export const Home = () => {
  return (
    <>
      <div className="pantallaInicio">
        <Navbar />
        <div className="contenedor">
          <div className="parteIzq">
            <div className="info">
              <p
                style={{
                  color: "white",
                  fontSize: 55,
                  marginBottom: 0,
                  textAlign: "left",
                }}
              >
                Agustin Garone
              </p>
              <p
                style={{
                  color: "#777977",
                  fontSize: 38,
                  marginTop: 0,
                  textAlign: "left",
                }}
              >
                Frontend developer
              </p>
            </div>
          </div>
          <div className="parteDer">
            <p style={{ color: "white" }}>foto mia</p>
          </div>
        </div>
      </div>
      <img src={vector1} alt="vector1" className="vector1" />
    </>
  );
};

export default Home;
