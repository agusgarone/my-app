/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./screenHome.css";
// import { Navbar } from "../navBar/navBar";

// export const Home = () => {
//   window.addEventListener("scroll", () => {
//     const navbar = document.querySelector(".navbar");
//     navbar?.classList.toggle("sticky", window.scrollY > 0);
//   });

//   return (
//     <>
//       <div className="pantallaInicio">
//         <a id="Inicio"></a>
//         <Navbar />
//         <div className="contenedor">
//           <div className="parteIzq">
//             <div className="info">
//               <p
//                 style={{
//                   color: "white",
//                   fontSize: 55,
//                   marginBottom: 0,
//                   textAlign: "left",
//                 }}
//               >
//                 Agustin Garone
//               </p>
//               <p
//                 style={{
//                   color: "#777977",
//                   fontSize: 38,
//                   marginTop: 0,
//                   textAlign: "left",
//                 }}
//               >
//                 Frontend developer
//               </p>
//             </div>
//           </div>
//           <div className="parteDer">
//             <p style={{ color: "white" }}>foto mia</p>
//           </div>
//         </div>
//         <a href="#sobreMi" className="scroll-down">
//           <div className="mouse">
//             <span></span>
//           </div>
//           <div className="arrow">
//             <span></span>
//           </div>
//         </a>
//       </div>
//       <img src={vector1} alt="vector1" className="vector1" />
//     </>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import Styled from "styled-components";
import Parallax from "parallax-js";
import PropTypes from "prop-types";

import backgroundImage from "../../../icons/background.jpg";
import react from "../../../icons/react.png";
import js from "../../../icons/javascript.png";
import css from "../../../icons/css.png";
import html from "../../../icons/html.png";
import dart from "../../../icons/dart.png";

const layers = [
  {
    name: "text",
    image: react,
    dataDepth: "0.1",
  },
  {
    name: "astronaut",
    image: js,
    dataDepth: "1.5",
  },
  {
    name: "planet1",
    image: css,
    dataDepth: "0.8",
  },
  {
    name: "planet2",
    image: html,
    dataDepth: "-0.5",
  },
  {
    name: "rocket",
    image: dart,
    dataDepth: "0.5",
  },
];

const Container = Styled.div`
  width: 100%;
	height: 100vh;
  display: block;
	overflow: hidden;
	background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ParallaxImagesContainer = ({
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

  return (
    <Container backgroundImage={backgroundImage}>
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
  );
};

ParallaxImagesContainer.propTypes = {
  backgroundImage: PropTypes.string,
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      dataDepth: PropTypes.string,
    })
  ),
};

ParallaxImagesContainer.defaultProps = {
  backgroundImage: backgroundImage,
  layers: layers,
};

export default ParallaxImagesContainer;
