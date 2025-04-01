// aula 585 - link entre páginas
import { Link, NavLink } from "react-router-dom";

// CSS
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/contact">Contatos</Link> */}

      {/* aula 589 - Link ativo */}
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contatos
      </NavLink>
    </div>
  );
};

export default Navbar;
