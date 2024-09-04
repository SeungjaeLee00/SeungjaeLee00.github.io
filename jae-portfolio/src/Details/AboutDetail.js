import React, { forwardRef } from "react";
import "../Details_css/AboutDetail.css";
import myphoto from "../img/potfoilo.jpg";

const aboutDetail = forwardRef((props, ref) => {
  return (
    <div className="home">
      <div className="home-myPhoto">
        <img src={myphoto} alt="My Photo" />
      </div>
      <div className="home-about">
        <h1 className="home-title">안녕하세요.</h1>
        <div className="home-text">
          <p>멈추지 않고 성장해 즐거운 예비 풀스택 개발자,</p>
          <p>
            <span className="highlight">이승재</span> 입니다.
          </p>
        </div>
      </div>
    </div>
  );
});

export default aboutDetail;
