import React from 'react';
import './WebProjectHero.css';

const WebProjectHero = () => {
  return (
    <section className="web-projects-hero site-container-hero" id="top-page">
      <div className="box-container">
        <h1 className="white-text text-align-center">
          WordPress{' '}
          <span className="highlight-text">
            Website Design & Development
          </span>{' '}
          Projects
        </h1>
        <p className="white-text text-align-center">
          These website projects reflect my unique position as a marketer who
          also designs. While I’m not a professional UI/UX designer, I create
          websites that are clean, functional, and aligned with brand strategy —
          without relying on flashy animations or overly artistic layouts.{' '}
          <span className="highlight-text">
            What you’ll find here are websites thoughtfully crafted with
            marketing goals in mind: brand clarity, SEO structure, and user
            journeys that support business outcomes.
          </span>{' '}
          I design to communicate, convert, and reflect the brand — not just to
          impress. Click <strong className="highlight-text">“See Full Project” </strong>to explore how each
          site was built to solve real-world problems through a blend of
          marketing strategy, content thinking, and practical design.
        </p>
      </div>
    </section>
  );
};

export default WebProjectHero;
