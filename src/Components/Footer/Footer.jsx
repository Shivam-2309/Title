import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <div className='footer'>
      {/* Social Media Icons on the Left */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      {/* Copyright Text */}
      <p>© 2025 Title. All rights reserved.</p>

      {/* Footer Links */}
      <ul>
        <li><a href="" target='_blank'>Terms of Services</a></li>
        <li><a href="" target='_blank'>Privacy Policy</a></li>
      </ul>
    </div>
  );
};

export default Footer;

