import "./About.css";
import website from "../../../Assets/Images/website.png";
import landingpage from "../../../Assets/Images/landingpage.png";
import webSystems from "../../../Assets/Images/web-systems.png";

function About(): JSX.Element {
  return (
    <div className="About">
      {window.innerWidth > 600 ? (
        <div className="aboutScreen">
          <div></div>
          <div className="mainText">
            <div></div>
            <span className="title">Hi! I'm Gal Vitrak</span>
            <div className="opening">
              <p>
                I'm a graduate of John Bryce College, where I studied Full Stack
                development in Web Technologies.
              </p>
              <p>
                I'm proficient in JavaScript and TypeScript and develop using
                frameworks such as Angular and React.
              </p>
              <p>
                I'm detail-oriented, a hardworking team player, and currently
                looking for my next challenge and a place to call home in the
                industry.
              </p>
              <p>
                I work well under pressure and am capable of handling multiple
                tasks and projects simultaneously.
              </p>
              <p>
                I am highly motivated, passionate about developing, and have a
                strong desire to prove myself.
              </p>
            </div>
            <div className="tech">
              <span className="title">Technologies</span>
              <p>
                During my studies, I became proficient in developing with
                JavaScript and TypeScript using frameworks such as React,
                Angular, and Node.js.
              </p>
              <p>
                I use various libraries such as Redux and Axios while using
                React and Express while using Node.js, and more!
              </p>
              <p>
                But I'm always trying to study and use more technologies,
                frameworks, and libraries.
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
              <span className="title">What I do:</span>
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
                        Building a website can be used to promote a business and
                        showcase its products to the public. Additionally, a
                        website can improve the credibility and trustworthiness
                        of the business in the eyes of customers.
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
                        Building a web system that is tailored to the customer's
                        needs: including a user system, several dashboards, data
                        display, and data analysis.
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
                        A landing page is a web page created specifically for
                        marketing or advertising purposes. It is designed to
                        direct the visitor to take a specific action, such as
                        making a purchase or filling out a form.
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
      ) : (
        <div className="aboutScreenMobile">
          <div></div>
          <div className="context">
            <div></div>
            <div className="aboutHeader">
              <span className="title">Hi! I'm Gal Vitrak</span>
              <div></div>
            </div>
            <div></div>
            <div className="introAndContact">
              <p>
                I'm a graduate of John Bryce College, where I studied Full Stack
                development in Web Technologies.
              </p>
              <div></div>
              <div>
                <div className="contactInfoMobile">
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
              </div>
            </div>
            <div className="mainText">
              <p>
                I'm proficient in JavaScript and TypeScript and develop using
                frameworks such as Angular and React.
              </p>
              <p>
                I'm detail-oriented, a hardworking team player, and currently
                looking for my next challenge and a place to call home in the
                industry.
              </p>
              <p>
                I work well under pressure and am capable of handling multiple
                tasks and projects simultaneously.
              </p>
              <p>
                I am highly motivated, passionate about developing, and have a
                strong desire to prove myself.
              </p>
            </div>
            <div className="tech">
              <span className="title">Technologies</span>
              <p>
                During my studies, I became proficient in developing with
                JavaScript and TypeScript using frameworks such as React,
                Angular, and Node.js.
              </p>
              <p>
                I use various libraries such as Redux and Axios while using
                React and Express while using Node.js, and more!
              </p>
              <p>
                But I'm always trying to study and use more technologies,
                frameworks, and libraries.
              </p>
            </div>
            <div className="whatIDo">
              <span className="title">What I do:</span>
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
                        Building a website can be used to promote a business and
                        showcase its products to the public. Additionally, a
                        website can improve the credibility and trustworthiness
                        of the business in the eyes of customers.
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
                        Building a web system that is tailored to the customer's
                        needs: including a user system, several dashboards, data
                        display, and data analysis.
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
                        A landing page is a web page created specifically for
                        marketing or advertising purposes. It is designed to
                        direct the visitor to take a specific action, such as
                        making a purchase or filling out a form.
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
      )}
    </div>
  );
}

export default About;
