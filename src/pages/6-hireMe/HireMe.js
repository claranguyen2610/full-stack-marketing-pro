import React from 'react';
import SEO from '../../components/SEO';
import { hireMeContent } from '../data';
import HireMeHero from './components/HireMeHero';
import HireMeBlackBox from './components/HireMeBlackBox';
import HireMeYellowBox from './components/HireMeYellowBox';

const HireMe = () => {
  return (
    <>
    <SEO
  title="Are You Looking for a Full-Stack Digital Marketer? Let's Work Together"
  description="Work with Nga Nguyen — a full-stack digital marketer blending strategy, design, and technology. Explore marketing services, tools used, and proven results. Let’s build something impactful together."
  url="https://fullstackmarketingpro.com/hire-full-stack-marketer"
/>

    <main>
      <HireMeHero />
      <HireMeBlackBox
        h3={hireMeContent[0].h3}
        jobType={hireMeContent[0].jobType}
        taskList={hireMeContent[0].taskList}
      />
      <HireMeYellowBox
        h3={hireMeContent[1].h3}
        jobType={hireMeContent[1].jobType}
        taskList={hireMeContent[1].taskList}
      />
      <HireMeBlackBox
        h3={hireMeContent[2].h3}
        jobType={hireMeContent[2].jobType}
        taskList={hireMeContent[2].taskList}
      />
      <HireMeYellowBox
        h3={hireMeContent[3].h3}
        jobType={hireMeContent[3].jobType}
        taskList={hireMeContent[3].taskList}
      />
    </main>
    </>
  );
};

export default HireMe;
