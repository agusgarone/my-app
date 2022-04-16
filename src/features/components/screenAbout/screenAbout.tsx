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
import { Trans, useTranslation } from "react-i18next";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const About = () => {
  const onClick = (link: any) => {
    // eslint-disable-next-line no-restricted-globals
    window.open(link, "_blank");
  };

  const { t, i18n } = useTranslation();

  // window.onload = function () {
  //   Particles.init({
  //     selector: ".pantallaAbout"
  //   });
  // };
  // const particlesInit = async({
  //   selector: ".pantallaAbout",
  //   color: ["#03dac6", "#ff0266", "#000000"],
  //   connectParticles: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       options: {
  //         color: ["#faebd7", "#03dac6", "#ff0266"],
  //         maxParticles: 43,
  //         connectParticles: false
  //       }
  //     }
  //   ]
  // });

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      <div className="pantallaAbout">
        <div className="particulas">
          <Particles
            className="particulas"
            id="tsparticles"
            init={particlesInit}
            height={"100"}
            width={"100"}
            options={{
              style: {
                width: "300",
                height: "300",
                position: "absolute",
                zIndex: "-1",
              },
              fpsLimit: 120,
              particles: {
                color: {
                  value: ["#141814", "#545454", "#232323"],
                },
                links: {
                  color: { value: ["#141814", "#545454", "#232323"] },
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 1000,
                  },
                  value: 40,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              // detectRetina: true,
            }}
          />
        </div>
        <div className="AboutMe">
          <p className="titulo">
            <a id="sobreMi">
              <Trans i18nKey="sobreMi">sobreMi</Trans>
            </a>
          </p>
          <p className="info">
            <Trans i18nKey="descripcionMia">descripcionMia</Trans>
          </p>
        </div>
        <hr className="lineaDivisora" />
        <div className="cursos">
          <p>
            <Trans i18nKey="cursos">cursos</Trans>
          </p>
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
          <p>
            <Trans i18nKey="tecnologiasQueManejo">tecnologiasQueManejo</Trans>
          </p>
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
