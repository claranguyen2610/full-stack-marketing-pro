import React from 'react';
import './UniEnroll.css';
import university_enroll from '../../../../images/2-about-me/university-enroll.jpg';

const UniEnroll = () => {
  return (
    <section className="aboutme-uniEnroll site-container-no-bg">
      <div className="box-container flex-spacebetween">
        <div className="aboutme-uniEnroll-img top-img">
          <h2>I had never given up on Marketing</h2>
          <img
            src={university_enroll}
            alt="I was the university of Economics HCMC"
          />
        </div>
        <div className="aboutme-uniEnroll-content">
          <p>
            The first time I heard the word “Marketing” was when I was in 12th
            grade, but I had no idea it would become part of my identity today.
            Back at that time, while my friends were busy deciding if they
            wanted to become accountants, doctors, nurses, software engineers,
            teachers, or go into finance, or other tech areas... I decided to go
            to a factory and become a factory worker — first to feed my hungry
            stomach, and also to buy new clothes and a phone I had wished for so
            long. I didn’t know exactly what I wanted to do with my life yet.
          </p>
          <p>
            After working for a year while continuing to search and understand
            more about marketing, I was finally sure that I would go for it in
            university and make it my career. But I couldn’t act on that
            decision immediately. My parents were not supportive — they feared
            that continuing my education would add more financial stress to the
            family. They couldn’t help me, not even to borrow from the bank. So
            I kept working and saving for three more years.
          </p>
          <p>
            In summer 2019, when my high school friends were celebrating their
            university graduations,{' '}
            <strong>
              I decided to enroll in a quite reputable 3-year college in HCMC
              with my savings, majoring in Marketing
            </strong>. It was how my marketing career started. And now,{' '}
            <strong>
              I am chasing a Bachelor's in Marketing while working full-time as
              a digital marketer and expect to graduate by the end of 2025.
            </strong>
          </p>
          <p>
            I don’t share this to complain — I share it because I know there are
            others like me out there. And if you're one of them, I want you to
            know: you're not alone, and you’re not stuck.
          </p>
        </div>
        <div className="aboutme-uniEnroll-img bottom-img">
          <h2>I had never given up on Marketing</h2>
          <img
            src={university_enroll}
            alt="I was the university of Economics HCMC"
          />
        </div>
      </div>
    </section>
  );
};

export default UniEnroll;
