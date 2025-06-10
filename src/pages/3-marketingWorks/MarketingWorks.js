import React from 'react';
import SEO from '../../components/SEO'
import MarketingWorksHero from './components/0-marketingworkshero/MarketingWorksHero';
import Branding from './components/1-branding/Branding';
import SocialMediaAds from './components/2-socialmedia+ads/SocialMediaAds';
import MarketingCampaigns from './components/3-marketingcampaigns/MarketingCampaigns';
import EmailMarketing from './components/4-emailmarketing/EmailMarketing';
import EventCoordination from './components/5-event-coordination/EventCoordination';

const MarketingWorks = () => {
  return (
    <>
    <SEO
  title="Marketing Portfolio | Nga Nguyen - Full-Stack Digital Marketer"
  description="Discover a full-stack digital marketer who blends strategy with technology to build impactful, conversion-focused websites and campaigns. From SEO and design to automation and analytics, I deliver results through MarTech, creativity, and code."
  url="https://fullstackmarketingpro.com/marketing-portfolio"
/>

    <main>
      <MarketingWorksHero />
      <Branding />
      <SocialMediaAds />
      <MarketingCampaigns />
      <EmailMarketing />
      <EventCoordination />
    </main>
    </>
  );
};

export default MarketingWorks;
