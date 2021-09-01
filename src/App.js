import React from "react";
import MainPage from "./components/mainpage/MainPage";
import Skill from "./components/skills/Skills";
import About from "./components/aboutpage/About";
import Projects from "./components/Projects/Projects";
import Back from "./assets/back.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="MainDiv">
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/skill">
            <Skill />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <img src={Back} alt="back" className="mainpage__backImg" />
      </div>
    </Router>
  );
};

export default App;
