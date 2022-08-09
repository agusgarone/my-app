/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./screenHome.css";

import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";
import { Navbar } from "../navBar/navBar";
import vector1 from "../../../vector1.svg";

import backgroundImage from "../../../icons/background.jpg";

import Rectangle53 from "../../../image/decoration/Rectangle53.png";
import Rectangle54 from "../../../image/decoration/Rectangle54.png";
import Rectangle55 from "../../../image/decoration/Rectangle55.png";
import Rectangle56 from "../../../image/decoration/Rectangle56.png";
import Rectangle57 from "../../../image/decoration/Rectangle57.png";
import Rectangle58 from "../../../image/decoration/Rectangle58.png";
import Rectangle59 from "../../../image/decoration/Rectangle59.png";
import Rectangle60 from "../../../image/decoration/Rectangle60.png";
import Rectangle61 from "../../../image/decoration/Rectangle61.png";
import Rectangle62 from "../../../image/decoration/Rectangle62.png";
import Rectangle63 from "../../../image/decoration/Rectangle63.png";
import { Trans, useTranslation } from "react-i18next";

const layers = [
  {
    name: "Rectangle53",
    image: Rectangle53,
    dataDepth: "0.1",
  },
  {
    name: "Rectangle54",
    image: Rectangle54,
    dataDepth: "0.36",
  },
  {
    name: "Rectangle55",
    image: Rectangle55,
    dataDepth: "0.41",
  },
  {
    name: "Rectangle56",
    image: Rectangle56,
    dataDepth: "-0.5",
  },
  {
    name: "Rectangle57",
    image: Rectangle57,
    dataDepth: "-0.2",
  },
  {
    name: "Rectangle58",
    image: Rectangle58,
    dataDepth: "-0.48",
  },
  {
    name: "Rectangle59",
    image: Rectangle59,
    dataDepth: "0.3",
  },
  {
    name: "Rectangle60",
    image: Rectangle60,
    dataDepth: "0.28",
  },
  {
    name: "Rectangle61",
    image: Rectangle61,
    dataDepth: "-0.2",
  },
  {
    name: "Rectangle62",
    image: Rectangle62,
    dataDepth: "0.57",
  },
  {
    name: "Rectangle63",
    image: Rectangle63,
    dataDepth: "0.48",
  },
];

const Container = Styled.div`
  width: 100%;
	height: 100vh;
  display: block;
  position: absolute;
	overflow: hidden;
	background-color: transparent;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Home = ({
  backgroundImage,
  layers,
}: {
  backgroundImage: any;
  layers: any;
}) => {
  useEffect(() => {
    const scene = document.getElementById("scene");
    new Parallax(scene);
  });

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar?.classList.toggle("sticky", window.scrollY > 0);
    const navbarIcon = document.querySelector(".icon-config");
    navbarIcon?.classList.toggle("stickyIcon", window.scrollY > 0);

    const lang = document.querySelectorAll(".lang");
    lang?.forEach((item) => {
      item.classList.toggle("styleLang", window.scrollY > 0);
    });
  });

  const { t } = useTranslation();

  // const changeLanguage = (lng) => {
  //   console.log("lenguaje", lng);
  //   i18n.changeLanguage(lng);
  // };

  return (
    <>
      <Container className="decoration" backgroundImage={backgroundImage}>
        <div id="scene">
          {layers.map((l: any, index: any) => (
            <img
              id={l.name}
              key={index}
              data-depth={l.dataDepth}
              src={l.image}
              alt={l.name}
            />
          ))}
        </div>
      </Container>
      <div className="pantallaInicio">
        <a id="Inicio"></a>
        <Navbar />
        <div className="contenedor">
          <div className="parteIzq">
            <div className="info">
              <p
                className="title"
              >
                Agustin Garone
              </p>
              <p
                className="subtitle"
              >
                Frontend developer
              </p>
            </div>
          </div>
          <div className="parteDer">
            <p style={{ color: "white" }}>foto mia</p>
          </div>
        </div>
        <a href="#sobreMi" className="scroll-down">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>
      <img src={vector1} alt="vector1" className="vector1" />
    </>
  );
};

Home.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string,
    })
  ),
};

Home.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers,
};

export default Home;
