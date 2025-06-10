import React from 'react';
import astronautImg from '../../images/8-404-not-found/astronaut-sitting-on-the-moon-and-holding-a-balloon-vector.jpg';
import { Link } from 'react-router-dom';
import './NotFound.css';
import SEO from '../../components/SEO'

const NotFound = () => {
  return (
    <>
    <SEO
  title="404 | Page Not Found | Nga Nguyen Portfolio"
  description="Oops! The page you're looking for doesn't exist. Explore full-stack marketing projects, UX/UI case studies, and design work by Nga Nguyen."
  url="https://fullstackmarketingpro.com/404"
/>

    <main className="page-not-found site-container-hero">
      <section className="box-container flex-spacebetween">
        <div className="page-not-found-text">
          <h1>
            🥹 Sorry, the page you’re looking for{' '}
            <span className="highlight-text">doesn’t exist.</span>
          </h1>
          <h4>Let’s get you back home safely 🏠</h4>
          <div className="mt-xxl">
            <Link to="/" className="btn-yellow">
              Back To Home Page
            </Link>
          </div>
        </div>
        <div className="page-not-found-img">
          <img
            src={astronautImg}
            alt="Astronaut illustration representing page not found"
            className="img-rotate"
          />
        </div>
      </section>
    </main>
    </>
  );
};
export default NotFound;
