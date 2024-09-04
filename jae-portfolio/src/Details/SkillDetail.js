import React, { forwardRef } from "react";

import Card from "../components/Card";
import "../Details_css/SkillDetail.css";

const skillDetail = forwardRef((props, ref) => {
  return (
    <div className="Skills">
      <h1 className="skill-title">
        <a name="Skills">Skill</a>
      </h1>
      <div className="card-wrapper">
        <Card />
      </div>
    </div>
  );
});

export default skillDetail;
