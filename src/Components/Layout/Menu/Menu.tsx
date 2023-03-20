import { useState } from "react";
import { NavLink } from "react-router-dom";
import about from "../../../Assets/Images/about.png";
import aboutbw from "../../../Assets/Images/aboutbw.png";
import cv from "../../../Assets/Images/cv.png";
import cvbw from "../../../Assets/Images/cvbw.png";
import portfolio from "../../../Assets/Images/portfolio.png";
import portfoliobw from "../../../Assets/Images/portfoliobw.png";
import emailbw from "../../../Assets/Images/emailbw.png";
import email from "../../../Assets/Images/email.png";

import "./Menu.css";

function Menu(): JSX.Element {
  const [path, setPath] = useState<string>(window.location.pathname);

  return (
    <div className="Menu">
      <div></div>
      {path === "/about" || path=== "/" ? (
        <NavLink onClick={() => setPath("/about")} to="/about">
          <div className="menuOption" style={{ backgroundColor: "lightgray"}}>
            <img src={about} />
          </div>
        </NavLink>
      ) : (
        <NavLink onClick={() => setPath("/about")} to="/about">
          <div className="menuOption">
            <img src={aboutbw} />
          </div>
        </NavLink>
      )}

      {path === "/resume" ? (
        <NavLink onClick={() => setPath("/resume")} to="/resume">
          <div className="menuOption" style={{ backgroundColor: "lightgray"}}>
            <img src={cv} />
          </div>
        </NavLink>
      ) : (
        <NavLink onClick={() => setPath("/resume")} to="/resume">
          <div className="menuOption">
            <img src={cvbw} />
          </div>
        </NavLink>
      )}

      {path === "/portfolio" ? (
        <NavLink onClick={() => setPath("/portfolio")} to="/portfolio">
          <div className="menuOption" style={{ backgroundColor: "lightgray"}}>
            <img src={portfolio} />
          </div>
        </NavLink>
      ) : (
        <NavLink onClick={() => setPath("/portfolio")} to="/portfolio">
          <div className="menuOption">
            <img src={portfoliobw} />
          </div>
        </NavLink>
      )}

      {path === "/contact" ? (
        <NavLink onClick={() => setPath("/contact")} to="/contact">
          <div className="menuOption" style={{ backgroundColor: "lightgray" }}>
            <img src={email} />
          </div>
        </NavLink>
      ) : (
        <NavLink onClick={() => setPath("/contact")} to="/contact">
          <div className="menuOption">
            <img src={emailbw} />
          </div>
        </NavLink>
      )}
      <div></div>
    </div>
  );
}

export default Menu;
