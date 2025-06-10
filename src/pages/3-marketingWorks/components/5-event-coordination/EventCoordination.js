import React from 'react';
import EECevent from '../../../../images/3-marketing-works/resized/EEC event .jpg';
import EECevent1 from '../../../../images/3-marketing-works/resized/EEC event 1.jpg';
import EECevent2 from '../../../../images/3-marketing-works/resized/EEC event 2.jpg';
import EECevent3 from '../../../../images/3-marketing-works/resized/EEC event 3.jpg';
import EECeventFBpost1 from '../../../../images/3-marketing-works/resized/EEC Event FB post 1.jpg';
import EECeventFBpost2 from '../../../../images/3-marketing-works/resized/EEC Event FB post 2.jpg';
import EECeventFBpost3 from '../../../../images/3-marketing-works/resized/EEC Event FB post 3.jpg';
import EECeventFBpost4 from '../../../../images/3-marketing-works/resized/EEC Event FB post 4.jpg';
import './EventCoordination.css';

const EventCoordination = () => {
  return (
    <section
      className="event-coordination site-container-no-bg"
      id="event-coordination">
      <div className="box-container">
        <h2 className="dark-yellow-text">
          Event Coordination - THE U.S. CONSULATE HEALTH FAIR 2024
        </h2>
        <h4>Event Overview:</h4>
        <p>
          The European Eye Center was honored to participate in the Health Fair
          hosted by the U.S. Consulate General – Ho Chi Minh City on January 17,
          2024. Dr. JD Ferwerda delivered an informative speech on Dry Eye
          Syndrome, and we also provided three complimentary eye tests:
        </p>
        <ul>
          <li>Vision tests</li>
          <li>Eye pressure tests</li>
          <li>Dry eye tests</li>
        </ul>
        <p>
          We were pleased and pleasantly surprised by the considerable interest
          and concern shown by attendees in our eye tests. The addition of a
          mini-game added to the enjoyment of the event, making the overall
          experience smooth and delightful.
        </p>
        {/*----- My roles -----*/}
        <h4>My Roles: </h4>
        <p>
          When the manager notified me that our clinic was invited to join the
          event at The American Center by the U.S. Consulate, I immediately
          conducted a quick meeting with the manager and listed all the
          information needed to prepare for the health fair booth. I worked on
          the booth ideas, decided the overall mood, messages, and marketing
          materials we would bring to the booth. After the idea was approved, I:
        </p>
        <ul>
          <li>Designed the backdrop</li>
          <li>
            Designed 2 standees for the left and right sides of the backdrop (as
            seen in the photo below)
          </li>
          <li>Created flyers and business cards to distribute to attendees</li>
          <li>Designed 2 hand-held hashtag signs</li>
          <li>Printed all of my designs</li>
          <li>Joined the booth setup</li>
          <li>
            Engaged and communicated with both Vietnamese and foreign attendees,
            switching between Vietnamese and English
          </li>
          <li>
            Published and updated event information on social media (Facebook,
            LinkedIn, Zalo) and responded to Facebook comments
          </li>
        </ul>
        <strong>
          This event gave me the opportunity to manage an offline marketing
          booth from concept to execution, and to apply my design and
          communication skills in a real-world, bilingual setting. Below are
          some event photos, in which I am the girl with short hair, wearing a
          grey shirt and black skirt.
        </strong>
        {/* ---------event images------ */}
        <div className="event-images">
          <div className="health-fair-images flex-spacebetween">
            <div>
              <img src={EECevent} alt="event images" loading="lazy" />
            </div>
            <div>
              <img src={EECevent1} alt="event images" loading="lazy" />
            </div>
          </div>
          <div className="health-fair-images flex-spacebetween">
            <div>
              <img src={EECevent2} alt="event images" loading="lazy" />
            </div>
            <div>
              <img src={EECevent3} alt="event images" loading="lazy" />
            </div>
          </div>
        </div>
        {/* ---------facebook post images------ */}
        <div className="health-fair-social-media">
          <strong>
            Here are 4 Facebook posts that I created and published before and
            after the event:
          </strong>
          <div className="health-fair-fb-content flex-start">
            <div className="health-fair-fb-posts flex-spacebetween">
              <div className="health-fair-images flex-center-column flex-2">
                <div>
                  <img
                    src={EECeventFBpost1}
                    alt="event images"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={EECeventFBpost2}
                    alt="event images"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="health-fair-images flex-center-column flex-1">
                <div>
                  <img
                    src={EECeventFBpost3}
                    alt="event images"
                    loading="lazy"
                  />
                </div>
                <div>
                  <img
                    src={EECeventFBpost4}
                    alt="event images"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventCoordination;
