import React from 'react';
import logo from '../../assets/Logo_Title1-Photoroom.png'
import './NavBar1.css'; 

const NavBar1 = (CatName) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="/" className="nav-link">Home</a>
        <a href="/programs" className='nav-link'>Our Products</a>
        <a href="/contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar1;