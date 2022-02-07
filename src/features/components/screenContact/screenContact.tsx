/* eslint-disable jsx-a11y/anchor-is-valid */
import "./screenContact.css";
import ig from "../../../icons/instagram.png";
import git from "../../../icons/git.png";
import linkedin from "../../../icons/linkedin.png";
import vector6 from "../../../vector6.svg";
import "antd/dist/antd.css";

export const Contact = () => {
  const onClick = (link: any) => {
    // eslint-disable-next-line no-restricted-globals
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="pantallaContacto">
        <p>
          <a id="contacto" className="titulo">
            Contacto
          </a>
        </p>
        <div className="redesSociales">
          <img
            src={ig}
            alt="ig"
            className="redes ig"
            onClick={() =>
              onClick("https://www.instagram.com/agustin_garone/?hl=es")
            }
          />
          <img
            src={linkedin}
            alt="linkedin"
            className="redes link"
            onClick={() =>
              onClick("https://linkedin.com/in/agust%C3%ADn-garone-1107")
            }
          />
          <img
            src={git}
            alt="git"
            className="redes git"
            onClick={() => onClick("https://github.com/agusgarone")}
          />
        </div>
        <div className="btn-cv">
          <a
            href="/curriculum-vitae- Agustín Garone.pdf"
            download="curriculum-Agustin_Garone"
            className="button"
            id="cv"
          >
            Descargar CV
          </a>
        </div>
        <div className="btn-toUp">
          <a href="#Inicio">Para arriba</a>
        </div>
        <img src={vector6} alt="vector4" className="vector4" />
      </div>
    </>
  );
};

export default Contact;
