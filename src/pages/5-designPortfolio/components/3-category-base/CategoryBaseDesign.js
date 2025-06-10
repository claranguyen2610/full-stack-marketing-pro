import React from 'react';
import './CategoryBaseDesign.css';
import { tvSlideAds } from '../../../data';
import Namecard1 from '../../../../images/5-design-portfolio/business-card/first-side.png';
import Namecard2 from '../../../../images/5-design-portfolio/business-card/second-side.png';
import NamecardMockup from '../../../../images/5-design-portfolio/business-card/business-card-mockup.png';

const CategoryBaseDesign = () => {
  return (
    <section
      className="category-based-design site-container-no-bg"
      id="category-base-design">
      <div className="box-container">
        <div className="design-container">
          <h2 className="dark-yellow-text">
            Category-Based Designs - European Eye Center
          </h2>

          {/* Social Media / Facebook Post Designs */}
          <h3>1. Social Media / Facebook Post Designs</h3>
          <div className="short-general-description">
            <div className="btn-black-stroke">Adobe Photoshop</div>
            <div className="btn-black-stroke">Digital materials</div>
            <div className="btn-black-stroke">Flexible sizes</div>
          </div>
          <div className="social-media-designs social-media-designs-1">
            <div className="blephex-design half">
              <img
                src="https://i.pinimg.com/736x/f3/5b/06/f35b06cd5a4609fba568cca750e87491.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
            <div className="aveo-promotion half">
              <img
                src="https://i.pinimg.com/736x/09/a2/e9/09a2e9b4a3609b70e3539371c6e2a19b.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
            <div className="mycon-lenses full">
              <img
                src="https://i.pinimg.com/736x/aa/a7/66/aaa766530e34e4bc42206f5c327074f3.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
          </div>
          <div className="social-media-designs social-media-designs-2">
            <div className="ortho-k-1 half">
              <img
                src="https://i.pinimg.com/736x/9f/cc/ad/9fccad12ff33f3979c8e5ddcf8270d6c.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
            <div className="ortho-k-2 half">
              <img
                src="https://i.pinimg.com/736x/85/91/4e/85914eae974738ed41625e69ff133fc0.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
            <div className="glasses-sale full">
              <img
                src="https://i.pinimg.com/736x/75/65/73/75657318e7dd536fc7b672eb2a75211e.jpg"
                alt="Social Media / Facebook Post Designs"
              />
            </div>
          </div>
        </div>

        {/* In-House TV Display Slides (Digital Screen Ads) */}
        <div className="design-container">
          <h3>2. In-House TV Display Slides (Digital Screen Ads)</h3>
          <div className="short-general-description">
            <div className="btn-black-stroke">Adobe Photoshop</div>
            <div className="btn-black-stroke">Digital materials</div>
            <div className="btn-black-stroke">3840 x 2160 px (4K Ultra HD)</div>
          </div>

          <div className="grid-2-columns-tvads">
            {tvSlideAds.map(tvSlideAd => {
              const { id, url, alt } = tvSlideAd;
              return (
                <div key={id}>
                  <img src={url} alt={alt} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Print Flyer Designs */}
        <div className="design-container">
          <h3>3. Print Flyer Designs</h3>
          <div className="short-general-description">
            <div className="btn-black-stroke">Adobe Photoshop</div>
            <div className="btn-black-stroke">Print materials</div>
            <div className="btn-black-stroke">A5 (148 mm x 210 mm)</div>
          </div>
          <div className="flyer-design flex-spacebetween">
            <div className="flex-1">
              <img
                src="https://i.pinimg.com/736x/8b/cf/3c/8bcf3c23bea23b435680348e96379c80.jpg"
                alt="flyer design"
              />
            </div>
            <div className="flex-2">
              <img
                src="https://i.pinimg.com/736x/2a/90/13/2a9013574b27ee76bfbb99326c2bb24f.jpg"
                alt="flyer design mockup"
              />
            </div>
          </div>
          <div className="flyer-design flex-spacebetween">
            <div className="flex-2">
              <img
                src="https://i.pinimg.com/736x/70/9c/9c/709c9c6a51b262384f9d2c4c432e68c8.jpg"
                alt="flyer design mockup"
              />
            </div>
            <div className="flex-1">
              <img
                src="https://i.pinimg.com/736x/9b/07/3d/9b073dc0dec21ede0cb06652ad387e52.jpg"
                alt="flyer design"
              />
            </div>
          </div>
          <div className="flyer-design flex-spacebetween">
            <div className="flex-1">
              <img
                src="https://i.pinimg.com/736x/20/31/e1/2031e1cc488b01b257aa54a301bc4e58.jpg"
                alt="flyer design"
              />
            </div>
            <div className="flex-2">
              <img
                src="https://i.pinimg.com/736x/de/f4/04/def404e491cbe1aa5a11ae447750d708.jpg"
                alt="flyer design mockup"
              />
            </div>
          </div>
        </div>

        {/* Stationery Design */}
        <div className="design-container">
          <h3>4. Stationery Design</h3>
          <div className="short-general-description">
            <div className="btn-black-stroke">Adobe Photoshop</div>
            <div className="btn-black-stroke">Print materials</div>
            <div className="btn-black-stroke">9cm x 5.4cm</div>
          </div>
          <div className="business-card-design flex-spacebetween">
            <div>
              <img src={Namecard1} alt="business card design" />
            </div>
            <div>
              <img src={Namecard2} alt="business card design" />
            </div>
          </div>
          <div className="business-card-design-mockup">
            <img src={NamecardMockup} alt="Business card mockup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBaseDesign;
