/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./screenProyect.css";
import vector2 from "../../../vector2.svg";
import vector3 from "../../../vector3.svg";
import { Carousel } from "antd";
import { ProyectoModel } from "../../../models/proyect.model";
import "antd/dist/antd.css";
import { useState } from "react";
import pagBanco from "../../../image/pagBanco.png";
import efectTarget from "../../../image/effectTarget.png";
import ferrari from "../../../image/ferrariEvolution.png";
import introAnimation from "../../../image/introAnimation.png";
import pagShop from "../../../image/PagShop.png";
import pokeCard from "../../../image/pokeCards.png";

export const Proyect = () => {
  const [proyecto, setProyecto] = useState<ProyectoModel>();

  const onClick = (link: any) => {
    // eslint-disable-next-line no-restricted-globals
    window.open(link, "_blank");
  };

  const proyectos: ProyectoModel[] = [
    {
      nombre: "Pagina Banco",
      descripcion:
        "Aplicación web inspirada en la pagina de los bancos, donde tiene la funcionalidad de un formulario donde uno ingresa datos y dependiendo de la informacion otorgada, te envia un mail donde te dice si podes acceder a un prestamo o no, toda esta funcionalidad esta realizada en PHP.",
      imagen: "../../../image/pagBanco.png",
      link: "tampoco se",
    },
    {
      nombre: "Presentacion mia con animacion",
      descripcion:
        "Animacion realizada con GSAP, con el fin de mostrar una presentacion personal, con una animacion de una conputadora, lenguajes y los frameWorks que uso y mis redes sociales.",
      imagen: "../../../image/effectTarget.png",
      link: "tampoco se",
    },
    {
      nombre: "Evalucion de los autos Ferrari",
      descripcion:
        "Aplicación web que permite visualizar la evolucion por decadas de los autos de la marca Ferrari, con un efecto de parallax.",
      imagen: "../../../image/ferrariEvolution.png",
      link: "tampoco se",
    },
    {
      nombre: "Intro con Animacion",
      descripcion:
        "es un preload creado con GSAP, como una bienvenida a la pagina web.",
      imagen: "../../../image/introAnimation.png",
      link: "tampoco se",
    },
    {
      nombre: "Pag-Shop",
      descripcion:
        "Pagina Web maquetada con el fin de ser una pagina de venta de bicicletas, adaptado para ser responsive.",
      imagen: "../../../image/PagShop.png",
      link: "tampoco se",
    },
    {
      nombre: "Cartas Pokemon",
      descripcion:
        "Aplicación web que permite visualizar los pokemones de la pokeapi, con un efecto 3D de la carta.",
      imagen: "../../../image/pokeCards.png",
      link: "tampoco se",
    },
  ];

  const renderProyectos = (index: number) => {
    setProyecto(proyectos[index]);
  };

  return (
    <>
      <img id="proyectos" src={vector2} alt="vector2" />
      <div className="pantallaProyecto">
        <p>
          <a>Proyectos</a>
        </p>
        <div className="infoProyectos">
          <div className="carrousel">
            <Carousel
              autoplay
              className="carousel"
              style={{ width: "700px", height: "400px" }}
              //   afterChange={(e) => console.log(e)}
              key={proyectos.length}
              beforeChange={(e, i) => {
                renderProyectos(i);
              }}
            >
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/PagShop");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={pagBanco} alt="" />
                </h3>
              </div>
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/intro-animacion");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={efectTarget} alt="" />
                </h3>
              </div>
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/FerrariEvolution");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={ferrari} alt="" />
                </h3>
              </div>
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/gsap-intro");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={introAnimation} alt="" />
                </h3>
              </div>
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/PagShop");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={pagShop} alt="" />
                </h3>
              </div>
              <div
                className="carousel-item"
                onClick={() => {
                  onClick("https://github.com/agusgarone/PokemonCard");
                }}
              >
                <h3 className="contentStyle">
                  <img className="img" src={pokeCard} alt="" />
                </h3>
              </div>
            </Carousel>
            <div className="filter"></div>
          </div>
          <div className="detalle">
            <p className="titulo">{proyecto?.nombre}</p>
            <p style={{ fontSize: 18 }}>{proyecto?.descripcion}</p>
          </div>
        </div>
      </div>
      <img src={vector3} alt="vector3" />
    </>
  );
};

export default Proyect;
