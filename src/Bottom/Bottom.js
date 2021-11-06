import React from "react";
import "./Bottom.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CV from "../Cv/Fake Resume.pdf";
import { Link } from "react-scroll";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Bottom() {
  return (
    <div className="bottom-section" id="About">
      <h1>Download My Resume</h1>
      <h4>
        With a simple click find more about me <span className="emoji">🧑🏻</span>
        .
      </h4>
      <a className="resume" download={CV} href={CV}>
        Download Resume 👈🏻
      </a>
      <div className="bottom-links">
        <a href="mailto:markobeg15@gmail.com">
          <EmailIcon className="icons" fontSize="large"></EmailIcon>
        </a>
        <a href="https://github.com/MarkoBeg" target="_blank">
          <GitHubIcon className="icons" fontSize="large"></GitHubIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/marko-beg-77390a225/"
          target="_blank"
        >
          <LinkedInIcon className="icons" fontSize="large"></LinkedInIcon>
        </a>
      </div>
      <Link
        className="expand"
        to="Home"
        spy={true}
        smooth="true"
        offset={-70}
        duration={500}
      >
        <ExpandLessIcon></ExpandLessIcon>
      </Link>
    </div>
  );
}
