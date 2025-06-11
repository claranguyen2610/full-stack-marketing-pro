import React from 'react';
import { Link } from 'react-router-dom';
import '../case-study-style.css';
import './TVEWebProject.css';
import SEO from '../../../../components/SEO';
import tveOldColorScheme from '../../../../images/4-web-project/TVE-web-project/top-vision-previous-color-scheme.jpg';
import tveNewColorScheme from '../../../../images/4-web-project/TVE-web-project/Top Vision Eyewear New color scheme.jpg';
import tveHomePage from '../../../../images/4-web-project/TVE-web-project/tve desktop.webp';
import tveBlogPage from '../../../../images/4-web-project/TVE-web-project/screencapture-topvisioneyewear-vn-en-blogs-2025-06-08-20_33_15.webp';
import tveStorePage from '../../../../images/4-web-project/TVE-web-project/screencapture-topvisioneyewear-vn-en-store-2025-06-08-20_32_20.jpg';
import tveHelpCenterPage from '../../../../images/4-web-project/TVE-web-project/screencapture-topvisioneyewear-vn-en-help-center-2025-06-08-20_34_30.webp';
import caseStudyEEC from '../../../../images/4-web-project/eec-website-mockup.jpg';
// import caseStudyTVE from '../../../../images/4-web-project/TVE-website-mockup.jpg';
import caseStudyBS from '../../../../images/4-web-project/blincq-website-mockup.jpg';

