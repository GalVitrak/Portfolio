import "./Portfolio.css";
import travelPlanner from "../../../Assets/Images/travel-planner.png";
import website from "../../../Assets/Images/websiteround.png";
import github from "../../../Assets/Images/githubround.png";
import inProgress from "../../../Assets/Images/inProgress.png";

function Portfolio(): JSX.Element {
  return (
    <div className="Portfolio">
      <div className="projectCard">
        <div className="imageContainer">
          <img src={travelPlanner} alt="screenshot" />
        </div>
        <div>
          <h2>Travel Planner</h2>
        </div>
        <div className="descriptionContainer">
          <div></div>
          <p>
            This is a web system to help plan and manage vacations. You can
            filter vacations by destination, date and price. While logged in you
            can also follow vacations and see them in a separate page.
          </p>
          <div></div>
        </div>
        <div className="technologiesContainer">
          <h4>Technologies</h4>
          <span>React | Redux | Node.js | Express | MySQL | AWS  </span>
        </div>
        <div className="compContainer">
          <h4>Compatibility</h4>
          <span>Desktop</span>
        </div>
        <div className="linksContainer">
          <h4>Links</h4>
          <div className="linksImageContainer">
            <a href="https://travel-planner-gv.herokuapp.com/home" target="_blank"
            rel="noopener noreferrer">
              <img src={website} alt="site"  />
            </a>
            <a href="https://github.com/GalVitrak/Travel-Planner" target="_blank"
            rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>

      <div className="projectCard">
        <div className="imageContainer">
          <img src={inProgress} alt="screenshot" />
        </div>
        <div>
          <h2>Photo Project</h2>
        </div>
        <div className="descriptionContainer">
          <div></div>
          <p>
            This is a web system used to upload and share images and albums.
            You can search albums by a unique code, like and comment on images.
            You can also create albums and decide who can watch and edit them.
          </p>
          <div></div>
        </div>
        <div className="technologiesContainer">
          <h4>Technologies</h4>
          <span>Angular | Node.js | Express | MongoDB | AWS </span>
        </div>
        <div className="compContainer">
          <h4>Compatibility</h4>
          <span>TBD</span>
        </div>
        <div className="linksContainer">
          <h4>Links</h4>
          <div className="linksImageContainer">
            <a href="https://github.com/GalVitrak/PhotoProject" target="_blank"
            rel="noopener noreferrer">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;