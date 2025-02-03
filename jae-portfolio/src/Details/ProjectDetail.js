import React, { forwardRef, useEffect, useState } from "react";

import Card from "../components/Card";
import { projectItems } from "./projectItems";
import "../Details_css/ProjectDetail.css";

const projectDetail = forwardRef((props, ref) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectItems.length - 1 : prevIndex - 1
    );
    setCurrentImageIndex(0); // 프로젝트 변경 시 이미지 슬라이더 초기화
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectItems.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentImageIndex(0);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? projectItems[currentProjectIndex].imageUrls.length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === projectItems[currentProjectIndex].imageUrls.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  const imageUrls = projectItems[currentProjectIndex].imageUrls;
  const hasMultipleImages = imageUrls.length > 1;

  return (
    <div className="container project" ref={ref}>
      <h1 className="project-title">
        <a name="Project">Projects</a>
      </h1>
      <div className="project-card-wrapper">
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/projectImgs/left.png"}
            onClick={handlePrevProject}
          />
        </div>
        <Card className="project-card">
          <div className="project-order">
            {currentProjectIndex + 1} / {projectItems.length}
          </div>
          <h2 className="project-title">
            {projectItems[currentProjectIndex].title}
          </h2>
          <h4 style={{ textAlign: "center", width: "100%" }}>
            {projectItems[currentProjectIndex].category}
          </h4>
          <section>
            <div className="project-img">
              <div className="slider">
                <img
                  src={
                    projectItems[currentProjectIndex].imageUrls[
                      currentImageIndex
                    ]
                  }
                  alt={projectItems[currentProjectIndex].title}
                />
                {hasMultipleImages && (
                  <div className="slider-controls">
                    <button onClick={handlePrevImage}>{"<"}</button>
                    <button onClick={handleNextImage}>{">"}</button>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section>
            <article className="info-article">
              <p className="link-wrapper">
                Github
                <br />
              </p>
              <a href={projectItems[currentProjectIndex].githubLink}>
                {projectItems[currentProjectIndex].title}
              </a>

              {projectItems[currentProjectIndex].deploySite && (
                <>
                  <p className="link-wrapper">
                    배포한 사이트
                    <br />
                  </p>
                  <a
                    href={projectItems[currentProjectIndex].deploySite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectItems[currentProjectIndex].deploySiteName}
                  </a>
                </>
              )}
            </article>

            <article>
              <h3>프로젝트 소개</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: projectItems[currentProjectIndex].description,
                }}
              ></p>
              <h3>주요 기능</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: projectItems[currentProjectIndex].features,
                }}
              ></p>
              <h3>기술스택</h3>
              <p>{projectItems[currentProjectIndex].techStack}</p>
            </article>
          </section>
        </Card>
        <div className="slide">
          <img
            src={process.env.PUBLIC_URL + "/projectImgs/right.png"}
            onClick={handleNextProject}
          />
        </div>
      </div>
    </div>
  );
});

export default projectDetail;
