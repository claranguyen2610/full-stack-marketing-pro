import React from 'react';
import './StudentProject.css';
import photoshopIcon from '../../../../images/7-web-icons/photoshop-icon.png';
import indesignIcon from '../../../../images/7-web-icons/indesign-logo.png';

const StudentProject = () => {
  return (
    <section
      className="student-design-project site-container"
      id="student-project">
      <div className="box-container">
        <h2 className="dark-yellow-text">Student Projects</h2>
        <div className="design-container">
          <strong>
            FLEECIO – Final Group Project (Top Score in Class) (Graphic Design
            course at FPT Arena from July 2023 to January 2024)
          </strong>
          <p>
            As part of a group assignment, we created FLEECIO, a fictional
            premium fashion brand inspired by the softness and warmth of fleece.
            The brand celebrates wool fabric’s beauty and versatility, promoting
            comfort, creativity, and personal style in everyday life. Our team
            was tasked with building a full brand identity and preparing for its
            grand opening event. FLEECIO was highly regarded by instructors and
            received the highest score in class.
          </p>
          <div className="student-project-roles-tools flex-start">
            <div className="student-project-roles">
              <strong className="white-text">My Roles:</strong>
              <ul className="white-text">
                <li>Grand opening poster design</li>
                <li>Brochure design</li>
                <li>Full catalog design</li>
              </ul>
            </div>
            <div className="student-project-tools">
              <strong>Tools Used</strong>
              <ul>
                <li>Adobe Photoshop</li>
                <li>Adobe InDesign</li>
              </ul>
              <div className="tool-icons flex-start">
                <img
                  src={photoshopIcon}
                  alt="Adobe Photoshop"
                  height="30px"
                  width="30px"
                />
                <img
                  src={indesignIcon}
                  alt="Adobe InDesign"
                  height="30px"
                  width="30px"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --------Grand opening poster design--------- */}

        <div className="design-container">
          <h3>Grand opening poster design</h3>
          <div className="grand-opening-poster-imgs flex-spacebetween mt-xxl">
            <div className="design">
              <img
                src="https://i.pinimg.com/736x/fc/7b/b2/fc7bb21098ac65de17610d7c3ae45e8f.jpg"
                alt="Grand opening poster design"
              />
            </div>
            <div className="mockup">
              <img
                src="https://i.pinimg.com/736x/dc/92/2a/dc922a5f7f215a5950fd2f9ae26436e0.jpg"
                alt="Grand opening poster design mockup"
              />
            </div>
          </div>
        </div>

        {/* --------Brochure design--------- */}
        <div className="design-container">
          <h3>Brochure design</h3>
          <div className="brochure-design flex-spacebetween">
            <div className="brochure-design-single">
              <p>Outside brochure</p>
              <img
                src="https://i.pinimg.com/736x/10/e7/b2/10e7b2c943164a4a71e18a27789995ed.jpg"
                alt="Outside brochure"
              />
            </div>
            <div className="brochure-design-single">
              <p>Inside brochure</p>
              <img
                src="https://i.pinimg.com/736x/61/2f/fa/612ffabf43f21f4b085097d1036fc6de.jpg"
                alt="Inside brochure"
              />
            </div>
          </div>
          <div className="brochure-design-mockup flex-spacebetween">
            <div>
              <img
                src="https://i.pinimg.com/736x/45/71/67/4571670377c060de0c7be0a15a1cef9d.jpg"
                alt="brochure-design-mockup"
              />
            </div>
            <div className="brochure-design-mockup brochure-design-mockup-mobile flex-spacebetween ">
              <div>
                <img
                  src="https://i.pinimg.com/736x/d9/21/73/d92173aa54238d6740f320c274870ede.jpg"
                  alt="brochure-design-mockup"
                />
              </div>
              <div>
                <img
                  src="https://i.pinimg.com/736x/21/cb/79/21cb79b2c84daf8bcfc33e3e7a1a04d8.jpg"
                  alt="brochure-design-mockup"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --------Full catalog design--------- */}
        <div className="design-container">
          <h3>Full catalog design</h3>
          <div className="grid-3-columns mt-xxl custom-flex-mobile">
            <div className="full">
              <img
                src="https://i.pinimg.com/736x/d7/b9/4f/d7b94fb8a358514e344bd9bc3303b18d.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/72/81/db/7281dbece9074dfbe5d5a1ff9e0a6755.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/02/2c/c3/022cc3fb05ef2f6595b327ddca12dd15.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="full">
              <img
                src="https://i.pinimg.com/736x/76/fe/2c/76fe2c35824f7d2341e593f1635a6ead.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/73/c7/91/73c791f478490fd70098078552907eff.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/16/19/6a/16196a63d5ec8a2fd84ad1cfce7fa9a5.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/db/f4/b0/dbf4b04ab59592dbef36aa3cbf1c1334.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/37/43/ce/3743ce7d718e8d94d05ec6001de27e23.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="full">
              <img
                src="https://i.pinimg.com/736x/58/21/83/582183b405eab85d36f1b227bfb033cb.jpg"
                alt="Full catalog design"
              />
            </div>
          </div>
          <div className="view-full-design-btn">
            <a
              href="https://drive.google.com/file/d/1sXjqjSyQSx03mGAbetjJ3LopYbjLJIbi/view?usp=sharing"
              className="btn-black">
              View Full Catalog Design
            </a>
          </div>
        </div>

        {/* --------Individual Assignment - Poster design using Photoshop--------- */}
        <div className="design-container">
          <h3>Individual Assignment - Poster design using Photoshop</h3>
          <p className="ce-poster-intro-mockup-text-1">
            This design was part of an individual assignment during my design
            course. We were asked to select a brand and create a print
            advertisement poster. I chose 3CE, a Korean cosmetics brand, because
            their lipstick line is one of my personal favorites. Inspired by
            women's beauty, the poster aims to encourage self-love and remind
            every woman that she is a queen in her own life no matter what.
          </p>
          <div className="ce-poster flex-spacebetween">
            <div className="ce-poster-design">
              <img
                src="https://i.pinimg.com/736x/b2/2f/79/b22f7932b63a885dde6dac8888b7fcbe.jpg"
                alt="3ce poster design"
              />
            </div>
            <div className="ce-poster-intro-mockup">
              <p className="ce-poster-intro-mockup-text-2">
                This design was part of an individual assignment during my
                design course. We were asked to select a brand and create a
                print advertisement poster. I chose 3CE, a Korean cosmetics
                brand, because their lipstick line is one of my personal
                favorites. Inspired by women's beauty, the poster aims to
                encourage self-love and remind every woman that she is a queen
                in her own life no matter what.
              </p>
              <img
                src="https://i.pinimg.com/736x/dc/20/71/dc2071824d46ca7d149b79bfc3ad6f13.jpg"
                alt="3ce poster design mockup"
              />
            </div>
          </div>
        </div>

        {/* --------Individual Assignment - Book design using Indesign--------- */}
        <div className="design-container">
          <h3>Individual Assignment - Book design using Indesign</h3>
          <p>
            This design was part of an individual assignment during my design
            course. We were asked to design a cookbook. Please note that the
            food photos and drawing patterns were collected from the internet.
            My main work in this assignment was layout design, color selection,
            and content placement.
          </p>
          <div className="grid-3-columns mt-lg custom-flex-mobile">
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/b8/59/b1/b859b177377eed88bf97a0134bbc74cb.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/8e/48/3b/8e483b4be832d6c7146cf678b9a5a607.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="full">
              <img
                src="https://i.pinimg.com/736x/e3/df/35/e3df354726c78898df322c44cb17661f.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="full">
              <img
                src="https://i.pinimg.com/736x/e5/42/cc/e542ccf916e10632f107bb610b0b2710.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/1d/86/97/1d8697aa42ed3280e74eb911963c30b6.jpg"
                alt="Full catalog design"
              />
            </div>
            <div className="half">
              <img
                src="https://i.pinimg.com/736x/72/39/26/723926047e45666293b0e3a1307d37de.jpg"
                alt="Full catalog design"
              />
            </div>
          </div>
          <div className="view-full-design-btn">
            <a
              href="https://drive.google.com/file/d/10hODo-IGC4Cd3HGnnPoc2JtgesCznzkv/view?usp=sharing"
              className="btn-black">
              View Full Catalog Design
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProject;
