import React from 'react';
import './About.css';
import about_video from '../../assets/title-video.mp4';

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <video className='about-video' autoPlay loop muted>
          <source src={about_video} type="video/mp4" />
        </video>
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Pioneering Leaders in Bathroom Fittings</h2>
        <p>
          At <strong>Title</strong>, we take pride in being industry leaders with over <strong>50+ years of experience</strong> in delivering exceptional bathroom fittings and valves. With a legacy of <strong>1000+ successful projects</strong>, we have earned the trust of countless customers by combining innovation, quality, and unmatched expertise.
        </p>
        <p>
          Our journey is driven by a <strong>high passion for excellence</strong> and a commitment to transforming bathrooms into spaces of luxury and functionality. Guided by the visionary leadership of <strong>Mr. Narendar Dhawan</strong>,  <strong>Mr. Anish Dhawan</strong>, and <strong>Mr. Piyush Dhawan</strong>, our core team brings decades of experience, dedication, and a customer-first approach to every project.
        </p>
        <p>
          At Title, we don’t just sell products – we deliver solutions that inspire. Whether it’s a modern upgrade or a complete renovation, our team is here to make your vision a reality.
        </p>
      </div>
    </div>
  );
}

export default About;
