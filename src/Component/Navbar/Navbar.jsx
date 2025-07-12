import React, { useState } from "react";
import "./Navbar.css";


const App = () => {
  const [selectedTab, setSelectedTab] = useState("Vehicle & Machinery");

  const tabs = [
    "Vehicle & Machinery",
    "Power Tools",
    "Distribution Board",
    "Batching Plant",
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">RCON <span>SPACE</span></div>
        <nav className="main-nav">
          {["Drawing", "Company", "Forms", "Planner", "P&M", "HR", "EHS", "QS", "QA/QC", "Admin", "Store"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
      </header>

      {/* Submenu */}
      <div className="sub-nav">
        {["Dashboard", "Task", "Work Status", "Space", "User", "Issue", "Mail", "Chat"].map((item) => (
          <span key={item}>{item}</span>
        ))}
        <div className="profile-info">
          <span>ID: 239B4</span>
          <span>Site engineer</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={selectedTab === tab ? "tab active" : "tab"}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <input type="text" placeholder="Select site" className="site-input" />
      </div>

      {/* Content */}
      <div className="content">
        <h3>{selectedTab} - Data will be shown here</h3>
      </div>
    </div>
  );
};

export default App;
