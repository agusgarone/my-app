/* eslint-disable jsx-a11y/anchor-is-valid */
import "./screenAbout.css";
import img1 from "../../../image1.png";
import img2 from "../../../image2.png";
import stars from "../../../Estrellas.png";
import react from "../../../icons/react.png";
import js from "../../../icons/javascript.png";
import css from "../../../icons/css.png";
import html from "../../../icons/html.png";
import dart from "../../../icons/dart.png";
import github from "../../../icons/github.png";

export const About = () => {
  const onClick = (link: any) => {
    // eslint-disable-next-line no-restricted-globals
    window.open(link, "_blank");
  };
  return (
    <>
      <div className="pantallaAbout">
        <div className="AboutMe">
          <p className="titulo">
            <a id="sobreMi">Sobre mi</a>
          </p>
          <p className="info">
            Soy (titulo secundario), actualmente estoy trabajando en Bewise,
            tengo 19 años, me apasiona el desarrollo web y con muchas ganas de
            seguir aprendiendo nuevos conocimientos en este mundo de la
            tecnologia.
          </p>
        </div>
        <hr className="lineaDivisora" />
        <div className="cursos">
          <p>Cursos</p>
          <div className="tarjetasCursos">
            <div
              className="tarjeta curso1"
              onClick={() =>
                onClick(
                  "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/"
                )
              }
            >
              <img src={img1} alt="img1" className="imgTarj" />
              <p className="infoTarj">
                Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS
              </p>
              <img src={stars} alt="stars" className="stars" />
            </div>
            <div
              className="tarjeta curso2"
              onClick={() =>
                onClick(
                  "https://www.udemy.com/course/curso-de-desarrollo-web-completo-2/"
                )
              }
            >
              <img src={img2} alt="img2" className="imgTarj" />
              <p className="infoTarj">Curso de Desarrollo Web Completo 2.0</p>
              <img src={stars} alt="stars" className="stars" />
            </div>
          </div>
        </div>
        <hr className="lineaDivisora" />
        <div className="tecnologias">
          <p>Tecnologias que manejo</p>
          <div className="icons">
            <img src={react} alt="react" className="icon" />
            <img src={js} alt="js" className="icon" />
            <img src={css} alt="css" className="icon" />
            <img src={html} alt="html" className="icon" />
            <img src={github} alt="github" className="icon" />
            <img src={dart} alt="dart" className="icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
