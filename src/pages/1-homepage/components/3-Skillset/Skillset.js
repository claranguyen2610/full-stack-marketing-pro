import React from 'react';
import './Skillset.css';

const Skillset = () => {
  return (
    <section className="home-skillset site-container">
      <div className="box-container">
        <h2>Skills & Tools I Use</h2>
        <div className="home-skillset-content">
          <p>
            My marketing journey started in my first year of college. Instead of
            working part-time at a coffee shop, I chose to stay home, dive into
            countless YouTube tutorials, and teach myself the essential skills
            to become a strong digital marketer. Over the past 3 years, I’ve
            applied and sharpened these skills in real-world roles — and I’m
            still learning every day. Take a look — you might find exactly what
            you’re looking for in your next marketer. You might wonder about the
            depth or necessity of all these skills. Let me clarify:
          </p>
          <ul>
            <li>
              <strong>
                My strongest area is website work — including design, SEO,
                content writing, development, and management.
              </strong>{' '}
              Instead of hiring two separate people to build and maintainyour
              site, I can help you do it all — efficiently and cost-effectively.
            </li>
            <li>
              As for the{' '}
              <strong>
                other areas, I’m fully capable of handling them professionally{' '}
              </strong>to maintain visual and strategic consistency across your
              brand’s digital presence. Thanks to this wide skillset, I can
              <strong>
                {' '}quickly solve cross-functional marketing problems
              </strong>{' '}
              and deliver results that actually matter, as well as connect the
              dots in marketing activities.
            </li>
          </ul>
        </div>
        <div className="home-skillset-grid">
          <article className="home-sillset-box">
            <h5>🌐 Website Development & Management</h5>
            <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>WordPress (Advanced), CMS Management</li>
              <li>Domain & Hosting Management</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🧠 Basic Programming & Data Analytics</h5>
            <ul>
              <li>Python, Node.js, SQL, MongoDB</li>
              <li>Google Analytics, Data Tracking</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🔍 SEO Tools</h5>
            <ul>
              <li>
                Keyword Research, On-Page SEO (Rank Math, SEOquake), Technical
                SEO (SEMRUSH), Google Search Console
              </li>
              <li>Google Keyword Planner, SEO Content Creation</li>
              <li>Google Merchant Center, AI Tools (ChatGPT, Gemini)</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>📱 Social Media Management</h5>
            <ul>
              <li>
                Platforms: Facebook, Zalo (incl. Zalo OA), Instagram, LinkedIn,
                YouTube
              </li>
              <li>Content Creation, Content Scheduling, Chatbot Integration</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🎯 Advertising</h5>
            <ul>
              <li>Facebook Ads (Creation & Management)</li>
              <li>Email Marketing (Mailchimp, Odoo)</li>
              <li>Basic Google Ads</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🎨 Design, Video Editing & UX/UI</h5>
            <ul>
              <li>Figma, Adobe Illustrator, Photoshop, Canva</li>
              <li>Graphic & Web Design (Intermediate)</li>
              <li>Print Vendor Management</li>
              <li>Video Editing: Premiere Pro (Basic), CapCut</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🧩 Strategy & Execution</h5>
            <ul>
              <li>Marketing Campaign Planning</li>
              <li>Event Coordination</li>
              <li>Project Management</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>💡 Soft Skills</h5>
            <ul>
              <li>Strategic thinking</li>
              <li>Self-learning </li>
              <li>Team mentoring</li>
              <li>Cross-functional collaboration</li>
              <li>Multitasking under pressure</li>
              <li>Problem-solving</li>
            </ul>
          </article>

          <article className="home-sillset-box">
            <h5>🌍 Languages</h5>
            <ul>
              <li>Vietnamese (Native)</li>
              <li>English (fluent – professional working proficiency)</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};
export default Skillset;
