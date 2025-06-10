import React from 'react';
import './MarketingCampaigns.css';
// import medicalTourismPage from '../../../../images/3-marketing-works/resized/medical-tourism-page.webp';
import medicalTourismBlogs from '../../../../images/3-marketing-works/resized/medical-tourism-blogs.jpg';
import medicalTourismWhatclinic from '../../../../images/3-marketing-works/resized/medical-tourism-whatclinic.webp';
import orthoK_campaign from '../../../../images/3-marketing-works/resized/orthok-campaign.webp';
import medicalTourismFBPost1 from '../../../../images/3-marketing-works/resized/medical-tourism-FB-post-1.jpg';
import medicalTourismFBPost2 from '../../../../images/3-marketing-works/resized/medical-tourism-FB-post-2.jpg';
import medicalTourismFBPost3 from '../../../../images/3-marketing-works/resized/medical-tourism-FB-post-3.jpg';
import medicalTourismPage from '../../../../images/4-web-project/EEC-web-project/screencapture-europeaneyecenter-en-eye-surgery-in-vietnam-2025-06-08-13_36_15.webp';

const MarketingCampaigns = () => {
  return (
    <section
      className="marketing-campaigns site-container-no-bg"
      id="marketing-campaigns">
      <div className="box-container">
        <h2 className="dark-yellow-text">Best Marketing Campaigns</h2>
        {/* ---------MEDICAL TOURISM CAMPAIGN--------- */}
        <div className="medical-tourism-campaign">
          <h3>1. Medical Tourism Campaign:</h3>
          <p>
            <em>
              To respect company confidentiality, this section focuses on the
              process—from brainstorming to execution and general
              outcomes—without disclosing backend data or internal insights.
              Thank you for your understanding.
            </em>
          </p>
          <h4 className="dark-grey-text">Challenge</h4>
          <p>
            One day, my bosses came to me and told me they wanted to attract
            more international patients who were not living in Vietnam to choose
            our clinic for eye care as part of their medical tourism journey.
            They understood the global eye care market better than I did and
            shared many insights about medical tourism worldwide—insights that I
            still appreciate today because they saved me a lot of time
            researching from scratch. They also gave me the names of the
            countries I should focus on.
          </p>
          <p>
            After a short discussion with them, I had a general understanding of
            the global eye care tourism market and their target regions. The
            main question left was:{' '}
            <strong>
              {' '}“How can we attract these patients and make them aware of our
              clinic?”
            </strong>
          </p>
          <h4 className="dark-grey-text">Brainstorm Phase</h4>
          <p>
            As with any marketing challenge, I began with in-depth research and
            asked questions whenever I hit a knowledge gap. I explored the
            general landscape of medical tourism, and then focused specifically
            on eye care-related tourism in countries like Vietnam, India, and
            Turkey. I documented all my insights, platform suggestions, and
            content ideas in a Google Docs file as part of my ideation process.
          </p>{' '}
          {/* ----------excution overview---------- */}
          <h4 className="dark-grey-text">Execution overview</h4>
          <h5 className="dark-grey-text">1. Dedicated Landing Page</h5>
          <p>
            I proposed and created a new SEO-optimized landing page specifically
            for international patients considering eye surgery in Vietnam. The
            page focused on high-intent keywords like:{' '}
            <strong>
              LASIK in Vietnam, laser eye surgery Vietnam, cataract surgery
              Vietnam cost, and more.
            </strong>{' '}
            View the page here:{' '}
            <a href="https://europeaneyecenter.com/en/eye-surgery-in-vietnam/">
              Explore Medical Tourism for Eye Surgery in Vietnam
            </a>{' '}
            or <strong>CLICK</strong> the image below and{' '}
            <strong>SCROLL</strong> to view fully.
          </p>
          <div className="marketing-campaign-img-container medical-tourism-page-img">
            <img
              src={medicalTourismPage}
              alt="Medical Tourism Landing Page"
              loading="lazy"
            />
          </div>
          {/* ----------whatclinic---------- */}
          <div className="medical-tourism-whatclinic flex-spacebetween">
            <div className="medical-tourism-whatclinic-text">
              <h4 className="dark-grey-text">
                2. Medical Tourism Directories (e.g., WhatClinic)
              </h4>
              <p>
                The clinic already had listings on platforms like WhatClinic,
                but the content was outdated and basic. And I:
              </p>
              <ul>
                <li>
                  Rewrote all descriptions to better reflect the clinic’s
                  quality and services
                </li>
                <li>
                  Replaced the old doctor photo with an updated professional one
                </li>
                <li>
                  Added more visual content to build credibility and boost trust
                </li>
                <li>Optimized text for SEO and conversion</li>
              </ul>
              <p>
                Visit{' '}
                <a href="https://www.whatclinic.com/eye-clinics/vietnam/ho-chi-minh-city/binh-thanh-district-ho-chi-minh/european-eye-center">
                  European Eye Center WhatClinic
                </a>
              </p>
            </div>
            <div className="medical-tourism-whatclinic-img marketing-campaign-img-container ">
              <img
                src={medicalTourismWhatclinic}
                alt="Medical Tourism"
                loading="lazy"
              />
            </div>
          </div>
          {/* ----------medical torism blog---------- */}
          <div className="medical-tourism-blog flex-spacebetween">
            <div className="img-desktop medical-tourism-blogs-img marketing-campaign-img-container ">
              <img
                src={medicalTourismBlogs}
                alt="Medical Tourism Blog Content"
                loading="lazy"
              />
            </div>
            <div className="medical-tourism-blog-content">
              <h4 className="dark-grey-text">3. Blog Content</h4>
              <p>
                I wrote blog articles focused on educating international
                patients and addressing their travel and treatment concerns,
                including:
              </p>
              <ul>
                <li>
                  <a href="https://europeaneyecenter.com/en/combine-dental-care-with-eye-surgery-on-your-vietnam-medical-tourism-trip/">
                    Combine Dental Care with Eye Surgery on Your Vietnam Medical
                    Tourism Trip
                  </a>
                </li>
                <li>
                  <a href="https://europeaneyecenter.com/en/5-things-to-know-before-traveling-abroad-for-eye-surgery/">
                    5 Things to Know Before Traveling Abroad for Eye Surgery
                  </a>
                </li>
                <li>
                  <a href="https://europeaneyecenter.com/en/why-vietnam-is-becoming-the-go-to-destination-for-affordable-eye-surgeries/">
                    Why Vietnam Is Becoming the Go-To Destination for Affordable
                    Eye Surgeries
                  </a>
                </li>
                <li>
                  <a href="https://europeaneyecenter.com/en/choose-vietnam-for-your-eye-surgery-during-the-christmas-and-new-year-holiday/">
                    Why choose Vietnam for your eye surgery during the Christmas
                    and New Year holidays?
                  </a>
                </li>
              </ul>
            </div>
            <div className="img-mobile medical-tourism-blogs-img marketing-campaign-img-container">
              <img
                src={medicalTourismBlogs}
                alt="Medical Tourism Blog Content"
                loading="lazy"
              />
            </div>
          </div>
          {/* ----------medical torism facebook---------- */}
          <h4 className="dark-grey-text">4. Facebook Posts</h4>
          <p>
            At first, Facebook wasn’t part of my initial plan for this campaign.
            But over time, I noticed that some of our international followers
            sometimes shared our clinic’s posts to their own feeds. That made me
            realize Facebook could be a valuable platform to reach more
            international patients.
          </p>
          <p>
            So, I started creating more content related to medical tourism for
            eye care, especially around key times like the Christmas holiday and
            the summer travel season.
          </p>
          <div className="medical-tourism-FBpost flex-spacebetween">
            <div className="marketing-campaign-img-container">
              <img
                src={medicalTourismFBPost1}
                alt="medical-tourism-FBpost"
                loading="lazy"
              />
            </div>
            <div className="marketing-campaign-img-container">
              <img
                src={medicalTourismFBPost2}
                alt="medical-tourism-FBpost"
                loading="lazy"
              />
            </div>
            <div className="marketing-campaign-img-container">
              <img
                src={medicalTourismFBPost3}
                alt="medical-tourism-FBpost"
                loading="lazy"
              />
            </div>
          </div>
          {/* -----------Results (General Overview)------------ */}
          <div className="medical-tourism-campaign-result">
            <h4 className="dark-grey-text">Results (General Overview)</h4>
            <ul>
              <li>
                We saw a significant increase in international leads via both
                the website and social platforms.
              </li>
              <li>
                The campaign{' '}
                <strong>doubled international patient conversions</strong> and{' '}
                <strong>tripled inbound inquiries</strong> from abroad.
              </li>
              <li>
                <strong>
                  The landing page and two blog articles ranked in the top 5–10
                  on Google
                </strong>{' '}
                for key search terms such as: LASIK in Vietnam, cataract surgery
                cost in vietnam, Cataract Surgery in Vietnam, Eye Laser Vietnam,
                laser eye surgery vietnam cost and more.
              </li>
            </ul>
          </div>
        </div>
        {/* ----------ORTHO-K CAMPAIGN---------- */}
        <div className="orthoK-campaign">
          <h3>2. Ortho-K Promotion Campaign (Seasonal campaign)</h3>
          <div className="orthoK-campaign-content flex-spacebetween">
            <div className="orthoK-campaign-left">
              <h4 className="dark-grey-text">Objective:</h4>
              <p>
                Raise awareness and interest in Ortho-K (Dream Lens) among
                parents of children aged 8–12 in HCMC and surrounding provinces.
              </p>
              <img
                src={orthoK_campaign}
                alt="Ortho-k campaign"
                loading="lazy"
              />
            </div>
            <div className="orthoK-campaign-right">
              <div className="my-role">
                <h4 className="dark-grey-text">My Role:</h4>
                <ul>
                  <li>
                    Conceptualized the full campaign and defined its audience
                    and structure
                  </li>
                  <li>
                    Designed bilingual A4 poster and homepage banner to promote
                    in-clinic and online visibility
                  </li>
                  <li>
                    Created a 16-week content plan (educational + promotional),
                    publishing 10+ posts across Facebook, Zalo, and Instagram
                  </li>
                  <li>
                    Developed multilingual email campaigns (EN/VN/JP),
                    segmenting patient data from Odoo and collaborating with a
                    translator
                  </li>
                  <li>
                    Ran one Facebook ad to test audience response; paused
                    further spending based on performance review
                  </li>
                </ul>
              </div>
              <div className="reflection mt-lg">
                <h4 className="dark-grey-text">Reflection</h4>
                <p>
                  This campaign helped me better understand how to balance
                  education and promotion, manage price-sensitive products
                  online, and adapt digital execution to real-world feedback.
                  Most conversions came through in-clinic consultation, showing
                  the importance of multi-touch communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingCampaigns;
