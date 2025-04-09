import React from 'react';
import './ParallaxImage.css'; 
import bgPicture from "../../assets/p1.jpg"; // Corrected import

const ParallaxImage = ({ flag }) => {
  return (
    <div className="parallax">
      {flag !== '2' && (
        <iframe
          className="parallax-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097645!2d77.2240571!3d28.651008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzAzLjYiTiA3N8KwMTMnMzUuOSJF!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
          loading="lazy"
          title="Google Maps Location" 
        ></iframe>
      )}
      {flag === '2' && (
        <img src={bgPicture} alt="Parallax Background" className="parallax-image" />
      )}

      {flag === '0' && (
        <div className="parallax-content">
          For the customer and by the customer
        </div>
      )}
    </div>
  );
};

export default ParallaxImage;
