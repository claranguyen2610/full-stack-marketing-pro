import React from 'react';
import { webProjects } from '../data';
import WebProjectSingle from './components/WebProjectSingle';
import WebProjectHero from './components/WebProjectHero';
import SEO from '../../components/SEO'

const WebProjects = () => {
  return (
    <>
    <SEO
  title="UX/UI Project Portfolio | Full-Stack Website Design"
  description="Explore UX/UI case studies by Nga Nguyen, featuring website design and development for European Eye Center, Top Vision Eyewear, and Blincq Solutions. Built with WordPress, Figma, and a user-first mindset."
  url="https://fullstackmarketingpro.com/uxui-project-portfolio"
/>

    <main className="web-projects">
      <WebProjectHero />
      {webProjects.map(webProject => {
        const {
          id,
          h2,
          h4,
          description,
          result,
          image,
          webURL,
          projectURL
        } = webProject;
        return (
          <WebProjectSingle
            key={id}
            h2={h2}
            h4={h4}
            description={description}
            result={result}
            image={image}
            webURL={webURL}
            projectURL={projectURL}
          />
        );
      })}
    </main>
    </>
  );
};

export default WebProjects;
