import React from 'react';
import './HireMeHero.css';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPinterestSquare } from 'react-icons/fa';

const HireMeHero = () => {
  return (
    <section className="site-container-hero" id="top-page">
      <div className="box-container">
        <h1 className="text-align-center">Let’s work together! 🚀</h1>
        <p className="text-align-center">
          Are you looking for a marketer who blends strategy with strong visual
          communication? With over 3 years of hands-on experience in digital
          marketing, I help brands transform goals into compelling content that
          resonates and converts. From strategic planning to copywriting and
          design, I create clear, results-driven work that engages the right
          audience at the right time.
        </p>
        <h4 className="text-align-center">Let’s connect</h4>
        <div className="hire-me-contact-info flex-center">
          <a
            href="mailto:nga.nguyen.marketer@gmail.com"
            className="dark-grey-text flex-center"
            aria-label="Send email to nga.nguyen.marketer@gmail.com">
            <MdEmail />
            <span>nga.nguyen.marketer@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nga-nguyen-marketer/"
            className="dark-grey-text flex-center">
            <FaLinkedin />
            <span>linkedin.com/in/nga-nguyen-marketer</span>
          </a>

          <a
            href="https://www.pinterest.com/russianganguyen97/"
            className="dark-grey-text">
            <FaPinterestSquare />
            <span>Visit My Pinterest</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HireMeHero;
