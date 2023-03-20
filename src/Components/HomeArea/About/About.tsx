import "./About.css";
import website from "../../../Assets/Images/website.png";
import landingpage from "../../../Assets/Images/landingpage.png";
import webSystems from "../../../Assets/Images/web-systems.png";

function About(): JSX.Element {
  return (
    <div className="About">
      <div className="aboutScreen">
        <div></div>
        <div className="mainText">
          <div></div>
          <div className="opening">
            <span className="title">Hi! I'm Gal Vitrak</span>
            <p>
              I'm a graduate from John Bryce College, I've studied Full Stack
              development in Web Technologies.
            </p>
            <p>
              I'm proficient in JavaScript and TypeScript and I'm developing
              using frameworks such as Angular and React.
            </p>
            <p>
              I'm a detail oriented, hardworking team-player and currently
              looking for my next challenge and a place to call home in the
              industry.
            </p>
            <p>
              I work great under pressure and capable of handling multiple tasks
              and projects simultaneously.
            </p>
            <p>
              I have high motivation, a passion for developing and a strong will
              to prove myself.
            </p>
          </div>
          <div className="tech">
            <span className="title">Technologies</span>
            <p>
              In my studies, I became proficient in developing in JavaScript and
              TypeScript using frameworks such as React, Angular and Node.js
            </p>
            <p>
              In those frameworks I am using various libraries such as Redux and
              axios while using React, Express while using Node.js and more!
            </p>
            <p>
              But I'm always trying to study and use more technologies,
              frameworks and libraries
            </p>
          </div>
          <div></div>
        </div>
        <div></div>
        <div className="sideText">
          <div></div>
          <div className="contactInfo">
            <div className="email">
              <span className="name">E-mail </span>
              <span>galvit25@gmail.com</span>
            </div>
            <div className="phone">
              <span className="name">Phone Number </span>
              <span>050-408-2139</span>
            </div>
            <div className="residency">
              <span className="name">Residency </span>
              <span>Tel Aviv, Israel</span>
            </div>
          </div>
          <div></div>
          <div className="whatIDo">
            <span className="title">What I do</span>
            <div className="examples">
              <div></div>
              <div className="side">
                <div></div>
                <div className="example">
                  <div className="title">
                    <img src={website} />
                    <span> Websites</span>
                  </div>
                  <div>
                    <span>
                      Building a website , can be used to promote the business
                      and showcase your products to the public. In addition, a
                      website can improve the credibility and trustworthiness of
                      the business in the eyes of customers.
                    </span>
                  </div>
                </div>
                <div></div>
                <div className="example">
                  <div className="title">
                    <img src={webSystems} />
                    <span> Web Systems</span>
                  </div>
                  <div>
                    <span>
                      Building a system that is tailored to the customer,
                      includes a user system, few dashboards, data display, and
                      data analysis.
                    </span>
                  </div>
                </div>
                <div></div>
              </div>
              <div></div>
              <div className="side">
                <div></div>
                <div className="example">
                  <div className="title">
                    <img src={landingpage} />
                    <span> Landing Page</span>
                  </div>
                  <div>
                    <span>
                      Building a landing page is for a web page, created
                      specifically for the purpose of a marketing or
                      advertising. It is designed to direct the visitor to take
                      a specific action, such as making a purchase or filling
                      out a form.
                    </span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
}

export default About;
