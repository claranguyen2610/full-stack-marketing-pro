import React from 'react';
import './Branding.css';
import EECimg from '../../../../images/3-marketing-works/resized/clinic-photo.jpg';
import FB_post_and_tagline_before_mobile from '../../../../images/3-marketing-works/resized/FB-posts-and-tagline-before-1.webp';
import FB_post_and_tagline_before_desktop from '../../../../images/3-marketing-works/resized/FB-posts-and-tagline-before.webp';
import tagline_before_after from '../../../../images/3-marketing-works/resized/tagline-before-after.webp';
import FB_before_after from '../../../../images/3-marketing-works/resized/FB-before-after.webp';
import FB_Zalo_linkedin_mobile from '../../../../images/3-marketing-works/resized/FB-Zalo-linkedin-1.webp';
import FB_Zalo_linkedin_desktop from '../../../../images/3-marketing-works/resized/FB-Zalo-linkedin.webp';

const Branding = () => {
  return (
    <section className="marketing-works-branding site-container" id="branding">
      <div className="box-container">
        {/*---- about brand -------*/}
        <div className="branding-about-brand flex-spacebetween">
          <div className="about-brand-text">
            <h2 className="dark-yellow-text">Branding</h2>
            <h4>1. About the Brand:</h4>
            <p>
              European Eye Center is a premium eye care brand delivering
              high-quality, international-standard eye care in Vietnam. As a
              trusted name in ophthalmology, the clinic blends advanced medical
              technology with personalized patient service. Its reputation among
              both locals and expats stems from a consistent commitment to
              integrity, expertise, and long-term vision health.
            </p>
          </div>
          <div className="about-brand-img">
            <img src={EECimg} alt="European Eye Center" loading="lazy" />
          </div>
        </div>
        {/*---- The Challenges -------*/}
        <div className="branding-challenges">
          <h4>2. The Challenges:</h4>
          <div className="branding-challenges-content flex-spacebetween">
            <div className="branding-challenges-left">
              <p>
                When I joined,{' '}
                <strong>
                  the clinic used the tagline “Your eyes are our priority” and
                  sometimes “Your vision is our priority.”
                </strong>{' '}
                While warm and patient-focused, these phrases were generic and
                lacked distinctiveness—also used by other clinics globally,
                offering no clear identity.
              </p>
              <p>
                Social media content was{' '}
                <strong>
                  a mix of Korean, English, and Vietnamese, with a strong
                  Western aesthetic—minimalist design and short captions
                </strong>. Although this multi-language approach aimed to
                accommodate the diverse patient base, the execution often led to
                duplicated or multilingual posts in one visual, which risked
                confusing users rather than engaging them.{' '}
                <strong className="dark-yellow-text">
                  The problems I need to solve:
                </strong>
              </p>
            </div>
            <div className="branding-challenges-right">
              <ul>
                <li>
                  <strong>
                    How can I craft a new brand tagline and slogan{' '}
                  </strong>that are distinct but cohesive, clearly reflecting
                  our identity and competitive edge?
                </li>
                <li>
                  <strong>
                    How do we make the clinic’s online presence feel more
                    locally relatable
                  </strong>{' '}
                  to Vietnamese patients without alienating expats?
                </li>
                <li>
                  <strong>
                    How can we communicate our international standard
                  </strong>{' '}
                  without overwhelming patients with too many languages in a
                  single post?
                </li>
              </ul>
            </div>
          </div>
          <div className="branding-challenges-img">
            <img
              src={FB_post_and_tagline_before_desktop}
              alt="Facebook post and tagline before - desktop"
              className="img-desktop"
              loading="lazy"
            />
            <img
              src={FB_post_and_tagline_before_mobile}
              alt="Facebook post and tagline before - mobile"
              className="img-mobile"
              loading="lazy"
            />
          </div>
        </div>

        {/*---- Research phase -------*/}
        <div className="branding-reseach">
          <h4>3. Research phase:</h4>
          <p>
            I conducted internal interviews with the doctor, the founder, and
            the staff to gain deeper insight into the clinic’s core values and
            expectations. I also monitored patient interactions on social media
            and email, and benchmarked both local competitors and global eye
            clinics for visual and content direction. Below are some of
            interesting things I observed:
          </p>
          <ol>
            <li>
              Our audience includes Vietnamese and expat{' '}
              <strong>patients from over 100 countries,</strong> so{' '}
              <strong>
                the brand had to reflect both local relevance and international
                credibility.
              </strong>
            </li>
            <li>
              Even from the beginning, the clinic did not explicitly position
              itself as an international eye clinic. However, due to its foreign
              doctors, founders, and multilingual operations, expat patients
              naturally perceived it as one, while local patients perceived it
              as a private eye clinic with foreign doctors.
            </li>
            <li>
              For social media content and design styles:
              <ul>
                <li>
                  <strong>Western countries:</strong> clean, minimalist designs;
                  content is educational, short, and icon-free.
                </li>
                <li>
                  <strong>Japan & Korea:</strong> clean but more visually
                  dynamic; minimal emojis; balanced aesthetics.
                </li>
                <li>
                  <strong>Vietnam:</strong> vibrant colors, emoji-heavy, long
                  captions with a commercial focus.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        {/*---- Goals -------*/}
        <div className="branding-goals mt-lg">
          <h4>4. Goals:</h4>
          <p>
            After the research phase with valuable insights combined with the
            managers’ expectations, I started to deploy step by step with a lot
            of small changes over time, following the goals:
          </p>
          <ul>
            <li>
              Strengthen the international aspect with high-quality services and
              make it more visible to all types of patients (local Vietnamese,
              expats, and international patients abroad).
            </li>
            <li>
              Ensure the content and images consistent across platforms, from
              offline to online, from website to social media.
            </li>
          </ul>
        </div>
        {/*---- My Solutions & Results -------*/}
        <div className="branding-solutions-results mt-lg">
          <h4>5. My Solutions & Results:</h4>

          <div className="tagline-slogan">
            <strong>1. Tagline & Slogan Refresh:</strong>
            <p>
              From the generic “Your eyes are our priority”, I repositioned the
              brand with a clear, identity-driven direction:
            </p>
            <ul>
              <li>
                <strong>Tagline:</strong> International Standards & Personalized
                Eye Care
              </li>
              <li>
                <strong>Slogan:</strong> International Excellence in Every Eye
                Exam
              </li>
            </ul>
            <img
              src={tagline_before_after}
              alt="Tagline & Slogan Refresh"
              loading="lazy"
            />
          </div>

          <div className="design-direction">
            <strong>2. Design direction: </strong>
            <p>
              I transitioned from an overly minimal visual style to a colorful
              yet clean aesthetic by incorporating variations of the brand
              colors. I also enhanced the content to achieve a better
              balance—making it longer, more informative, and less
              commercial—tailored to both expat and local audiences. All design
              elements were centered around the new tagline and slogan.
            </p>
            <img src={FB_before_after} alt="Design direction" loading="lazy" />
          </div>

          <div className="solutions-results-the-rest">
            <p>
              <strong>3. Website content:</strong> I maintained the multilingual
              website in English, Vietnamese, and Korean, and later added
              Japanese to improve accessibility. The content strategy and
              structure were also aligned with the new tagline and slogan.
            </p>
            <p>
              <strong>4. Language segmentation:</strong> I proposed using only
              English for the main Facebook and Instagram pages and created a
              separate page in Vietnamese to cater to local patients.
            </p>
            <p>
              <strong>5. Zalo marketing:</strong> Fully in Vietnamese, targeting
              local users (Before I joined the company, Zalo had no published
              posts).
            </p>
            <p>
              <strong>6. LinkedIn:</strong> Exclusively in English, positioning
              the brand among international professionals. (No LinkedIn account
              before)
            </p>
            <div className="mt-xl">
              <img
                src={FB_Zalo_linkedin_desktop}
                alt="FB-Zalo-Linkedin-desktop"
                className="img-desktop"
                loading="lazy"
              />
              <img
                src={FB_Zalo_linkedin_mobile}
                alt="FB-Zalo-Linkedin-mobile"
                className="img-mobile"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
