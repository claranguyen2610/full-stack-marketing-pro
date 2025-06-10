import React from 'react';
import '../case-study-style.css';
import { Link } from 'react-router-dom';
import SEO from '../../../../components/SEO'
import BSHomePage from '../../../../images/4-web-project/BS-web-project/screencapture-blincqsolutions-2025-06-09-20_58_13.webp';
import BSAboutUsPage from '../../../../images/4-web-project/BS-web-project/screencapture-blincqsolutions-about-us-blincq-solutions-2025-06-09-20_59_15.webp';
import BSUserManualPage from '../../../../images/4-web-project/BS-web-project/screencapture-blincqsolutions-blincqbox-eye-chart-system-user-manual-2025-06-09-20_59_00.webp';
import BSBlogPage from '../../../../images/4-web-project/BS-web-project/screencapture-blincqsolutions-blogs-2025-06-09-20_59_48.webp';
import caseStudyEEC from '../../../../images/4-web-project/eec-website-mockup.jpg';
import caseStudyTVE from '../../../../images/4-web-project/TVE-website-mockup.jpg';

const BSWebProject = () => {
  return (
    <>
    <SEO
  title="Case Study: Blincq Solutions Website Design | Medical Tech Brand Launch"
  description="See how I designed and developed the first website for Blincq Solutions—a medtech company founded by two ophthalmologists. Built from scratch with WordPress and Figma to introduce their digital eye chart technology and brand identity."
  url="https://fullstackmarketingpro.com/uxui-project-portfolio/blincq-solutions-medical-tech-site"
/>

    <main className="web-project-case-study site-container-hero">
      <section className="box-container">
        <h1>
          <span className="dark-yellow-text">Case Study #3: </span>Blincq
          Solutions Website Design from Scratch (Medical Tech Website)
        </h1>

        <div className="flex-start">
          <div className="case-study-btns flex-spacebetween">
            <a
              href="https://www.figma.com/design/Hk8XC5DPvKHo9YGEpNpVwh/Blincq-solutions?m=auto&t=OVwdXhkRinLYj8to-1"
              className="btn-black">
              Initial Figma Design
            </a>
            <a href="https://blincqsolutions.com/" className="btn-yellow">
              Live Website
            </a>
          </div>
        </div>
        <div className="case-study-note">
          <h3 className="highlight-text">Please note!!</h3>
          <ul className="white-text">
            <li>
              The webiste images may appear slightly blurry because I had to
              compress them to ensure the website loads faster and is lighter.
              If you’d like to see the best version, please visit the website in
              my case study. Thank you so much for your understanding.
            </li>
            <li>
              The Figma mockups may look quite different from the final live
              website. This is because I continuously edited and refined the
              website throughout my working time for the company.
            </li>
            <li>
              I typically designed only the core pages—such as the Product and
              About Us page—on Figma to establish the visual direction and
              present it to the managers for approval. The remaining pages were
              designed and implemented directly on WordPress, following the
              approved styles.
            </li>
            <li>
              You’ll also notice that only desktop versions are shown in Figma.
              That’s because WordPress automatically adapts desktop layouts into
              mobile formats. I relied on this feature and made manual
              adjustments later to ensure everything looked clean and responsive
              on mobile.
            </li>
          </ul>
        </div>
        {/* -------About the brand, website overview and challenge------------ */}
        <div className="about-brand-and-challenge">
          <h3>About The Brand:</h3>
          <p>
            Blincq Solutions Vietnam is a medical tech company that initially
            focused on producing digital eye chart products. It was founded at
            the end of 2024 by Dr. JD Ferwerda (the lead doctor at European Eye
            Center) and Dr. Artem Kozhechenkov.
          </p>
          {/* ----Website Overview---- */}
          <h3>Website Overview:</h3>
          <p>
            Below are four pages from the Blincq Solutions website for your
            reference. Please <strong>CLICK</strong> on each image and{' '}
            <strong>SCROLL DOWN</strong> to view the full page.
          </p>
          <div className="website-before-after">
            <div className="before-page-container">
              <p>Blincq Solutions Home page:</p>
              <div className="before-page">
                <img
                  src={BSHomePage}
                  alt="Blincq Solutions home page"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="after-page-container">
              <p>Blincq Solutions About Us Page: </p>
              <div className="after-page">
                <img
                  src={BSAboutUsPage}
                  alt="Blincq Solutions About Us Page"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="website-before-after mt-xxl">
            <div className="after-page-container">
              <p>Blincq Solutions User Manual page: </p>
              <div className="after-page">
                <img
                  src={BSUserManualPage}
                  alt="Blincq Solutions User Manual page "
                  loading="lazy"
                />
              </div>
            </div>
            <div className="before-page-container">
              <p>Blincq Solutions Blog page:</p>
              <div className="before-page">
                <img
                  src={BSBlogPage}
                  alt="Blincq Solutions Blog page"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/*---------- challenges-------- */}
          <h3 className="mt-xxl">The Challenges:</h3>
          <p>
            Like most companies, Blincq Solutions needed a website to establish
            an online presence as a foundation for growth. One day, Dr. JD
            approached me and asked if I could help design a website to
            introduce their product.
          </p>
          <p>
            In Vietnam and many other countries, ophthalmologists and clinics
            are still accustomed to using traditional physical eye charts. Our
            challenge was to create a website that not only educated people
            about the advantages of digital devices over traditional ones, but
            also clearly communicated what sets our product apart from
            competitors.
          </p>
          <p>
            This type of product was not yet popular in the market, so there
            were few online references or existing examples for inspiration. The
            doctor shared that he wanted something modern and
            tech-oriented—simple but informative, like Apple’s website. That was
            the only design guidance I had to begin with.
          </p>
          <p>
            Since the brand was newly established and lacked a color scheme, I
            also took the lead in finalizing the brand colors before the website
            project officially kicked off.
          </p>
        </div>
        <div className="case-study-my-roles-goals mt-xxl">
          <h3>My Role & Goals</h3>
          {/* ---------------Goals----------- */}
          <h4>Goals:</h4>
          <ul>
            <li>
              Establish an online presence for the brand and its product as
              quickly as possible
            </li>
            <li>
              Gradually build brand awareness and support future marketing
              efforts
            </li>
            <li>
              Build trust with potential customers by ensuring a professional,
              informative website
            </li>
          </ul>
          {/* ---------------My Role----------- */}
          <h4>My Role:</h4>

          <ul>
            <li>
              Selected a reliable hosting provider suitable for a tech startup
            </li>
            <li>
              Defined the brand’s color scheme to reflect its modern,
              technology-driven identity
            </li>
            <li>
              Created the sitemap and structured the website’s navigation for
              ease of use
            </li>
            <li>
              Wrote all website content from scratch, based on limited internal
              documentation
            </li>
            <li>
              Designed the complete website layout in Figma without any existing
              brand or design guidelines
            </li>
            <li>
              Maintained and regularly updated the website until my departure,
              including product page creation, content localization,
              translation, plugin monitoring, and resolving technical issues
            </li>
          </ul>
          {/* -----------Technologies Used and Skills Applie-------- */}
          <h4>Technologies Used and Skills Applied</h4>
          <div className="case-study-tech-skills">
            <div className="btn-black-stroke">Figma (Mockup & Prototype)</div>
            <div className="btn-black-stroke">
              WordPress (Website development & CMS)
            </div>
            <div className="btn-black-stroke">
              HTML/CSS (Custom visual styling)
            </div>
            <div className="btn-black-stroke">
              Google Keyword Planner (Keyword research)
            </div>
            <div className="btn-black-stroke">ChatGPT (content support)</div>
            <div className="btn-black-stroke">
              Photoshop & Canva (Banner design & photo editing)
            </div>
            <div className="btn-black-stroke">
              DNS & cPanel (Domain & hosting management)
            </div>
            <div className="btn-black-stroke">Copywriting</div>
            <div className="btn-black-stroke">SEO</div>
          </div>
        </div>
        {/* --------------- Design Process & Solutions----------- */}
        <div className="design-process-solutions">
          <h3 className="mt-xxl">Design Process & Solutions:</h3>
          {/* --------Research & Analytics------ */}
          <div className="research-analytics">
            <h4>Research & Analytics:</h4>
            <p>
              I started by doing a lot of research on the available
              manufacturers’ websites and other tech websites to understand the
              tech website style. I also conducted small interviews with related
              stakeholders to get a deep insight about the product as well as
              the knowledge of the market.
            </p>
          </div>
          {/* Key Design Decisions & Marketing Strategy */}
          <div className="design-decisions-marketing-strategy">
            <h4>Key Design Decisions & Marketing Strategy</h4>
            {/* -------key decision 1------- */}
            <h5>1. Brand Color</h5>
            <p>
              As a medical tech brand, Blincq Solutions needed a clean and
              professional look. I chose a color scheme built around two accent
              colors: medium-light blue and medium-light green, used primarily
              in the logo and UI highlights (10% of the palette). These were
              balanced by a neutral foundation—60% dark grey for a modern,
              stable feel, and 30% white for clarity and openness. This
              combination delivers a trustworthy and minimal design that aligns
              with the brand’s positioning in the medical technology space
            </p>
            {/* -------key decision 2------- */}
            <h5 className="mt-lg">2. Sitemap Structure</h5>
            <p>
              To keep things streamlined and product-focused, I merged the
              homepage and product page into a single landing page labeled
              “Product” in the menu. This emphasized the brand’s core offering.
            </p>
            <p>I also added:</p>
            <ul>
              <li>About Us – to introduce the company and its founders</li>
              <li>User Manual – to support product adoption</li>
              <li>Blog – to improve SEO and provide ongoing education</li>
            </ul>
            <p>
              The website was built in both Vietnamese and English to serve both
              local and international audiences.
            </p>
          </div>
        </div>
        {/* ----------See more case study------------ */}
        <div className="see-more-case-study-container">
          <h2>Explore More Projects</h2>
          <div className="see-more-case-studies">
            <div className="see-more-case-study">
              <div className="see-more-case-study-img">
                <img
                  src={caseStudyEEC}
                  alt="See case study Top Vision Eyewear"
                />
              </div>
              <div className="see-more-case-study-content">
                <h6 className="white-text">
                  <strong className="white-text">Case Study #1:</strong>{' '}
                  European Eye Center Entire Website Redesign
                </h6>
                <div className="mt-sm">
                  <Link
                    to="/uxui-project-portfolio/full-website-redesign-for-european-eye-center"
                    className="case-study-url">
                    See Project in Detail {'>>'}
                  </Link>
                </div>
              </div>
            </div>
            <div className="see-more-case-study">
              <div className="see-more-case-study-img">
                <img src={caseStudyTVE} alt="See case study Blincq Solutions" />
              </div>
              <div className="see-more-case-study-content">
                <h6 className="white-text">
                  <strong className="white-text">Case Study #2:</strong> Top
                  Vision Eyewear Website Design from Scratch (Hybrid E-commerce
                  Website)
                </h6>
                <div className="mt-sm">
                  <Link
                    to="/uxui-project-portfolio/top-vision-eyewear-hybrid-ecommerce-website"
                    className="case-study-url">
                    See Project in Detail {'>>'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default BSWebProject;
