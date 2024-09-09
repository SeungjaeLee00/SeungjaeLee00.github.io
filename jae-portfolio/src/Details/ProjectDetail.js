import React, { forwardRef, useEffect, useState } from "react";

import Card from "../components/Card";
import { projectItems } from "./projectItems";
import "../Details_css/ProjectDetail.css";
import left from "../img/left.png";
import right from "../img/right.png";

const projectDetail = forwardRef((props, ref) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectItems.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="container project" ref={ref}>
      <h1 className="project-title">
        <a name="Project">Projects</a>
      </h1>
      <div className="project-card-wrapper">
        <div className="slide">
          <img src={left} onClick={handlePrevProject} />
        </div>
        <Card className="project-card">
          <div className="project-order">
            {currentProjectIndex + 1} / {projectItems.length}
          </div>
          <h2 className="project-title">
            {projectItems[currentProjectIndex].title}
          </h2>
          <h4>{projectItems[currentProjectIndex].category}</h4>
          <section>
            <article className="info-article">
              <img
                src={projectItems[currentProjectIndex].imageUrl}
                alt={projectItems[currentProjectIndex].title}
              />
              <p className="link-wrapper">Github</p>
              <a href={projectItems[currentProjectIndex].githubLink}>
                {projectItems[currentProjectIndex].title}
              </a>
            </article>
            <article>
              <h3>프로젝트 소개</h3>
              <p>{projectItems[currentProjectIndex].description}</p>
              <h3>주요 기능</h3>
              <p>{projectItems[currentProjectIndex].features}</p>
              <h3>회고</h3>
              <p>{projectItems[currentProjectIndex].retrospective}</p>
              <h3>기술스택</h3>
              <p>{projectItems[currentProjectIndex].techStack}</p>
            </article>
          </section>
        </Card>
        <div className="slide">
          <img src={right} onClick={handleNextProject} />
        </div>
      </div>
    </div>
  );
});

export default projectDetail;
