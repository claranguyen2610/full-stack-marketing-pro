import React from 'react';
import SEO from '../../components/SEO';
import Hero from './components/1-Hero/Hero';
import Aboutme from './components/2-Aboutme/Aboutme';
import Skillset from './components/3-Skillset/Skillset';
import HomePortfolio from './components/4-MyPortfolio/HomePortfolio';
import MarketingApproach from './components/5-MarketingApproach/MarketingApproach';
import Experience from './components/6-Experience/Experience';

const Home = () => {
  return (
    <>
    <SEO
  title="Full-Stack Digital Marketing | Growing with MarTech"
  description="I'm a full-stack digital marketer with a passion for MarTech, design, and data-driven growth. Explore my journey, skills, and real-world projects—from web design and SEO to marketing automation. Let’s build something meaningful together."
  url="https://fullstackmarketingpro.com/"
/>
    <main>
      <Hero />
      <Aboutme />
      <Skillset />
      <HomePortfolio />
      <MarketingApproach />
      <Experience />
    </main>
    </>
  );
};

export default Home;
