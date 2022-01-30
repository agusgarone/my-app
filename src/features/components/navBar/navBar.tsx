import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="izq">
        <p style={{ fontSize: 30, margin: 0 }}>Agustin Garone</p>
      </div>
      <div className="centro">
        <ul>
          <li className="btn">Inicio</li>
          <li className="btn">Sobre mi</li>
          <li className="btn">Proyectos</li>
          <li className="btn">Contacto</li>
        </ul>
      </div>
      <div className="der">
        <p>configuracion</p>
      </div>
    </div>
  );
};

export default Navbar;
