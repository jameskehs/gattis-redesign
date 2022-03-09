import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img
          id="logo"
          src="./Images/Icons/gattis-logo.png"
          alt="Gattis Pizza Logo"
        />
      </Link>

      <nav>
        <Link to="/menu">Menu</Link>
        <Link to="/games">Games</Link>
        <Link to="/events">Events</Link>
        <Link to="/rewards">Rewards</Link>
        <Link to="/order">Order Now</Link>
      </nav>
    </header>
  );
};

export default NavBar;
