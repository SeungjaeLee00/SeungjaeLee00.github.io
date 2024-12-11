export const projectItems = [
  {
    title: "🛒물품대여서비스",
    category: "개인 프로젝트",
    imageUrls: [
      "/projectImgs/billim_main.png",
      "/projectImgs/billim_login.png",
      "/projectImgs/billim_signup.png",
      "/projectImgs/billim_myPage.png",
      "/projectImgs/billim_chat.png",
    ],
    githubLink: "https://github.com/SeungjaeLee00/rentalService_React",
    description: `이 프로젝트는 중고물품 거래 서비스를 참고하여 물품 대여 서비스를 구현한 프로젝트입니다.<br />
      사용자는 로그인 및 소셜 로그인 기능을 통해 서비스를 이용할 수 있으며, 원하는 물품을 등록하고, 대여하는 과정을 통해 사용자 간 거래를 진행할 수 있습니다.<br />
      채팅 기능을 통해 거래 상대와 직접 소통이 가능하며, 문제가 발생할 경우 신고 기능을 통해 관리자에게 문제를 알릴 수 있습니다.<br />
      전체적인 기능은 관리자가 직접 운영하며, 원활한 서비스 제공을 목표로 합니다.`,
    features: `1. 로그인 및 로그아웃 기능 제공<br />
      2. 소셜 로그인 기능 지원 (네이버, 카카오톡 등)<br />
      3. 회원가입을 통한 사용자 계정 관리<br />
      4. 물품 등록 및 수정 기능<br />
      5. 사용자가 등록한 물품 대여 및 거래 진행<br />
      6. 채팅을 통한 실시간 소통 기능<br />
      7. 문제 발생 시 신고 기능 제공<br />
      8. 관리자가 사용자 및 거래 내역을 관리`,
    techStack: "React, CSS, HTML",
  },
  {
    title: "💁‍♀️나만의 포트폴리오",
    category: "개인 프로젝트",
    imageUrls: [
      `/projectImgs/potfoilo1.png`,
      `/projectImgs/about.png`,
      `/projectImgs/skills.png`,
      `/projectImgs/project.png`,
      `/projectImgs/contact.png`,
    ],
    githubLink: "https://github.com/SeungjaeLee00/SeungjaeLee00.github.io",
    description: `이 프로젝트는 React와 GitHub Pages를 활용하여 개인 포트폴리오 웹사이트를 제작한 프로젝트입니다.<br /> 
    웹사이트를 통해 본인의 자기소개, 기술 스택, 프로젝트 경험, 그리고 문의 여부를 쉽게 보여줄 수 있습니다.<br /> 
    React 컴포넌트를 활용하여 다양한 정보를 효율적으로 관리하고, GitHub Pages를 통해 간단하게 배포할 수 있도록 구성되었습니다.<br />`,
    features: `1. 자기소개: 본인의 경력과 성과를 담은 소개 페이지<br />
    2. 스킬: 보유한 기술 스택을 보여주는 페이지<br />
    3. 프로젝트: 주요 프로젝트들을 설명하고 관련 링크를 제공하는 페이지<br />
    4. 문의: 방문자가 연락할 수 있도록 구성된 문의 페이지<br />`,
    techStack: "React, CSS, HTML, Github",
  },
  // {
  //   title: "⚙️Boilerplate Code",
  //   category: "개인 프로젝트",
  //   imageUrls: [
  //     `/projectImgs/login.gif`,
  //     `/projectImgs/logout.gif`,
  //     `/projectImgs/signup.gif`,
  //     `/projectImgs/auth.gif`,
  //   ],
  //   githubLink: "https://github.com/SeungjaeLee00/boiler-plate-ko",
  //   description: `이 프로젝트는 React, Node.js, Express.js, MongoDB를 활용하여 사용자 인증 및 관리를 위한 보일러플레이트 코드를 구현한 프로젝트입니다.<br />
  //   회원가입, 로그인 및 로그아웃 기능을 포함하며, JWT 토큰을 통해 사용자 인증과 세션 관리를 처리합니다.<br />
  //   이 코드는 사용자 인증을 필요로 하는 웹 애플리케이션의 기본 틀을 제공하며, 빠르게 프로젝트를 시작할 수 있도록 돕습니다.<br />
  //   또한, RESTful API와 MongoDB를 통해 백엔드 서버와 데이터베이스 관리를 효율적으로 구성하였습니다.<br />`,
  //   features: `1. 회원가입 기능: 사용자 계정 생성<br />
  //   2. 로그인 및 로그아웃 기능: 세션 관리를 위한 JWT 토큰 사용<br />
  //   3. JWT 토큰 관리: 인증된 사용자 세션을 보호하고 유지<br />
  //   4. RESTful API 기반 백엔드 구성<br />
  //   5. MongoDB와의 연동을 통한 데이터베이스 관리`,
  //   techStack: "React, Node.js, Express.js, MongoDB",
  // },
  {
    title:
      "👫MediaPipe Holistic을 활용한 모션 인식 및 특정 행동 수행 여부 판단",
    category: "개인 프로젝트",
    imageUrls: [`/projectImgs/mediaPipe.png`],
    githubLink:
      "https://github.com/SeungjaeLee00/motionRecognition_MediaPipeHolistic",
    description: `이 프로젝트는 MediaPipe Holistic을 사용해 얼굴, 손, 그리고 포즈의 랜드마크를 추적하여 사람의 동작을 인식하고 특정 행동을 감지하는 시스템입니다.<br />
    이를 통해 인간의 다양한 움직임을 분석하고 그 정확도를 평가하는 솔루션을 제공합니다.`,
    features: `1. 얼굴, 손, 포즈 추적을 결합한 종합적인 동작 인식<br />
2. 트래킹된 랜드마크를 기반으로 특정 행동을 감지 및 식별<br />
3. 사용자의 행동이 올바르게 수행되었는지 실시간으로 분석 및 판단`,
    techStack: "Python",
  },
  {
    title: "🌄이미지 분류를 위한 Custom CNN",
    category: "개인 프로젝트",
    imageUrls: [`/projectImgs/customCNN.png`],
    githubLink:
      "https://github.com/SeungjaeLee00/imageClassification_customCNN",
    description: `이 프로젝트는 PyTorch를 사용하여 사자와 호랑이 이미지를 분류하는 커스텀 CNN을 구축하고 Google Colab에서 이를 구현합니다.<br />
주어진 데이터셋을 기반으로 딥러닝 모델을 훈련하여 이미지 분류 문제를 해결하고, 학습, 평가 및 결과 시각화를 통해 모델의 성능을 분석합니다.`,
    features: `1. 커스텀 CNN 모델 구축: 합성곱 신경망을 활용한 사자와 호랑이 이미지 분류<br />
2. 데이터셋 분할: 훈련, 검증, 테스트 데이터셋으로 70%, 15%, 15% 분할<br />
3. 모델 최적화: Adam 옵티마이저 및 교차 엔트로피 손실을 사용한 최적화<br />
4. 결과 시각화: 훈련 과정에서의 손실과 정확도, 테스트 데이터셋의 예측 결과 시각화`,
    techStack: "Python, Google Colab",
  },
];
