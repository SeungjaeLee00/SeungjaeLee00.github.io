import React, { forwardRef } from "react";

import Card from "../components/Card";
import "../Details_css/ProjectDetail.css";

const projectDetail = forwardRef((props, ref) => {
  return (
    <div className="Project">
      <h1 className="project-title">
        <a name="Project">Projects</a>
      </h1>
      <div className="card-wrapper">
        <Card />
      </div>
    </div>
  );
});

export default projectDetail;
