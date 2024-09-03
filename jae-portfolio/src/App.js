import React, { useRef } from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AboutDetail from "./Details/AboutDetail";
import ArchivingDetail from "./Details/ArchivingDetail";
import SkillDetail from "./Details/SkillDetail";
import ProjectDetail from "./Details/ProjectDetail";
import ContactDetail from "./Details/ContactDetail";

function App() {
  const HomeRef = useRef(null);

  const moveHandler = () => {
    HomeRef.current.scollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header move={moveHandler} />
      <AboutDetail ref={HomeRef} />
      <ArchivingDetail ref={HomeRef} />
      <SkillDetail ref={HomeRef} />
      <ProjectDetail ref={HomeRef} />
      <ContactDetail ref={HomeRef} />
      <Footer />
    </div>
  );
}

export default App;
