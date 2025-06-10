import React from 'react';
import eecFullOldLogo from '../../../../images/5-design-portfolio/logos/eec-full-old-logo.jpg';
import eecOldLogoIcon from '../../../../images/5-design-portfolio/logos/eec-old-logo-icon.jpg';
import eecOldLogo1 from '../../../../images/5-design-portfolio/logos/eec-old-logo-2.jpg';
import eecOldLogo2 from '../../../../images/5-design-portfolio/logos/eec-old-logo-3.jpg';
import eecMainLogo from '../../../../images/5-design-portfolio/logos/main-logo.jpg';
import eecProfileLogo from '../../../../images/5-design-portfolio/logos/profile-logo.jpg';
import eecLogoIconNew from '../../../../images/5-design-portfolio/logos/logo-icon.jpg';
import eecNewLogoInUse from '../../../../images/5-design-portfolio/logos/new-logo-in-use.jpg';
import TVEOldLogo1 from '../../../../images/5-design-portfolio/logos/TVE-old-logo.jpg';
import TVEOldLogo2 from '../../../../images/5-design-portfolio/logos/TVE-old-logo-1.jpg';
import TVERefinedLogo from '../../../../images/5-design-portfolio/logos/TVE-full-logo-1.jpg';
import TVERefinedLogoInUse from '../../../../images/5-design-portfolio/logos/TVE-logo-in-use.jpg';
import TVERefinedLogoInUse1 from '../../../../images/5-design-portfolio/logos/TVE-logo-in-use-1.jpg';
import TVERefinedLogoInUse2 from '../../../../images/5-design-portfolio/logos/TVE-logo-in-use-2.jpg';
import TVELogoDraft from '../../../../images/5-design-portfolio/logos/tve-logo-drawing.jpg';
import TVENewLogo from '../../../../images/5-design-portfolio/logos/TVE-new-logo.jpg';
import TVENewLogoInUse1 from '../../../../images/5-design-portfolio/logos/TVE-new-logo-in-use.jpg';
import TVENewLogoInUse2 from '../../../../images/5-design-portfolio/logos/TVE-new-logo-in-use-1.jpg';
import { PiArrowFatLineRightFill } from 'react-icons/pi';
import './LogoRefineDesign.css';

