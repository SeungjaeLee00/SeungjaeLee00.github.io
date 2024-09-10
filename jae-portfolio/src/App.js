import React, { useRef, useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import TopButton from "./components/TopButton";

import AboutDetail from "./Details/AboutDetail";
import ArchivingDetail from "./Details/ArchivingDetail";
import SkillDetail from "./Details/SkillDetail";
import ProjectDetail from "./Details/ProjectDetail";
import ContactDetail from "./Details/ContactDetail";

function App() {
  const HomeRef = useRef(null);
  const ArchivingRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState([]);

  const moveToHomeHandler = () => {
    HomeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToArcHandler = () => {
    ArchivingRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToSkillsHandler = () => {
    SkillsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToProjectHandler = () => {
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const moveToContactHandler = () => {
    ContactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: ArchivingRef, id: "archiving" },
        { ref: SkillsRef, id: "skills" },
        { ref: ProjectRef, id: "project" },
        { ref: ContactRef, id: "contact" },
      ];

      const visibleSections = sections
        .filter(({ ref }) => {
          const rect = ref.current.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 4
          );
        })
        .map(({ id }) => id);

      setVisibleSections(visibleSections);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header
        moveToHome={moveToHomeHandler}
        moveToArc={moveToArcHandler}
        moveToSkill={moveToSkillsHandler}
        moveToPrj={moveToProjectHandler}
        moveToContact={moveToContactHandler}
      />
      <AboutDetail ref={HomeRef} moveToArc={moveToHomeHandler} />
      <div
        ref={ArchivingRef}
        className={`section ${
          visibleSections.includes("archiving") && "visible"
        }`}
      >
        <ArchivingDetail />
      </div>
      <div
        ref={SkillsRef}
        className={`section ${visibleSections.includes("skills") && "visible"}`}
      >
        <SkillDetail />
      </div>
      <div
        ref={ProjectRef}
        className={`section ${
          visibleSections.includes("project") && "visible"
        }`}
      >
        <ProjectDetail />
      </div>
      <div
        ref={ContactRef}
        className={`section ${
          visibleSections.includes("contact") && "visible"
        }`}
      >
        <ContactDetail />
      </div>
      <TopButton />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
