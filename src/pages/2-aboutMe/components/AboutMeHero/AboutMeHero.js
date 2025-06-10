import React from 'react';
import './AboutMeHero.css';
import my_portrait from '../../../../images/2-about-me/webp-my-portrait-2.webp';

const AboutMeHero = () => {
  return (
    <section className="aboutme-hero site-container-hero" id="top-page">
      <div className="box-container flex-spacebetween">
        <div className="aboutme-hero-content">
          <h1 className="text-align-center-mobile">
            👋Welcome to my site!{' '}
            <span className="highlight-text">I’m Nga.</span>
          </h1>
          <p className="text-align-center-mobile white-text">
            I’m a self-taught English speaker and front-end developer, and a
            full-stack digital marketer with 3 years of hands-on experience.
            I’ve built multiple websites from scratch using WordPress, managed
            social media platforms, run advertising campaigns, and designed
            marketing materials aligned with brand identities across channels.
          </p>
          <p className="text-align-center-mobile white-text">
            My journey hasn’t followed a straight line from high school to
            university to career, like many of my peers — or maybe like yours.
            It’s been a zigzag path full of ups and downs: from self-doubt to
            confidence, from tears to smiles, from factory worker to marketer.
            But through it all, I’ve stayed consistent and persistent over the
            last 10 years.
          </p>
        </div>
        <div className="aboutme-hero-img">
          <img src={my_portrait} alt="My Portrait" className="rotate" />
        </div>
      </div>
    </section>
  );
};

export default AboutMeHero;
