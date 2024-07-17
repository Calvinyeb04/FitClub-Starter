import React from "react";
import "./Header.css";
import AstroWorldLogo from "../../assets/AstroWorld-Logo.png"; // Corrected import statement

const Header = () => {
  return (
    <div className="header">
      <img src={AstroWorldLogo} alt="AstroWorld Logo" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}

export default Header;
