import React, { forwardRef } from "react";

import Card from "../components/Card";
import "../Details_css/SkillDetail.css";

import reactImg from "../img/react.png";
import cssImg from "../img/css.png";
import htmlImg from "../img/html.png";
import jsImg from "../img/js.png";
import nodejsImg from "../img/nodejs.png";
import mongoDBImg from "../img/mondodb.png";
import pythonImg from "../img/python.png";
import githubImg from "../img/github.png";

const skillDetail = forwardRef((props, ref) => {
  return (
    <div className="Skills" ref={ref}>
      <h1 className="skill-title">
        <a name="Skills">Tech Skills</a>
      </h1>
      <div className="card-wrapper">
        <Card className="front-card">
          <h3 className="front-title">Frontend</h3>
          <div className="front-img">
            <img src={cssImg} alt="CSS" />
            <img src={htmlImg} alt="HTML" />
            <img src={jsImg} alt="JS" />
            <img src={reactImg} alt="React" />
          </div>
        </Card>
        <Card className="back-card">
          <h3 className="back-title">Backend</h3>
          <div className="back-img">
            <img src={nodejsImg} alt="Node.js" />
            <img src={mongoDBImg} alt="MongoDB" />
          </div>
        </Card>
        <Card className="etc-card">
          <h3 className="etc-title">ETC</h3>
          <div className="etc-img">
            <img src={githubImg} alt="Github" />
            <img src={pythonImg} alt="Python" />
          </div>
        </Card>
      </div>
    </div>
  );
});

export default skillDetail;
