import "./mainpage.css";
import React from "react";
import { useState } from "react";
import github from "../../assets/github.svg";
import linkdin from "../../assets/linkedin.svg";
import twitter from "../../assets/mail.svg";
import { Link } from "react-router-dom";
import MouseOutlinedIcon from "@material-ui/icons/MouseOutlined";

// I changed teitter logo with mail logo but i didnt change name so all twitters is mail.

const MainPage = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const hoverText = () => {
    setFirst(true);
    setSecond(true);
    setThird(true);
    if (first && second && third) {
      setFirst(false);
      setSecond(false);
      setThird(false);
    }
  };
  return (
    <div className="mainpage__main">
      <div className="mainpage__first">
        {!first && <h1 onMouseEnter={() => setFirst(true)}>Hello.</h1>}
        {first && (
          <h1
            className="mainpage__hoverText"
            onMouseLeave={() => setFirst(false)}
          >
            <Link to="/about" className="mainpage__link">
              About
            </Link>
          </h1>
        )}
      </div>
      <div className="mainpage__second">
        {!second && <h1 onMouseEnter={() => setSecond(true)}>I am</h1>}
        {second && (
          <h1
            className="mainpage__hoverText"
            onMouseLeave={() => setSecond(false)}
          >
            <Link to="/skill" className="mainpage__link">
              Skills
            </Link>
          </h1>
        )}
      </div>
      <div className="mainpage__third">
        {!third && <h1 onMouseEnter={() => setThird(true)}>Jay</h1>}
        {third && (
          <h1
            className="mainpage__hoverText"
            onMouseLeave={() => setThird(false)}
          >
            <Link to="projects" className="mainpage__link">
              Projects
            </Link>
          </h1>
        )}
      </div>
      <button onClick={hoverText} className="mainpage__button">
        <MouseOutlinedIcon />
      </button>
      <a
        href="https://github.com/jaypatel9800"
        target="_blank"
        rel="noreferrer"
        className="mainpage__githubLogo"
      >
        <img src={github} alt="github" className=" social" />
      </a>
      <a
        href="https://www.linkedin.com/in/jay-patel-aa396618b/"
        target="_blank"
        rel="noreferrer"
        className="mainpage__linkdinLogo"
      >
        <img src={linkdin} alt="linkdin" className="social" />
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=jaypatel9800@gmail.com&su&body=Any+Massage?"
        target="_blank"
        rel="noreferrer"
        className="mainpage__twitterLogo"
      >
        <img src={twitter} alt="twitter" className="social" />
      </a>
    </div>
  );
};

export default MainPage;
