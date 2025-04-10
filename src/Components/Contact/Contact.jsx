import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';

// Access key pulled from environment variable
const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      setResult(res.message);
      event.target.reset();
    } else {
      setResult(res.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          We’d love to hear from you! Whether you have a question about our products, need
          assistance with your project, or just want to share your feedback, our team is here to
          help.
        </p>
        <ul className="contact-list">
          <li>
            <img src={mail_icon} alt="mail icon" />
            <span>Contact@Title</span>
          </li>
          <li>
            <img src={phone_icon} alt="phone icon" />
            <span>8844XXXXXX</span>
          </li>
          <li>
            <img src={location_icon} alt="location icon" />
            <span>
              Hauz Qazi <br /> Chawri Bazaar, Delhi 110006
            </span>
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />

          <label>Write your messages here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="btn dark-btn1">
            Submit now <img src={white_arrow} alt="submit arrow" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
