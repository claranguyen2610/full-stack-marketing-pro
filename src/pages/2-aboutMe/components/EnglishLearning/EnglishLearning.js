import React from 'react';
import './EnglishLearning.css';
import event_me from '../../../../images/2-about-me/event-me.jpg';

const EnglishLearning = () => {
  return (
    <section className="aboutme-english-learning site-container">
      <div className="box-container flex-spacebetween">
        <div className="aboutme-english-learning-img">
          <h2>Struggling in School Doesn’t Mean You’ll Struggle Forever</h2>
          <img src={event_me} alt="I was in Anahill school event" />
        </div>
        <div className="aboutme-english-learning-content">
          <p>
            I used to be a terrible student in high school, especially in
            English. My scores were often below 5, sometimes as low as 2 or 3.
            But that doesn’t mean I could never become fluent, or work in
            English-speaking environments later on. I started teaching myself
            English at 20, after a painfully awkward moment with a foreign
            customer at the grocery store where I worked as a salesperson. He
            smiled and said, “Hello, how are you?” — and I replied, “I am 20
            years old.” That confused look on his face is still unforgettable.
          </p>
          <p>
            The very next day, I bought an English book from a nearby bookstore
            and began learning from scratch. My co-workers laughed — including
            my boss, who was my aunt, and the other staff, who were my
            neighbors. They knew I was not so good at school, especially
            English, and they thought it was a silly dream. I worked from 6 AM
            to 7 or 8 PM every single day, including weekends. After dinner and
            a shower, it would already be 8.30 or 9 PM. That was when others
            rested — and I opened my book and phone to study on my own.
          </p>
          <p>
            Why didn’t I quit my job to focus on studying or ask my parents for
            support? I wish I could have. But their finances didn’t allow for
            that. Stopping work meant no savings, and sometimes, no food. So I
            kept going. I worked and lived there for 4 years before moving out
            to pursue an associate’s degree.{' '}
            <strong>
              With no tutors, no paid courses, no outside help, and zero cost
            </strong>{' '}
            — just pure determination — I eventually became able to communicate
            in English after 3 years of self-study.
          </p>
          <p>
            <strong>
              It’s now been almost 8 years, and I’m still continuing — not just
              communicating in English, but self-teaching coding and design
              entirely in English, and working in English-speaking environments
              while doing marketing in English.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnglishLearning;
