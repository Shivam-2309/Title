import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import logo from '../../assets/Logo_Title1-Photoroom.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <img src={logo} alt="Title Logo" className="hero-logo" />
        <h1>Where Innovation Meets Elegance</h1>
        <p>
          Welcome to Title, your trusted partner for premium bathroom fittings and valves. We offer a wide range of high-quality products designed to elevate your bathroom experience. From sleek fixtures to durable valves, we provide solutions that combine style, functionality, and reliability. Transform your space with Title – where excellence meets elegance.
        </p>
        <a href="/Catalogue_Title.pdf" download className='btn'>
          Download Catalogue <img src={dark_arrow} alt="Arrow icon" />
        </a>
      </div>
    </div>
  );
};

export default Hero;

