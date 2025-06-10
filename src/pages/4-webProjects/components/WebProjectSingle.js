import React from 'react';
import './WebProjectSingle.css';

const WebProjectSingle = ({
  h2,
  h4,
  description,
  result,
  image,
  webURL,
  projectURL
}) => {
  return (
    <section className="web-project-single site-container-no-bg">
      <div className="box-container">
        <div className="web-project-single-content">
          <h2>
            {h2}
          </h2>
          <h4 className="dark-yellow-text">
            {h4}
          </h4>
          {description.map((content, index) => {
            return (
              <p key={index}>
                {content}
              </p>
            );
          })}
          <strong>
            {result}
          </strong>
        </div>

        <div className="web-project-single-img">
          <img src={image} alt="website project mockup" />
          <div className="web-project-single-btns flex-center">
            <a href={projectURL} className="btn-yellow">
              See Full Project
            </a>
            <a href={webURL} className="btn-yellow-stroke">
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebProjectSingle;
