import React from 'react';
import './Aboutme.css';
import { Link } from 'react-router-dom';
import my_portrait from '../../../../images/1-homepage/webp-my-portrait-1.webp';

const Aboutme = () => {
  return (
    <section className="home-aboutme site-container">
      <div className="box-container flex-spacebetween">
        <div className="home-aboutme-content">
          <h2>My Journey As A Marketer</h2>
          <p>
            Hi! I’m Nga — a full-stack digital marketer with 3 years of hands-on
            experience across the entire marketing funnel. I’ve designed
            complete websites from scratch in Figma and brought them to life in
            WordPress. I manage SEO content, social media channels, Facebook
            ads, email marketing, and create marketing materials like posters,
            banners, brochures, and branded documents.
          </p>
          <p>
            Curious about what I can do for your business? Scroll down and
            explore.
          </p>
          <Link
            to="/about-me"
            className="btn-black home-aboutme-btn-1 btn-mt-md">
            About Me
          </Link>
        </div>

        <div className="home-aboutme-img">
          <img src={my_portrait} alt="My portrait" className="rotate" />
        </div>

        <Link to="/about-me" className="btn-black home-aboutme-btn-2">
          About Me
        </Link>
      </div>
    </section>
  );
};

export default Aboutme;
