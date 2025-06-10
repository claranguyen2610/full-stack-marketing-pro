import React from 'react';
import EmailMarketingDesktop from '../../../../images/3-marketing-works/resized/email-marketing.webp';
import EmailMarketingMobile from '../../../../images/3-marketing-works/resized/email-marketing-1.webp';

const EmailMarketing = () => {
  return (
    <section
      className="email-marketing site-container-no-bg"
      id="email-marketing">
      <div className="box-container">
        <h2 className="dark-yellow-text" style={{ marginTop: '-20px' }}>
          Email marketing
        </h2>
        <div className="email-marketing-content">
          <p>
            During my time at European Eye Center, I managed multiple email
            marketing campaigns tailored to English, Vietnamese, and
            Japanese-speaking patient groups.
          </p>
          <strong>Objective: </strong>
          <p>
            Each campaign was designed to retain former and current patients,
            strengthen brand recall, and encourage them to revisit the clinic.
          </p>
          <strong>For each campaign, I was responsible for:</strong>
          <ul>
            <li>Defining target audiences by age and nationality</li>
            <li>Collecting and cleaning patient data (names and emails) </li>
            <li>
              Segmenting contacts into Vietnamese, Japanese, and foreign groups
            </li>
            <li>
              Creating campaign content and graphics in 3 languages
              (collaborated with a Japanese translator)
            </li>
            <li>Styling and scheduling emails using Mailchimp and Odoo</li>
            <li>
              Designed email graphics tailored to each language group:
              Vietnamese, Japanese, and English
            </li>
          </ul>
          <strong>Performance Summary:</strong>
          <ul>
            <li>
              Average Open Rate: <strong>45%</strong>
            </li>
            <li>
              Average Click Rate: <strong>2.45%</strong>
            </li>
          </ul>
          <strong>
            Below are two examples of my English-language campaigns:
          </strong>
          <img
            src={EmailMarketingDesktop}
            alt="Email markerting campaign"
            className="img-desktop mt-lg"
            loading="lazy"
          />
          <img
            src={EmailMarketingMobile}
            alt="Email markerting campaign"
            className="img-mobile mt-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EmailMarketing;
