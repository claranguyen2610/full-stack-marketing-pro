import React from 'react';
import './ExtraDesigns.css';

const ExtraDesigns = () => {
  return (
    <section className="site-container-no-bg">
      <div className="box-container">
        <h2 className="dark-yellow-text">More Designs</h2>
        <h3>1. Ngoc Dung Beauty Center Pocisure Pro Free Trail Event</h3>
        <p>
          Ngoc Dung Beauty Center is a 5-star reputable beauty brand in Vietnam.
          It has 18 centers located across the country, from the North to the
          South. The brand brings advanced technology and excellent services
          centered around customers. Meanwhile, it consistently cherishes the
          beauty of Vietnamese women through inspiring and warm marketing
          campaigns.
        </p>
        <p>
          I have never worked for the company, but the brand was selected by our
          team for a coursework project at the University of Economics Ho Chi
          Minh City. We were tasked with creating an IMC marketing campaign for
          the brand we selected, including a demo of what we planned to do.
          According to our plan, we deployed multiple marketing activities
          across platforms, from online to offline.
        </p>
        <strong>
          My tasks were designing{' '}
          <span className="dark-yellow-text">a backdrop </span>for the Picosure
          Pro Free Trial Event and creating{' '}
          <span className="dark-yellow-text">
            a poster published online{' '}
          </span>{' '}
          to announce the event. Our main KOL invited to the event was Trinh
          Pham — a famous beauty blogger.
        </strong>
        <p>
          Below are the two designs: the vertical one is the online poster, and
          the horizontal one is the backdrop that will be physically placed at
          the event.
        </p>
        <div className="ngoc-dung-designs flex-spacebetween">
          <div className="ngoc-dung-design-1">
            <img
              src="https://i.pinimg.com/1200x/d9/21/d7/d921d7cb739443d437fc83fefc27bf0d.jpg"
              alt="Ngoc Dung event poster"
            />
          </div>
          <div className="ngoc-dung-design-2">
            <img
              src="https://i.pinimg.com/736x/20/2e/a0/202ea0988dea92ee471110b434b9fc26.jpg"
              alt="Ngoc Dung event backdrop"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraDesigns;
