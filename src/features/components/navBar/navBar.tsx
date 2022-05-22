import { useEffect } from "react";
import "./navBar.css";
import { Trans, useTranslation } from "react-i18next";

export const Navbar = () => {
  useEffect(() => {
    // const btnOpen = document.querySelector(".btn-open")!;
    // btnOpen.addEventListener("click", () => {
    //   myFunction();
    // });
    // function myFunction() {
    //   const listaConfig = document.querySelector(".listConfig")!;
    //   listaConfig.classList.toggle("activo");
    // }
    // myFunction();
  }, []);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    console.log("lenguaje", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar">
      <div className="izq">
        <p style={{ fontSize: 30, margin: 0 }}>Agustin Garone</p>
      </div>
      <div className="centro">
        <ul>
          <li className="btn">
            <a href="#Inicio">
              <Trans i18nKey="inicio">Inicio</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#sobreMi">
              <Trans i18nKey="sobreMi">sobreMi</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#proyectos">
              <Trans i18nKey="proyectos">proyectos</Trans>
            </a>
          </li>
          <li className="btn">
            <a href="#contacto">
              <Trans i18nKey="contactos">contactos</Trans>
            </a>
          </li>
        </ul>
      </div>
      <div className="der">
        <p className="btn-open">
          <Trans i18nKey="configuracion">configuracion</Trans>
        </p>
      </div>
      <div className="listConfig">
        <div className="cabecera">
          {/* <p className="titulos">
            <Trans i18nKey="configuracion">configuracion</Trans>
          </p> */}
          {/* <p className="cerrarConfig"></p> */}
        </div>
        {/* <div className="tema"> */}
        {/* <p className="titulos">Tema</p> */}
        {/* <div className="temas">
            <p>rojo</p>
            <p>verde</p>
            <p>negro</p>
          </div> */}
        {/* </div> */}
        {/* <div className="tema"> */}
        {/* <p className="titulos">Idioma</p> */}
        {/* <div className="temas"> */}
        <p className="lang up" onClick={() => changeLanguage("es")}>
          <span>ES</span>
        </p>
        <p className="lang down" onClick={() => changeLanguage("en")}>
          <span>EN</span>
        </p>
        <p className="lang down" onClick={() => changeLanguage("it")}>
          <span>IT</span>
        </p>
        {/* <p>Italiano</p> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Navbar;
