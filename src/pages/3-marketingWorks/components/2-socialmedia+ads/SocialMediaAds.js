import React from 'react';
import FBad1 from '../../../../images/3-marketing-works/resized/facebook-ad-1.jpg';
import FBad2 from '../../../../images/3-marketing-works/resized/facebook-ad-2.jpg';
import FBad3 from '../../../../images/3-marketing-works/resized/facebook-ad-3.jpg';
import './SocialMediaAds.css';

const SocialMediaAds = () => {
  return (
    <section
      className="social-media-ads site-container-no-bg"
      id="social-media-ads">
      <div className="box-container">
        <h2 className="dark-yellow-text">
          Social media content and Facebook ads
        </h2>
        <h4>Overview:</h4>
        <p>
          During my time at European Eye Center, I created and managed multiple
          Facebook posts and ad campaigns that successfully generated leads and
          increased engagement through likes, shares, and comments. Below are a
          few of the most effective campaigns, presented as a showcase of my
          work. To respect the confidentiality of the company involved, I have
          not included data related to lead conversions or backend insights.
          Instead, I’ve included publicly available elements such as ad
          screenshots, direct Facebook post URLs, and a clear summary of my
          responsibilities for each campaign. Thank you for your understanding.
        </p>
        <h4>My Role:</h4>
        <ul>
          <li>Created content</li>
          <li>Designed visuals using Photoshop</li>
          <li>Set up and ran the campaigns in Meta Ads Manager</li>
          <li>Responded to patient inquiries when needed</li>
          <li> Replied to all comments</li>
        </ul>
        <div className="FB-ads-grid">
          <div className="flex-center-colum">
            <img src={FBad1} alt="Facebook Ad 1" loading="lazy" />
            <div className="FBad-overview">
              <h4>The Facebook Ad #1</h4>
              <p>
                <strong>Reactions:</strong> 428 likes
              </p>
              <p>
                <strong>Comments:</strong> 70 (from international patients,
                Vietnamese, and expats in Vietnam)
              </p>
              <p>
                <strong>Shares:</strong> 26
              </p>
              <p>
                <strong>URL: </strong>
                <a href="https://www.facebook.com/EECHCMC/posts/pfbid0263rtTUycWruvo9ESfw6MnLwvNajAutmmhqXpuKo7Xx2GACZhJx82tGvU22MxMb7Xl">
                  View the ad on Facebook
                </a>
              </p>
            </div>
          </div>

          <div className="flex-center-colum">
            <img src={FBad2} alt="Facebook Ad 2" loading="lazy" />
            <div className="FBad-overview mt-adjust">
              <h4>The Facebook Ad #2</h4>
              <p>
                <strong>Reactions:</strong> 334 likes
              </p>
              <p>
                <strong>Comments:</strong> 31 (from international patients,
                Vietnamese, and expats in Vietnam)
              </p>
              <p>
                <strong>Shares:</strong> 4
              </p>
              <p>
                <strong>URL: </strong>
                <a href="https://www.facebook.com/EECHCMC/posts/pfbid0qXjyeiDTroJWSStj3oLiuHmD4fdLnx3E64uRtSUxHoJPDV2KqvfTMypj4Aa8Lw2fl">
                  View the ad on Facebook
                </a>
              </p>
            </div>
          </div>

          <div className="flex-center-colum">
            <img src={FBad3} alt="Facebook Ad 3" loading="lazy" />
            <div className="FBad-overview">
              <h4>The Facebook Ad #3</h4>
              <p>
                <strong>Reactions:</strong> 140 likes
              </p>
              <p>
                <strong>Comments:</strong> 12
              </p>
              <p>
                <strong>Shares:</strong> 0
              </p>
              <p>
                <strong>URL: </strong>
                <a href="https://www.facebook.com/photo/?fbid=1065855665548573&set=a.534718231995655">
                  View the ad on Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaAds;
