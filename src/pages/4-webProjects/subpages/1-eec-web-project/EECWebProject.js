import React from 'react';
import { Link } from 'react-router-dom';
import '../case-study-style.css';
import './EECWebProject.css';
import SEO from '../../../../components/SEO'
import eecOldHomepage from '../../../../images/4-web-project/EEC-web-project/Old-European eye center website homepage.webp';
import eecNewHomepage from '../../../../images/4-web-project/EEC-web-project/New-EEC homepage.webp';
import eecOldAboutUs from '../../../../images/4-web-project/EEC-web-project/Old-European eye center website about us.webp';
import eecNewAboutUs from '../../../../images/4-web-project/EEC-web-project/New-EEC about us page.webp';
import eecOldProduct from '../../../../images/4-web-project/EEC-web-project/Old-European eye center website product page.jpg';
import eecNewProduct from '../../../../images/4-web-project/EEC-web-project/New-EEC product page.webp';
import contactFromBeforAfter from '../../../../images/4-web-project/EEC-web-project/contact-form-before-after.png';
import eyeConsultationExam from '../../../../images/4-web-project/EEC-web-project/screencapture-europeaneyecenter-en-eye-exam-and-consultation-2025-06-08-13_36_37.webp';
import medicalTourismPage from '../../../../images/4-web-project/EEC-web-project/screencapture-europeaneyecenter-en-eye-surgery-in-vietnam-2025-06-08-13_36_15.webp';
import doctorProfile from '../../../../images/4-web-project/EEC-web-project/screencapture-europeaneyecenter-en-dr-jd-ferwerda-expert-eye-care-retina-specialist-2025-06-08-13_35_51.webp';
import giveBackPage from '../../../../images/4-web-project/EEC-web-project/screencapture-europeaneyecenter-en-give-back-retinopathy-of-prematurity-project-2025-06-08-13_37_41.webp';
// import caseStudyEEC from '../../../../images/4-web-project/eec-website-mockup.jpg';
import caseStudyTVE from '../../../../images/4-web-project/TVE-website-mockup.jpg';
import caseStudyBS from '../../../../images/4-web-project/blincq-website-mockup.jpg';

