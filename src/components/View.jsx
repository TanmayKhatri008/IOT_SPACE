import { useState } from "react";
import { IoIosPerson } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import "./View.css";
import Toggle from "./Toggle";

function View({ users, showActive, setShowActive, searchTerm, setSearchTerm }) {
  const [activeTab, setActiveTab] = useState("operators");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="View-main">
      <div className="View">
        <p>View:</p>
        <div
          className={`toggle-button ${activeTab === "operators" ? "active" : ""}`}
          onClick={() => handleClick("operators")}
        >
          <IoIosPerson />
          <p>Operators</p>
        </div>
        <div
          className={`toggle-button ${activeTab === "stations" ? "active" : ""}`}
          onClick={() => handleClick("stations")}
        >
          <CiBoxList />
          <p>Stations</p>
        </div>
      </div>
      <Toggle
        users={users}
        showActive={showActive}
        setShowActive={setShowActive}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default View;
