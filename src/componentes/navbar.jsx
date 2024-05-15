import "../css/navbar.css";
import Ayuda from '../paginas/ayuda.jsx';

function Navbar() {
  return (
    <nav className="navegacion">
      <div className="logo">
        <div className="plant_ico"></div>
        <h1>
          Casa <br />
          Ecologica
        </h1>
      </div>
      <div className="nav_opcions">
        <div className="flag">

        </div>
        <a href="#">Historia</a>
        <a href="#">Quiz</a>
        <a href="#">Ayuda</a>
      </div>
    </nav>
  );
}

export default Navbar;
