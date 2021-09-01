import React, { useState } from "react";
import "./projects.css";
import { useHistory } from "react-router-dom";
import Back from "../../assets/back.svg";
import ChatApp from "../../assets/project/chatApp.png";
import ipAdd from "../../assets/project/ipAdd.png";
import todo from "../../assets/project/todo.jpg";
import amazon from "../../assets/project/amazon.png";
import sunShine from "../../assets/project/sunshine.jpg";
import form from "../../assets/project/stepform.png";
import ProjectComp from "./projectComp";
import InnerComp from "./InnerComp";

const Projects = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(true);
  const [third, setThird] = useState(true);
  const [fourth, setFourth] = useState(true);
  const [fifth, setFifth] = useState(true);
  const [six, setSix] = useState(true);

  const history = useHistory();
  return (
    <div className="project__main">
      <div className="project__innerDiv">
        <h1 className="project__mainHeading">Projects</h1>
        <img
          src={Back}
          alt="back"
          className="project__backBtn"
          onClick={() => history.replace("/")}
        />
        <div className="project__items">
          <div className="project__project">
            {first && (
              <ProjectComp
                link="https://csb-tnopx.netlify.app/"
                MainImg={ChatApp}
                altName="chat app"
                onclick={() => setFirst(false)}
              />
            )}
            {!first && (
              <InnerComp
                leave={() => setFirst(true)}
                title="Real Time ChatApp"
                one="ReactJs"
                two="Socket.io"
                three="Nodejs"
                four="Material-Ui"
                closeBtn={() => setFirst(true)}
              />
            )}
          </div>

          <div className="project__project">
            {second && (
              <ProjectComp
                link="https://csb-c0snf.netlify.app/"
                MainImg={ipAdd}
                altName="ip Address"
                onclick={() => setSecond(false)}
              />
            )}
            {!second && (
              <InnerComp
                leave={() => setSecond(true)}
                title="Ip Address Tracker"
                one="ReactJs"
                two="IP Geolocation API"
                three="leafletjs"
                four="styled components"
                closeBtn={() => setSecond(true)}
              />
            )}
          </div>

          <div className="project__project">
            {third && (
              <ProjectComp
                link="https://jaypatel9800.github.io/todos/#/"
                MainImg={todo}
                altName="todo"
                onclick={() => setThird(false)}
              />
            )}
            {!third && (
              <InnerComp
                leave={() => setThird(true)}
                title="Todo App"
                one="ReactJs"
                two="CSS"
                three="React Routers"
                four="With Theme Toggle"
                closeBtn={() => setThird(true)}
              />
            )}
          </div>

          <div className="project__project">
            {fourth && (
              <ProjectComp
                link="https://qkd45.csb.app/"
                MainImg={amazon}
                altName="amazon"
                onclick={() => setFourth(false)}
              />
            )}
            {!fourth && (
              <InnerComp
                leave={() => setFourth(true)}
                title="Amazon Clone"
                one="ReactJs"
                two="Context API"
                three="Firebase Auth"
                four="React Routers"
                closeBtn={() => setFourth(true)}
              />
            )}
          </div>

          <div className="project__project">
            {fifth && (
              <ProjectComp
                link="https://jaypatel9800.github.io/sunShine-landingPage/"
                MainImg={sunShine}
                altName="sunShine landing page"
                onclick={() => setFifth(false)}
              />
            )}
            {!fifth && (
              <InnerComp
                leave={() => setFifth(true)}
                title="SunShine Landing Page"
                one="HTML"
                two="CSS Flex"
                three="CSS Grid"
                four="JavaScript"
                closeBtn={() => setFifth(true)}
              />
            )}
          </div>

          <div className="project__project">
            {six && (
              <ProjectComp
                link="https://csb-qc7y4.netlify.app/"
                MainImg={form}
                altName="React step form"
                onclick={() => setSix(false)}
              />
            )}
            {!six && (
              <InnerComp
                leave={() => setSix(true)}
                title="React Step Form"
                one="ReactJs"
                two="Material-Ui"
                three="React hooks helper"
                four="With validation"
                closeBtn={() => setSix(true)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
