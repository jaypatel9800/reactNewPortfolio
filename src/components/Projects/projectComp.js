import React from "react";
import "./projectComp.css";

const projectComp = ({ link, MainImg, altName, onclick }) => {
  return (
    <div className="project__img">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={MainImg} alt={altName} />
      </a>
      <button onClick={onclick} className="project__detailBtn">
        Details
      </button>
    </div>
  );
};

export default projectComp;
