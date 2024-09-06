import React, { useRef } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AboutDetail from "./Details/AboutDetail";
import ArchivingDetail from "./Details/ArchivingDetail";
import SkillDetail from "./Details/SkillDetail";
import ProjectDetail from "./Details/ProjectDetail";
import ContactDetail from "./Details/ContactDetail";
import TopButton from "./components/TopButton";

function App() {
  const HomeRef = useRef(null);

  const moveHandler = () => {
    HomeRef.current.scollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <div className="header">
        <Header move={moveHandler} />
      </div>
      <div className="body">
        <AboutDetail ref={HomeRef} />

        <div className="section">
          <ArchivingDetail ref={HomeRef} />
        </div>
        <div className="section">
          <SkillDetail ref={HomeRef} />
        </div>
        <div className="section">
          <ProjectDetail ref={HomeRef} />
        </div>
        <div className="section">
          <ContactDetail ref={HomeRef} />
        </div>
      </div>
      <TopButton />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
