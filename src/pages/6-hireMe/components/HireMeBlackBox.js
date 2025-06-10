import React from 'react';
import './HireMeBox.css';

const HireMeBlackBox = ({ h3, jobType, taskList }) => {
  return (
    <section className="site-container-no-bg">
      <div className="box-container">
        <div className="hire-me-box black-box">
          <div className="hireme-box-head hireme-black-box-head flex-spacebetween">
            <h3>
              {h3}
            </h3>
            <div className="btn-yellow">
              {jobType}
            </div>
          </div>
          <div className="taskList-description">
            <strong>I can help you with:</strong>
            <ul>
              {taskList.map((task, index) => {
                return (
                  <li key={index}>
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMeBlackBox;
