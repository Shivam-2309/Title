import React, { useState } from 'react';
import logo from '../../assets/Logo_Title1-Photoroom.png';
import menuIcon from '../../assets/menu-icon.png'; // Add this icon
import './NavBar1.css'; 

const NavBar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <img src={menuIcon} alt="Menu" className="menu-icon" onClick={toggleMenu} />

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="/" className="nav-link">Home</a>
        <a href="/programs" className='nav-link'>Our Products</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar1;
