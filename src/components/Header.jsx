import React from "react";
import { Link } from "react-router-dom";
import '../css/NavBar.css'

function Header() {
  return (
    <nav className="navBar">
      <div className="navLogo">
        <Link to="/">Movies.</Link>
      </div>
      <div className="navLinks">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/Fav" className="navLink">Favourites</Link>
      </div>
    </nav>
  );
}

export default Header;
