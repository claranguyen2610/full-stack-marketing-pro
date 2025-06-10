import React from 'react';
import { Link } from 'react-router-dom';
import './HomePortfolio.css';
import marketingImg from '../../../../images/1-homepage/marketing-work.jpg';
import webDesignImg from '../../../../images/1-homepage/website-project.jpg';
import graphicDesignImg from '../../../../images/1-homepage/graphic-design.jpg';

const HomePortfolio = () => {
  return (
    <section className="home-portfolio site-container-no-bg">
      <div className="box-container">
        <h2>Explore My Work Portfolio</h2>
        <div className="home-portfolio-content">
          <div className="home-portfolio-block">
            <div className="home-portfolio-img">
              <img src={marketingImg} alt="Marketing Works" />
            </div>
            <article>
              <h3>Marketing Works</h3>
              <p>
                See how I applied my skills at European Eye Center across
                various marketing initiatives — from social media campaigns to
                content creation — and drove measurable results.
              </p>
              <div className="home-portfolio-btn btn-mt-md">
                <Link to="/marketing-portfolio" className="btn-yellow">
                  Learn More
                </Link>
              </div>
            </article>
          </div>

          <div className="home-portfolio-block">
            <div className="home-portfolio-img web-project-img1">
              <img src={webDesignImg} alt="Website projects" />
            </div>
            <article>
              <h3>Website Projects</h3>
              <p>
                Curious about my website skills? Explore the websites I’ve
                designed and developed for real companies — each project
                showcases how I combine strategy, design, and functionality to
                solve real business problems. See the results for yourself.
              </p>
              <div className="home-portfolio-btn btn-mt-md">
                <Link
                  to="/uxui-project-portfolio"
                  className="btn-black btn-mt-md">
                  Learn More
                </Link>
              </div>
            </article>
            <div className="home-portfolio-img web-project-img2">
              <img src={webDesignImg} alt="Website projects" />
            </div>
          </div>

          <div className="home-portfolio-block">
            <div className="home-portfolio-img">
              <img src={graphicDesignImg} alt="Design Portfolio" />
            </div>
            <article>
              <h3>Design Portfolio</h3>
              <p>
                Need a visual break? Take a moment to browse through my graphic
                design portfolio and explore a collection of creative pieces
                I’ve crafted — from marketing visuals to brand assets, each
                design tells its own story.
              </p>
              <div className="home-portfolio-btn btn-mt-md">
                <Link to="/graphic-design-portfolio" className="btn-yellow">
                  Learn More
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
