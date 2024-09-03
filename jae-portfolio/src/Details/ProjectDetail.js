import React, { forwardRef } from "react";

const projectDetail = forwardRef((props, ref) => {
  return (
    <div className="Project">
      <h1 className="project-title">
        <a name="Project">Projects</a>
      </h1>
    </div>
  );
});

export default projectDetail;
