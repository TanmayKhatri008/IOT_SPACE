import { useState } from "react";
import "./Tabs.css";
import Shift from "./shift";
import DeploymentTable from "./deployment";
import Attendancedropdown from "./attendance-dropdown";
import AttendanceTable from "./attendance_table";
import WorkingDays from "./WorkingDays";

function Tabs({ user }) {
  const [activeTab, setActiveTab] = useState("DEPLOYMENT");

  const tabs = ["DEPLOYMENT", "ATTENDANCE", "SKILLS", "CLASSROOM TRAININGS"];

  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <p
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>

      {activeTab === "DEPLOYMENT" && (
        <div className="DEPLOYMENT">
          <Shift />
          <DeploymentTable user={user} />
        </div>
      )}

      {activeTab === "ATTENDANCE" && (
        <div className="ATTENDANCE">
          <Attendancedropdown />
          <WorkingDays user={user} />
          <AttendanceTable attendance={user.attendance} />
        </div>
      )}

    </div>
  );
}

export default Tabs;
