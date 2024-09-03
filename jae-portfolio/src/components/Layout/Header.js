import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          <a href="#home">Portfolio</a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#Archiving">Archiving</a>
          </div>
          <div className="menu-item">
            <a href="#Skills">Tech Skills</a>
          </div>
          <div className="menu-item">
            <a href="#Project">Project</a>
          </div>
          <div className="menu-item">
            <a href="#Contact">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
