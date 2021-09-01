import React from "react";
import "./skills.css";
import Back from "../../assets/back.svg";
import { useHistory } from "react-router-dom";
import html from "../../assets/skill/htmlLogo.svg";
import css from "../../assets/skill/cssLogo.svg";
import js from "../../assets/skill/jsLogo.svg";
import react from "../../assets/skill/reactLogo.svg";
import git from "../../assets/skill/gitLogo.svg";
import redux from "../../assets/skill/reduxLogo.svg";
import node from "../../assets/skill/nodeJsLogo.svg";
import python from "../../assets/skill/pythonLogo.svg";
import matlab from "../../assets/skill/matlabLogo.svg";

const Skills = () => {
  const history = useHistory();
  return (
    <div className="skills__main">
      <div className="skills__innerDiv">
        <h1 className="skills__mainHeading">Skills</h1>
        <img
          src={Back}
          alt="back"
          className="skills__backBtn"
          onClick={() => history.replace("/")}
        />
        <div className="skills__items">
          <img src={html} alt="htmllogo" />
          <img src={css} alt="csslogo" />
          <img src={js} alt="jslogo" />
          <img src={react} alt="reactlogo" />
          <img src={git} alt="gitlogo" />
          <img src={redux} alt="reduxlogo" />
          <img src={node} alt="nodelogo" />
          <img src={python} alt="pythonlogo" />
          <img src={matlab} alt="matlablogo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
