import React from 'react';
import SEO from '../../components/SEO'
import DesignPortfolioHero from './components/0-DesignPortfolioHero/DesignPortfolioHero';
import StudentProject from './components/1-student-project/StudentProject';
import LogoRefineDesign from './components/2-logo-design-refine/LogoRefineDesign';
import CategoryBaseDesign from './components/3-category-base/CategoryBaseDesign';

const DesignPortfolio = () => {
  return (
    <>
    <SEO
  title="Design Portfolio | Posters, Banners, Social Media & Print"
  description="Explore Nga Nguyen's design portfolio featuring creative work across posters, banners, social media graphics, Facebook ads, editorial layouts, and more. A balance of creativity, clarity, and brand consistency."
  url="https://fullstackmarketingpro.com/graphic-design-portfolio"
/>

    <main>
      <DesignPortfolioHero />
      <StudentProject />
      <LogoRefineDesign />
      <CategoryBaseDesign />
    </main>
    </>
  );
};

export default DesignPortfolio;
