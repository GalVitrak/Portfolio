import "./Card.css";
import linkedInLogo from "../../../Assets/Images/linkedin.png";
import gitHubLogo from "../../../Assets/Images/github.png";
import whatsAppLogo from "../../../Assets/Images/whatsapp.png";
import bitmoji from "../../../Assets/Images/bitmoji2.jpeg";
import cv from "../../../Assets/Files/Gal Vitrak Resume.pdf";


function Card(): JSX.Element {
  return (
    <div className="Card">
      <div className="image">
        <img src={bitmoji} />
      </div>

      <div className="intro">
        <div className="headerInfo">
        <span className="headSpan">Gal Vitrak</span>
        <span className="lowerSpan">Full Stack Web Developer</span>
        </div>
        <div></div>
        <div className="links">
          <div></div>
          <a
            href="https://www.linkedin.com/in/gal-vitrak/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInLogo} />
          </a>
          <div></div>

          <a
            href="https://github.com/GalVitrak"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubLogo} />
          </a>

          <div></div>

          <a
            href="https://wa.me/+972504082139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsAppLogo} />
          </a>

          <div></div>
        </div>
      </div>

      <div className="cvDownload">
        <a className="btn btn-light btn-lg btn-outline-dark rounded-5" href={cv} download="Gal Vitrak Resume">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Card;