const LogoRefineDesign = () => {
  return (
    <section
      className="logo-design-refine site-container-no-bg"
      id="logo-refine-design">
      <div className="box-container">
        <h2 className="dark-yellow-text">Logo Design & Refinement</h2>
        {/* --------European Eye Center Logo Refinement---------- */}

        <div className="eec-logo-refine design-container">
          <h3>European Eye Center Logo Refinement</h3>
          {/* The challenges: */}
          <h5>The challenges: </h5>
          <p>
            When I joined European Eye Center, the logo initially looked
            professional and clean. However, once I began applying it across
            various digital and print materials, several issues became apparent:
          </p>
          <ul>
            <li>
              The logo colors were inconsistent and didn’t align with the
              brand's official color scheme (dark green and dark blue). In
              practice, the logo appeared in light blue and dark blue —
              depending on where it was used.
            </li>
            <li>
              The logo’s line weight was too thin. While it looked acceptable on
              digital platforms, it lacked visibility and impact in print.
            </li>
          </ul>
          <div className="eec-old-logo">
            <img src={eecFullOldLogo} alt="European Eye Center Old Log" />
          </div>
          {/* My solutions */}
          <h5>My solutions:</h5>
          <p>With the approval of management, I refined the logo to ensure:</p>
          <ul>
            <li>Visual consistency across all platforms and materials</li>
            <li>
              Proper use of brand colors instead of varying color versions
            </li>
            <li>
              Clear visibility at any size, with improved thickness and contrast
              for both print and digital use
            </li>
          </ul>
          {/* My roles & tools I used: */}
          <h5>My roles & tools I used:</h5>
          I led the logo refinement process, gathering feedback from managers,
          finalizing improved versions, and systematically replacing the old
          logo across all company assets.{' '}
          <p>
            <strong>Tools:</strong> Adobe Illustrator, Adobe Photoshop
          </p>
          {/* Before and after refinement: */}
          <h5>Before and after refinement:</h5>
          <p>
            <strong>BEFORE:</strong> Below are old logo icon, old colored logo
            and white logo version on Facebook post designs
          </p>
          <div className="eec-old-logos flex-spacebetween">
            <div className="eec-old-logos-inside flex-spacebetween">
              <div>
                <img src={eecOldLogoIcon} alt="European Eye Center Old Logo" />
              </div>
              <div>
                <img
                  src={eecOldLogo2}
                  alt="European Eye Center Old Logo"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="eec-old-logo-single">
              <img
                src={eecOldLogo1}
                alt="European Eye Center Old Logo"
                loading="lazy"
              />
            </div>
          </div>
          <p>
            <strong>AFTER:</strong> Here are logo versions after refinement
          </p>
          <div className="eec-refined-logos grid-3-columns custom-flex-mobile">
            <div className="full flex-center-column">
              <p>Main logo</p>
              <img src={eecMainLogo} alt="European Eye Center New Logo" />
            </div>
            <div className="half flex-center-column">
              <p>Profile logo</p>
              <img src={eecProfileLogo} alt="European Eye Center New Logo" />
            </div>
            <div className="half flex-center-column">
              <p>Logo icon</p>
              <img src={eecLogoIconNew} alt="European Eye Center New Logo" />
            </div>
          </div>
          <strong>Refined logo in use</strong>
          <img
            src={eecNewLogoInUse}
            alt="European Eye Center refined logo in use"
            className="eec-refined-logo-inUse"
          />
        </div>
        {/* --------Top Vision Eyewear Logo---------- */}
        <div className="tve-logo-refine-design design-container">
          <h3>Top Vision Eyewear Logo Refinement and Design</h3>
          {/* --------Logo Refinement---------- */}
          <h4 className="dark-grey-text">Stage 1: Logo Refinement</h4>
          {/* the challenges */}
          <h5>The challenges: </h5>
          <p>
            At a glance, I was quite confused because the store had two
            different logo versions — one on the store wall and another used on
            its bag design and social media posts.
          </p>
          <div className="tve-old-logos flex-spacebetween">
            <div className="tve-old-logo">
              <p>Inside store logo</p>
              <img
                src={TVEOldLogo1}
                alt="Top Vision Eyewear old logo"
                className="tve-old-logo-1"
              />
            </div>
            <div className="tve-old-logo">
              <p>Logo on bags and social media post designs</p>
              <img
                src={TVEOldLogo2}
                alt="Top Vision Eyewear old logo"
                className="tve-old-logo-2"
              />
            </div>
          </div>
          {/* My solutions: */}
          <h5>My solutions:</h5>
          <div className="tve-logo-refine-solution flex-spacebetween">
            <p className="solution-desciption">
              After careful consideration, I decided to use the logo style from
              the in-store signage across all platforms, with a minor color
              refinement (as shown below) to make the logo system more
              consistent and avoid confusing customers. I also created a logo
              icon for the brand, as there was no icon previously.
            </p>
            <div className="tve-refined-logo-full flex-spacebetween">
              <img src={TVERefinedLogo} alt="Top Vision Eyewear refined logo" />
            </div>
          </div>

          {/* Refine logo in use: */}
          <h5>Refined logo in use:</h5>
          <div className="tve-refined-logo-inUse grid-3-columns custom-flex-mobile">
            <div className="full">
              <img
                src={TVERefinedLogoInUse}
                alt="Top Vision Eyewear refined Logo in use"
              />
            </div>
            <div className="half">
              <img
                src={TVERefinedLogoInUse1}
                alt="Top Vision Eyewear refined Logo in use"
              />
            </div>
            <div className="half">
              <img
                src={TVERefinedLogoInUse2}
                alt="Top Vision Eyewear refined Logo in use"
              />
            </div>
          </div>
          {/* --------Logo design---------- */}
          <h4 className="dark-grey-text">Stage 2: New Logo Design</h4>
          {/* the challenges */}
          <h5>The challenges: </h5>
          <p>
            The refined logo was used consistently across all platforms for over
            a year. However, it was later rejected during the trademark
            registration process due to the brand name being too generic.
            Although the design was clean and consistent, the name itself
            consisted of common, descriptive terms that didn’t meet the
            distinctiveness criteria required for legal protection.
          </p>
          {/* My solutions: */}
          <h5>My solutions:</h5>
          <p>
            After a brief discussion with the manager, I decided to take
            responsibility for designing a new logo from scratch — one that
            would reflect the brand’s premium identity while also supporting the
            trademark registration process.
          </p>
          {/* My roles, tools I used & Results: */}
          <h5>My roles, tools I used & Results:</h5>
          <p>
            I led the logo design process, from drawing on paper, gathering
            feedback from managers, making digital versions with Adobe
            Illustrator
          </p>
          <p>
            <strong>Tools:</strong> Adobe Illustrator
          </p>
          <strong>Result: </strong>
          <ul>
            <li>
              Logo was officially registered and approved by the National Office
              of Intellectual Property of Vietnam (Cục Sở Hữu Trí Tuệ)
            </li>
            <li>
              The new logo has been fully adopted across the company’s digital
              and physical assets, gradually replacing the previous brand
              identity
            </li>
          </ul>
          <div className="tve-logo-design-process-imgs flex-spacebetween">
            <div className="tve-logo-drawing">
              <img src={TVELogoDraft} alt="TVE Logo drawing" />
            </div>
            <div className="arrow-icon flex-center">
              <PiArrowFatLineRightFill className="right-arrow-icon" />
            </div>
            <div className="tve-logo-digital">
              <img src={TVENewLogo} alt="TVE Logo digital" />
            </div>
          </div>
          <strong>New logo in use:</strong>
          <div className="tve-new-logo-inUse flex-spacebetween">
            <div>
              <img
                src={TVENewLogoInUse1}
                alt="TVE new Logo in use"
                className="tve-new-logo-inUse-1"
              />
            </div>

            <div>
              <img
                src={TVENewLogoInUse2}
                alt="TVE new Logo in use"
                className="tve-new-logo-inUse-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoRefineDesign;
