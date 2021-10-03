import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="hero" id="Home">
        <div className="hero-banner">
          <h1>Front-End Web Developer</h1>
          <h4>
            Code is the <span>Future</span>. My name is Marko and I have a
            passion for creating creative content using new technologies{" "}
            <span className="header-emoji">🧑🏻</span>.
          </h4>
          <Link
            className="myData"
            to="About"
            spy={true}
            smooth="true"
            offset={-70}
            duration={500}
          >
            CV
          </Link>
        </div>
        <div className="hero-right">
          <div className="hero-info">
            <h3>Hi, I'm Marko</h3>
          </div>
          <div className="hero-avatar">
            <p>
              <span className="hero-avatar-bio">React.js</span> Developer,
            </p>
            <p>
              The most important thing about coding is
              <span className="practice"> practice</span>, there is nothing like
              enough <span className="practice">practice</span> and eventually
              it is the <span className="practice">practice</span> that will
              make you perfect.
            </p>
            <p>
              Down below you can check some of my projects 👇🏻, feel free to
              contact me.
            </p>
            <h3 style={{ paddingTop: "25px" }}>
              🔎 Skills, I will let others to judge.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
