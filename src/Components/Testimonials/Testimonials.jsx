import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user from '../../assets/user-main.png';

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Rakesh Kapoor</h3>
                  <span>Homeowner, Delhi</span>
                </div>
              </div>
              <p>"Title transformed my bathroom into a luxurious retreat! Their fittings are top-notch, and the team was incredibly professional. Highly recommended for anyone looking for quality and style."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Tanishka Katyal</h3>
                  <span>Home Owner, Mumbai</span>
                </div>
              </div>
              <p>"I’ve worked with Title on multiple projects, and their products never disappoint. Their valves and fittings are durable, stylish, and perfect for modern designs."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Ankur Rathi</h3>
                  <span>Builder, Delhi</span>
                </div>
              </div>
              <p>"Title has been our go-to supplier for bathroom fittings. Their products are reliable, and their team is always supportive. A trusted partner for all our projects."</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user} alt="" />
                <div>
                  <h3>Ananya Reddy</h3>
                  <span>Architect, Hyderabad</span>
                </div>
              </div>
              <p>"The quality and finish of Title’s fittings are exceptional. They’ve helped us deliver stunning bathrooms to our clients. Truly a brand you can trust!"</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;