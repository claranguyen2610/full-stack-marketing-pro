import React from 'react';
import './MarketingWorksHero.css';

const MarketingWorksHero = () => {
  return (
    <section className="marketing-works-hero site-container-hero" id="top-page">
      <div className="box-container text-align-center">
        <h1>
          What <span className="highlight-text"> Marketing Works </span>Are
          Included on This Page?
        </h1>
        <p className="white-text">
          Click the buttons below to quickly browse or jump straight to the
          marketing project you're most interested in.
        </p>

        <div className="marketing-works-btns">
          <div className="marketing-works-navigation flex-center">
            <a href="#branding" className="btn-yellow-stroke">
              Branding
            </a>
            <a href="#social-media-ads" className="btn-yellow-stroke">
              Social media content & FB ads
            </a>
            <a href="#marketing-campaigns" className="btn-yellow-stroke">
              Best Marketing Campaigns
            </a>
            <a href="#email-marketing" className="btn-yellow-stroke">
              Email marketing
            </a>
            <a href="#event-coordination" className="btn-yellow-stroke">
              Event Coordination
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingWorksHero;