const EECWebProject = () => {
  return (
    <>
    <SEO
  title="Case Study: European Eye Center Website Redesign | UX & SEO Overhaul"
  description="See how I redesigned the European Eye Center website from the ground up—solving usability issues, improving SEO, and increasing traffic by 5X. Full-stack project led by one marketer using WordPress and Figma."
  url="https://fullstackmarketingpro.com/uxui-project-portfolio/full-website-redesign-for-european-eye-center"
/>

    <main className="web-project-case-study site-container-hero">
      <section className="box-container">
        <h1>
          <span className="dark-yellow-text">Case Study #1: </span>European Eye
          Center Entire Website Redesign
        </h1>
        <h3>Project Snapshot:</h3>
        <p>
          As the solo marketer at European Eye Center, I spearheaded a full
          website redesign to tackle significant usability gaps, weak SEO,
          inconsistent visuals, and low conversion rates. Leveraging self-taught
          Figma and WordPress skills, I rebuilt the site from concept to live
          deployment—handling everything from content to UI design. This
          comprehensive overhaul led to a 5X increase in website traffic,
          significant SEO improvements, and higher conversion rates for both
          local and international patients.
        </p>
        <div className="flex-start">
          <div className="case-study-btns flex-spacebetween">
            <a
              href="https://www.figma.com/design/y1Z2S6ZjFLD9oa0qpFWhQD/European-Eye-Center-Early-web-demo?m=auto&t=iPyW3sq9EWA1MGzW-1"
              className="btn-black">
              Initial Figma Design
            </a>
            <a href="/" className="btn-black">
              Old Website Video
            </a>
            <a href="https://europeaneyecenter.com/en/" className="btn-yellow">
              Live Website After Redesign
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
              website throughout my two years working at European Eye Center.
            </li>
            <li>
              I typically designed only the core pages—such as the homepage and
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
        {/* -------Website before and after------------ */}
        <h3>Website before and after comparison:</h3>
        <blockquote class="image-instruction">
          Please click on each image and scroll to view the entire image.
        </blockquote>
        {/* -------HOMEPAGE before and after------------ */}
        <div>
          <h5>Home page before and after:</h5>
          <div className="website-before-after">
            <div className="before-page-container">
              <p>Home page before redesign</p>
              <div className="before-page">
                <img
                  src={eecOldHomepage}
                  alt="homepage before"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="after-page-container">
              <p>Home page now </p>
              <div className="after-page">
                <img
                  src={eecNewHomepage}
                  alt="Homepagae after"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* -------ABOUT US before and after------------ */}
        <div className="mt-xxl">
          <h5>About Us page before and after:</h5>
          <div className="website-before-after">
            <div className="before-page-container">
              <p>About Us page before redesign</p>
              <div className="before-page">
                <img src={eecOldAboutUs} alt="AboutUs before" />
              </div>
            </div>

            <div className="after-page-container">
              <p>About Us page now </p>
              <div className="after-page">
                <img src={eecNewAboutUs} alt="AboutUs after" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        {/* -------PRODUCT PAGE before and after------------ */}
        <div className="mt-xxl">
          <h5>Product page before and after:</h5>
          <div className="website-before-after">
            <div className="before-page-container">
              <p>Product page before redesign</p>
              <div className="before-page">
                <img
                  src={eecOldProduct}
                  alt="Product page before"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="after-page-container">
              <p>Product page now </p>
              <div className="after-page">
                <img
                  src={eecNewProduct}
                  alt="Product page after"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        {/* -------end of Website before and after------------ */}
        {/* ---------------Process explain----------- */}
        <div className="case-study-process-explain">
          {/* ---------------Challenges----------- */}
          <div className="case-study-challenges">
            <h3>The Challenges: </h3>
            <p>
              When I joined European Eye Center, the website looked clean and
              professional —{' '}
              <strong>but lacked depth, consistency, and warmth.</strong> While
              it followed brand colors and included key elements like services
              and doctor profiles, it suffered from{' '}
              <strong>
                mismatched layouts, low-quality images, short generic content,
                and missing details that build trust or support SEO.
              </strong>
            </p>
            <p>
              <strong>Form submissions were low,</strong> partly due to poor
              traffic and partly due to friction in the contact form, which
              asked for irrelevant and sensitive details like the patient’s
              employer — making users uncomfortable. Patients also contacted us
              to ask for basic information that should have been available
              online, highlighting critical usability and content gaps.
            </p>
            <p>
              <strong>
                The site didn’t effectively showcase what made the clinic unique{' '}
              </strong>— such as its hospital partnerships, multilingual
              services, or medical technology — and the heavy blue-green color
              palette,{' '}
              <strong>
                while medically appropriate, felt overly clinical and uninviting
                to casual visitors seeking information
              </strong>, not just treatment.
            </p>
          </div>
          {/* ---------------My Role & Goals----------- */}
          <div className="case-study-my-roles-goals">
            <h3>My Role & Goals</h3>
            <p>
              <strong>
                The company had no dedicated graphic designer or UX/UI
                specialist — I was the only marketer.
              </strong>{' '}
              With the director’s permission, I took the lead on the entire
              website redesign, combining my marketing expertise with
              self-taught UX/UI skills.
            </p>
            {/* ---------------Goals----------- */}
            <h4>Goals of the Website Overhaul</h4>
            <ul>
              <li>
                Improve the overall look and feel through high-quality images
                and visual consistency
              </li>
              <li>
                Increase transparency and credibility online to build trust with
                potential patients
              </li>
              <li>
                Enhance brand perception through a more modern, cohesive, and
                professional web presence
              </li>
              <li>Optimize on-page SEO to grow monthly website traffic</li>
            </ul>
            <p>
              Together, these improvements aimed to increase conversions and
              support long-term business growth.
            </p>
            {/* ---------------My Role----------- */}
            <h4>My Role</h4>
            <p>
              I led the website redesign from end to end — from ideation to
              execution and ongoing refinement. My responsibilities included:
            </p>
            <ul>
              <li>Writing and editing all website content</li>
              <li>Designing banners and editing images</li>
              <li>Creating the website layout and flow using Figma</li>
              <li>
                Developing the live website using WordPress, based on the Figma
                design
              </li>
              <li>
                Continuously improving both content and UI during my time at
                European Eye Center
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
              <div className="btn-black-stroke">Copywriting</div>
              <div className="btn-black-stroke">SEO</div>
            </div>
          </div>
          {/* --------------- Design Process & Solutions----------- */}
          <div className="case-study-design-process">
            <h3 className="mt-xxl">Design Process & Solutions:</h3>
            {/* --------Research & Analytics------ */}
            <div className="research-analytics">
              <h4>Research & Analytics:</h4>
              <p>
                Before jumping into solutions, I began with in-depth research to
                uncover the root issues. I audited every page of the existing
                site, using Google Analytics and Search Console to assess
                performance, user behavior, and SEO gaps. I also reviewed
                competitor websites in Vietnam and similar clinics abroad for
                benchmarking.
              </p>
              <p>
                Rather than rushing into design, I evaluated the site through
                both a marketing and UX lens, identifying misalignments between
                user expectations and the current experience. To gather external
                feedback, I conducted quick interviews with friends for first
                impressions and ran internal role-play sessions with my
                managers, putting ourselves in the shoes of potential patients.
              </p>
              <p>
                While individual feedback varied, there were several consistent
                themes:
              </p>
              <ul>
                <li>
                  The website looked <strong>professional</strong>, but felt{' '}
                  <strong>generic</strong>
                </li>
                <li>
                  Images appeared <strong>dark, unqualified</strong>, and
                  sometimes even <strong>strange or uninviting</strong>
                </li>
                <li>
                  Navigation was clear, but the site lacked anything visually
                  appealing or memorable
                </li>
                <li>
                  The information was sufficient, but not distinctive — it
                  didn’t convey what made European Eye Center stand out from
                  other clinics
                </li>
              </ul>
              <p>
                I combined <strong>this input</strong> with our{' '}
                <strong>
                  target customer and website visitors' profiles
                </strong>{' '}
                and <strong>brand positioning strategy</strong> to define clear
                design priorities for the website overhaul.
              </p>
            </div>
            {/* --------Key Design Changes------ */}
            <div className="key-design-changes">
              <h4>Key Design Changes:</h4>
              {/*--------- key change 1 ---------*/}
              <h5>1. Visuals & Credibility</h5>
              <ul>
                <li>
                  Replaced poorly lit clinic photos with high-quality, edited
                  images.
                </li>
                <li>
                  Updated doctor portraits to show medical attire in clinical
                  settings, boosting trust—especially among international
                  patients.
                </li>
                <li>
                  Standardized medical team photos with consistent sizing and
                  clean backgrounds to present a professional, cohesive image.
                </li>
              </ul>
              <p>
                To explore these visual upgrades in context, please visit the
                pages below:
              </p>
              <div className="flex-start">
                <div className="case-study-btns flex-spacebetween">
                  <a
                    href="https://europeaneyecenter.com/en/"
                    className="btn-black">
                    Home Page
                  </a>
                  <a
                    href="https://europeaneyecenter.com/en/about-us/"
                    className="btn-black">
                    About Us
                  </a>
                  <a
                    href="https://europeaneyecenter.com/en/dr-jd-ferwerda-expert-eye-care-retina-specialist/"
                    className="btn-black">
                    Doctor’s Profile
                  </a>
                </div>
              </div>
              {/*--------- key change 2 ---------*/}
              <h5 className="mt-xl">2. Color Scheme Adjustments</h5>
              <ul>
                <li>
                  Adding two very light variants of the brand's main color —
                  blue — and reducing the use of dark blue from 30% to 15%
                  helped shift the overall tone from heavy to more relaxed,
                  while still maintaining a professional medical feel.
                </li>
                <li>
                  The medium-dark green was adjusted to a darker shade to
                  improve contrast, and its usage was reduced from 10% to 5%,
                  applied only to buttons or call-to-action elements to
                  establish it as an action-triggering color in users’ minds.
                </li>
              </ul>
              {/*--------- key change 3 ---------*/}
              <h5 className="mt-lg">
                3. Font-Family, Font-Size, Contact Forms, and Content Length
                Adjustments
              </h5>
              <ul>
                <li>
                  Improved readability with a modern font and consistent
                  hierarchy, while expanding short content into more
                  informative, SEO-friendly sections.
                </li>
                <li>
                  The contact forms were redesigned for clarity and comfort —
                  removing friction while still capturing key marketing
                  insights.
                </li>
                <li>
                  This allowed us to not only increase form submissions but also
                  collect useful data for lead segmentation, targeting, and
                  campaign optimization.
                </li>
              </ul>
              <div>
                <p>
                  <strong>Before & After – Contact Section</strong> (Please
                  refer back to the homepage comparison at the beginning of this
                  case study to better visualize the changes made to the contact
                  section.)
                </p>
                <img
                  src={contactFromBeforAfter}
                  alt="Contact from before and after"
                  loading="lazy"
                />
              </div>
              {/*--------- key change 4 ---------*/}
              <h5 className="mt-lg">4. New Content and Pages:</h5>
              <p>
                <strong>
                  I also scaled the website by adding multiple new pages that
                  didn’t exist before,
                </strong>{' '}
                aiming to improve its transparency and authenticity. These pages
                covered important clinic services and initiatives such as
                charity projects, eye exams and consultation categories, vision
                school screening, medical tourism, kids’ eye care, and online
                consultations with ophthalmologists.
              </p>
              <div className="website-before-after">
                <div className="before-page-container">
                  <p>Eye Consultations and Exam page:</p>
                  <div className="before-page">
                    <img
                      src={eyeConsultationExam}
                      alt="Eye Consultations and Exam page"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="after-page-container">
                  <p>Doctor's Profile page: </p>
                  <div className="after-page">
                    <img
                      src={doctorProfile}
                      alt="Doctor's Profile page"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="website-before-after mt-xxl">
                <div className="before-page-container">
                  <p>Charity Project page:</p>
                  <div className="before-page">
                    <img
                      src={giveBackPage}
                      alt="Charity Project page"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="after-page-container">
                  <p>Medical Tourism page: </p>
                  <div className="after-page">
                    <img
                      src={medicalTourismPage}
                      alt="Medical Tourism page:"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* --------Results & Impact------ */}
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
                  <strong>Strengthened brand perception</strong> by launching
                  <strong>dedicated webpages</strong> for: Medical Tourism,
                  Vision Screening Program, Charity Project, Online
                  Ophthalmologist Consultation, Pediatric Eye Care, Doctor
                  Profiles, and a comprehensive List of Eye Consultations.
                </li>
                <li>
                  Achieved a <strong>5X increase in website traffic</strong> and
                  a{' '}
                  <strong>
                    1.5X increase in monthly doctor appointment form submissions
                  </strong>
                </li>
                <li>
                  <strong>Improved SEO performance</strong> with multiple{' '}
                  <strong>top 5 or 10 keyword rankings</strong> across 4
                  languages (Vietnamese, English, Japanese, and Korean),
                  including high-intent terms such as: “phẫu thuật bong võng
                  mạc,” “cataract surgery cost in Vietnam,” “online eye doctor,”
                  “kính áp tròng cận loạn,” and “laser eye surgery Vietnam.”
                </li>
                <li>
                  Boosted{' '}
                  <strong>international patient conversions by 2X </strong>and
                  <strong>international lead volume by 3X</strong> through a
                  focused <strong>Medical Tourism strategy</strong> executed via
                  both organic and paid web/social media content
                </li>
                <li>
                  Received <strong>positive feedback</strong> on the new website
                  design from managers, current employees, new hires, and
                  external partners
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* ----------See more case study------------ */}
        <div className="see-more-case-study-container">
          <h2>Explore More Projects</h2>
          <div className="see-more-case-studies">
            <div className="see-more-case-study">
              <div className="see-more-case-study-img">
                <img
                  src={caseStudyTVE}
                  alt="See case study Top Vision Eyewear"
                />
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

export default EECWebProject;
