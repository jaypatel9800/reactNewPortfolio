import React, { useState } from "react";
import "./about.css";
import { useHistory } from "react-router-dom";
import Back from "../../assets/back.svg";
import Person from "../../assets/aboutPerson.svg";
import Mypic from "../../assets/Mypic.jpg";
import Resume from "../../assets/document/Jay-resume.pdf";
import ResumeLogo from "../../assets/resumeLogo.svg";

const About = () => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory();
  return (
    <div className="about__main">
      <div className="about__InnerDiv">
        <h1 className="about__mainHeading">About me!</h1>
        <img
          src={Back}
          alt="back"
          className="about__backBtn"
          onClick={() => history.replace("/")}
        />
        <div className="about__imgSec">
          {!toggle && (
            <img
              src={Person}
              alt="LeptopPerson"
              onMouseEnter={() => setToggle(true)}
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <img
              src={Mypic}
              alt="mypic"
              onMouseLeave={() => setToggle(false)}
              onClick={() => setToggle(false)}
            />
          )}
        </div>
        <div className="about__descSec">
          <h2>
            An Electrical Engineer, Who loves coding and build things up.
            <br />
            Hello, My name is Jay Patel. I am currently active as a front-end
            developer. I started my coding journey in my college days. At first,
            I started learning python, Matlab, and fundamentals of programming.
            For the last two years, I am looking forward to my knowledge and
            skills in programming and I decided to start learning web
            development. At first, I started learning HTML, CSS, and JavaScript.
            After gaining decent experience in core languages, I started with
            ReactJs and other libraries. Also, I have 1+ experience in front-end
            development.
          </h2>
          <a href={Resume} target="_blank" rel="noreferrer" download>
            <img src={ResumeLogo} alt="Resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
