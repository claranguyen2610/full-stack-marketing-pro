import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="home-hero site-container-hero" id="top-page">
      <div className="box-container flex-center-column">
        <h5 className="text-align-center">
          I help brands grow through digital marketing, content, and design.
        </h5>
        <h1 className="text-align-center">
          <span className="highlight-text">A Full-Stack Digital Marketer </span>
          With Unique Blend of Creativity, Strategy & Tech.
        </h1>
        <p className="text-align-center white-text">
          Looking for a digital marketing expert? Grab a cup of coffee and —
          browse through this portfolio to see how I can help your business
          thrive.
        </p>
        <a href="/" className="btn-yellow btn-mt-sm">
          View My CV (Resume)
        </a>
        <div className="home-hero-btn" />
      </div>
    </section>
  );
};

export default Hero;
