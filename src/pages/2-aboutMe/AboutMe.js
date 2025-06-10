import React from 'react';
import AboutMeHero from './components/AboutMeHero/AboutMeHero';
import EnglishLearning from './components/EnglishLearning/EnglishLearning';
import UniEnroll from './components/UniEnroll/UniEnroll';
import CodeLearning from './components/CodeLearning/CodeLearning';
import SEO from '../../components/SEO'

const AboutMe = () => {
  return (
    <>
    <SEO
  title="About Me | Nga Nguyen - Full-Stack Digital Marketer"
  description="Learn about my journey from learning English and enrolling in university to becoming a self-taught full-stack marketer and coder."
  url="https://fullstackmarketingpro.com/about-me"
/>

    <main>
      <AboutMeHero />
      <EnglishLearning />
      <UniEnroll />
      <CodeLearning />
    </main>
    </>
  );
};

export default AboutMe;
