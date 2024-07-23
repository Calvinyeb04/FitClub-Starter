import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/AstroWorld-Logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="header-menu">
        <li><Link to="/">Gym</Link></li>
        <li><Link to="/health-wellness">Health & Wellness</Link></li>
      </ul>
    </div>
  );
};

export default Header;