const TVEWebProject = () => {
  return (
    <>
    <SEO
  title="Case Study: Top Vision Eyewear Website Rebuild | Hybrid E-commerce Site"
  description="After a full domain crash, I rebuilt the Top Vision Eyewear website from scratch using Figma, WordPress, and WooCommerce. This bilingual hybrid e-commerce site restored the brand's digital presence and attracted over 650 monthly visitors."
  url="https://fullstackmarketingpro.com/uxui-project-portfolio/top-vision-eyewear-hybrid-ecommerce-website"
/>

    <main className="web-project-case-study site-container-hero">
      <section className="box-container">
        <h1>
          <span className="dark-yellow-text">Case Study #2: </span>Top Vision
          Eyewear Website Design from Scratch (Hybrid E-commerce Website)
        </h1>
        <h3>Project Snapshot:</h3>
        <p>
          As the sole marketer supporting both European Eye Center and its
          in-house retail brand, I led the complete rebuild of Top Vision
          Eyewear’s website after a critical domain crash erased the original
          site. With no backups or design references, I created the new website
          from scratch—rebranding the domain, redesigning the user experience in
          Figma, and developing a bilingual hybrid e-commerce site using
          WordPress and WooCommerce. The result was a modern, SEO-optimized
          platform that restored the brand’s digital presence, improved trust
          with customers, and steadily grew to ~600 monthly visitors.
        </p>
        <div className="flex-start">
          <div className="case-study-btns flex-spacebetween">
            <a
              href="https://www.figma.com/design/IHgcLAHPhxD3xZK9Lo2o9Z/Top-vision-design?m=auto&t=kzQG3JO6bSrrocG3-1"
              className="btn-black">
              Initial Figma Design
            </a>
            <a href="https://topvisioneyewear.vn/en/" className="btn-yellow">
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
              I typically designed only the core pages—such as the homepage and
              Service page—on Figma to establish the visual direction and
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
            Top Vision Eyewear is a premium optical retail brand under the same
            management as European Eye Center. This project was part of my role
            at European Eye Center, where I also supported Top Vision Eyewear —
            our in-house optical partner. Both brands operate under the same
            management and location, allowing me to design and manage web
            content for both medical and retail audiences.
          </p>
          {/* ----Website Overview---- */}
          <h3>Website Overview:</h3>
          <p>
            Below are four pages from the Top Vision website for your reference.
            Please <strong>CLICK</strong> on each image and{' '}
            <strong>SCROLL DOWN</strong> to view the full page.
          </p>
          <div className="website-before-after">
            <div className="before-page-container">
              <p>Top Vision Eyewear Home page:</p>
              <div className="before-page">
                <img
                  src={tveHomePage}
                  alt="Top Vision Eyewear home page"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="after-page-container">
              <p>Top Vision Eyewear Store page: </p>
              <div className="after-page">
                <img
                  src={tveStorePage}
                  alt="Top Vision Eyewear store page"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="website-before-after mt-xxl">
            <div className="before-page-container">
              <p>Top Vision Eyewear Blog page:</p>
              <div className="before-page">
                <img
                  src={tveBlogPage}
                  alt="Top Vision Eyewear Blog page"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="after-page-container">
              <p>Top Vision Eyewear Help Center page: </p>
              <div className="after-page">
                <img
                  src={tveHelpCenterPage}
                  alt="Top Vision Eyewear Help Center page"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/*---------- challenges-------- */}
          <h3 className="mt-xxl">The Challenges:</h3>
          <p>
            Top Vision Eyewear initially had a very basic website under the
            domain
            <strong>
              {' '}topvision.vn,featuring only two static pages: Home and About
              Us.
            </strong>{' '}
            These pages offered minimal information — mainly introducing the
            company, listing carried brands, and providing basic contact details
            —
            <strong>
              with no product showcase, user interaction, or conversion flow,
              which resulted in very low monthly traffic.
            </strong>
          </p>
          <p>
            Unfortunately, before I had the chance to document the original
            site, a major incident involving the domain and hosting systems
            caused the entire website to crash and disappear permanently — with
            no backups available for recovery.
          </p>
          <p>
            The site’s original color palette, as shown below, featured a mix of
            <strong> muted pastels and soft cool tones </strong>— including mint
            green, teal, light gray, and dusty green — accented by warmer shades
            like pastel green, mustard yellow, and rosy beige. While this scheme
            projected a soft and approachable vibe, it lacked contrast,
            structure, and visual hierarchy,{' '}
            <strong>
              which made the brand appear less premium and less engaging online.
            </strong>
          </p>
          <div className="tve-color-scheme">
            <p>
              <strong>
                <em>Top Vision Eyewear initial color scheme:</em>
              </strong>
            </p>
            <img
              src={tveOldColorScheme}
              alt="TVE old color scheme"
              loading="lazy"
            />
          </div>
        </div>
        {/* -------My Role & Goals------------ */}
        <div className="case-study-my-roles-goals mt-xxl">
          <h3>My Role & Goals</h3>
          {/* ---------------Goals----------- */}
          <h4>Goals:</h4>
          <ul>
            <li>
              Restore online visibility quickly by bringing the eyewear store
              back to the internet after the previous site was taken down
            </li>
            <li>
              Rebuild the brand’s digital presence to reflect its premium
              positioning through design, content, and user experience
            </li>
            <li>
              Improve brand perception and trust among new and returning
              customers
            </li>
            <li>
              Establish a solid e-commerce foundation to support future online
              sales and marketing efforts
            </li>
            <li>
              Strengthen the brand identity by aligning digital touchpoints with
              visual and verbal branding
            </li>
          </ul>
          {/* ---------------My Role----------- */}
          <h4>My Role:</h4>
          <p>
            Following a discussion with my manager, I took full ownership of
            remaking the company website from the ground up.
          </p>
          <ul>
            <li>
              Chose a new domain (old domain topvision.vn to new domain
              topvisioneyewear.vn ) that better reflects the brand identity
              while also supporting SEO efforts.
            </li>
            <li>
              Selected a suitable hosting provider based on performance and
              scalability
            </li>
            <li>
              Refined the brand’s color scheme to match its premium positioning
            </li>
            <li>
              Developed the sitemap and defined the site’s navigation structure
            </li>
            <li>
              Wrote all website content from scratch, relying on minimal
              internal documentation
            </li>
            <li>
              Determined the most suitable website type: full e-commerce,
              traditional, or hybrid
            </li>
            <li>
              Designed the full website layout in Figma without any existing
              internal references to guide the design
            </li>
            <li>
              Continued to maintain and update the website regularly until my
              departure, including product publishing and translation, content
              updates, plugin monitoring, and technical issue resolution
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
              I began by thoroughly researching both{' '}
              <strong>Vietnamese competitors</strong> and{' '}
              <strong>international optical websites</strong> to understand
              common design patterns across regions. This was essential because
              the store’s customer base was a mix of{' '}
              <strong>local Vietnamese and expatriates</strong> living in Ho Chi
              Minh City, representing around{' '}
              <strong>50 to 80 nationalities</strong>.
            </p>
            <p>
              To gain deeper insights into the store’s positioning, I conducted{' '}
              <strong>short interviews</strong> with the optician, sales staff,
              and the founder. These helped me understand the{' '}
              <strong>target customer profiles, business goals,</strong> and{' '}
              <strong>eyewear brands</strong> sold at the store.
            </p>
          </div>
          {/* Key Design Decisions & Marketing Strategy */}
          <div className="design-decisions-marketing-strategy">
            <h4>Key Design Decisions & Marketing Strategy</h4>
            {/* -------key decision 1------- */}
            <h5>1. Brand Color</h5>
            <p>
              The original color inspiration included a mix of muted pastels and
              soft cool tones—such as mint green, teal, light gray, and dusty
              green—accented by warmer shades like pastel green, mustard yellow,
              and rosy beige. (As seen above in the section titled "The
              Challenges")
            </p>
            <p>
              After careful consideration, we finalized a more cohesive and
              balanced palette. Instead of combining both warm and cool tones,
              the new scheme leans toward a calm, sophisticated look that better
              aligns with the brand’s premium and minimalist aesthetic in
              eyewear fashion.
            </p>
            <div className="tve-color-scheme">
              <p>
                <strong>
                  <em>Top Vision Eyewear current color scheme:</em>
                </strong>
              </p>
              <img
                src={tveNewColorScheme}
                alt="TVE new color scheme"
                loading="lazy"
              />
            </div>
            {/* -------key decision 2------- */}
            <h5 className="mt-lg">2. Website Type</h5>
            <p>
              After discussing with the founder (who is also my manager), and
              analyzing the brand’s limited recognition — especially among
              expats living outside Thao Dien, District 2 —{' '}
              <strong>I decided to create a hybrid website</strong>. It would
              combine:
            </p>
            <ul>
              <li>
                <strong>Traditional website features </strong>(Homepage, Service
                Page, Help Center, Blog) to establish branding, build trust, and
                support SEO
              </li>
              <li>
                <strong>E-commerce features with Woocommerce</strong> to
                showcase products and allow browsing/purchasing directly on the
                site
              </li>
            </ul>
            <p>
              This approach balanced storytelling with functionality, supporting
              both brand development and customer convenience.
            </p>
            {/* -------key decision 3------- */}
            <h5 className="mt-lg">3. Sitemap Structure</h5>
            <p>
              Due to the limitations of the{' '}
              <strong>free Elementor builder and theme</strong>, I had to work
              creatively within constraints. After careful planning, I decided
              to structure the product pages by{' '}
              <strong>gender and category</strong>, such as:
            </p>
            <ul>
              <li>Women’s Eyeglasses</li>
              <li>Men’s Sunglasses</li>
              <li>Kids’ Eyewear</li>
            </ul>
            <p>
              Meanwhile,{' '}
              <strong>Home, Service, Help Center and Blog pages</strong>{' '}
              remained separated as traditional pages to ensure clear
              navigation.
            </p>
            <p>
              The site was also designed to be <strong>bilingual</strong>,
              supporting both <strong>English and Vietnamese</strong> to serve
              the store's diverse audience.
            </p>
            {/* -------key decision 4------- */}
            <h5 className="mt-lg">4. Visual Style</h5>
            <p>
              To align with the <strong>premium brand identity</strong>, I used
              <strong>
                {' '}realistic product and lifestyle photography{' '}
              </strong>combined with a <strong>minimalist design</strong>. This
              kept the site visually consistent and helped reflect the
              sophistication of the eyewear brand.
            </p>
          </div>
        </div>
        {/*--------------- Results & Impact ------------*/}
        <div className="results-impact">
          <h3>Results & Impact</h3>
          <p>
            In this section, I’d like to share a general overview of the
            website’s performance growth up to the time I left the company,
            without disclosing specific numbers out of respect for internal
            confidentiality. Thank you for your understanding.
          </p>
          <strong>Key highlights include:</strong>
          <ul>
            <li>
              Successfully restored the store’s online presence with a refreshed
              website that reflects its premium brand identity
            </li>
            <li>
              Grew website traffic from zero to over 600 monthly
              visitors, with steady upward momentum
            </li>
            <li>
              Achieved top 10 Google rankings for multiple keywords, including
              “prescription glasses Ho Chi Minh City,” “prescription glasses
              Vietnam,” and “glasses in Vietnam”...
            </li>
            <li>
              Received positive feedback on the new website design from managers
              and team members
            </li>
            <li>
              While not frequent, we began receiving more website form
              submissions — primarily from expats and international customers
            </li>
          </ul>
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
                <img src={caseStudyBS} alt="See case study Blincq Solutions" />
              </div>
              <div className="see-more-case-study-content">
                <h6 className="white-text">
                  <strong className="white-text">Case Study #3:</strong> Blincq
                  Solutions Website Design from Scratch (Medical Tech Website)
                </h6>
                <div className="mt-sm">
                  <Link
                    to="/uxui-project-portfolio/blincq-solutions-medical-tech-site"
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

export default TVEWebProject;
