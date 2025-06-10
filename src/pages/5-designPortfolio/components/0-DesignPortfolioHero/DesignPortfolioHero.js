import React from 'react';
import './DesignPortfolioHero.css';

const DesignPortfolioHero = () => {
  return (
    <section
      className="design-portfolio-hero site-container-hero"
      id="top-page">
      <div className="box-container">
        <h1 className="text-align-center">
          Strategic Design 🎨 for Marketing Impact
        </h1>
        <p className="text-align-center">
          While I’m not a fully trained graphic designer, I completed a 6-month
          design course that gave me a solid foundation in layout, color, and
          composition. Since then, I’ve applied these skills in real marketing
          contexts — creating visuals that support brand identity, communicate
          clearly, and drive engagement. My design work isn’t focused on visual
          trends or artistic complexity. Instead,{' '}
          <strong>
            I prioritize clarity, function, and brand consistency — whether it’s
            a print ad, social media graphic, or promotional banner. This
            portfolio reflects how I use design as a practical marketing tool{' '}
          </strong>— not just to make things look good, but to help brands
          connect and perform better.
        </p>
        <div className="design-portfolio-hero-btns flex-center">
          <div className="design-portfolio-navigation flex-spacebetween mt-lg">
            <a href="#student-project" className="btn-black-stroke">
              Student Project
            </a>
            <a href="#logo-refine-design" className="btn-black-stroke">
              Logo Design & Refinement
            </a>
            <a href="#category-base-design" className="btn-black-stroke">
              Category-Based Designs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolioHero;
