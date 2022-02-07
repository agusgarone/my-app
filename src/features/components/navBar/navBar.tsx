import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="izq">
        <p style={{ fontSize: 30, margin: 0 }}>Agustin Garone</p>
      </div>
      <div className="centro">
        <ul>
          <li className="btn">
            <a href="#Inicio">Inicio</a>
          </li>
          <li className="btn">
            <a href="#sobreMi">Sobre mi</a>
          </li>
          <li className="btn">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className="btn">
            <a href="#contacto">Contactos</a>
          </li>
        </ul>
      </div>
      <div className="der">
        <p>configuracion</p>
      </div>
    </div>
  );
};

export default Navbar;
