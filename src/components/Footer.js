import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="box-container">
        <div className="footer-logo">
          <Link to="/" className="site-logo-footer">
            NGA NGUYEN
          </Link>
          <p className="tagline white-text">Grow with MarTech</p>
        </div>
        <div className="my-contact-info">
          <h4>Get In Touch With Me</h4>
          <ul>
            <li>
              <a
                href="mailto:nga.nguyen.marketer@gmail.com"
                className="white-text"
                aria-label="Send email to nga.nguyen.marketer@gmail.com">
                <MdEmail />
                <span>nga.nguyen.marketer@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nga-nguyen-marketer/"
                className="white-text">
                <FaLinkedin />
                <span>linkedin.com/in/nga-nguyen-marketer</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/russianganguyen97/"
                className="white-text">
                <FaPinterestSquare />
                <span>Visit My Pinterest</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-btn">
          <a href="#top-page" className="btn-yellow">
            Get Back To The Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
