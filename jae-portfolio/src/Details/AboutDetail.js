import React, { forwardRef } from "react";

const aboutDetail = forwardRef((props, ref) => {
  return (
    <div className="home">
      <h1 className="home-title">
        <a className="home">안녕하세요.</a>
      </h1>
      <p>멈추지 않고 성장하고 있는 예비 풀스택 개발자,</p>
      <p>이승재 입니다.</p>
    </div>
  );
});

export default aboutDetail;
