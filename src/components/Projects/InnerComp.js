import React from "react";
import "./innercomp.css";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";

const InnerComp = ({ leave, title, one, two, three, four, closeBtn }) => {
  return (
    <div onMouseLeave={leave} className="project__info">
      <h2>{title}</h2>
      <div>
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
        <p>{four}</p>
      </div>
      <button className="project__closeBtn" onClick={closeBtn}>
        <HighlightOffRoundedIcon />
      </button>
    </div>
  );
};

export default InnerComp;
