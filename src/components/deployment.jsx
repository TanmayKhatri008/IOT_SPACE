import React from "react";
import { FiDownload } from "react-icons/fi";
import "./DeploymentTable.css";

const DeploymentTable = ({ user }) => {
  const deployments = user.deployments || [];

  return (
    <div className="deployment-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th className="timeline-head"></th>
            <th>Actual Deployed Station</th>
            <th>Planned Station</th>
            <th>Shift</th>
            <th>4M-Man</th>
          </tr>
        </thead>
        <tbody>
          {deployments.map((item, index) => {
            const isToday = item.isToday;
            const isLast = index === deployments.length - 1;

            return (
              <tr key={index} className={isToday ? "today" : ""}>
                <td className="date-cell">
                  {isToday ? (
                    <>
                      <div className="today-label">Today</div>
                      <div className="today-date">({item.date} - Present)</div>
                    </>
                  ) : (
                    <span>{item.date}</span>
                  )}
                </td>
                <td className="timeline-cell">
                  <div className="timeline-wrapper">
                    {!isLast && <div className="timeline-line" />}
                    <div
                      className={`timeline-dot ${isToday ? "active" : ""}`}
                    />
                  </div>
                </td>
                <td>
                  <div
                    className={`cell-box ${
                      isToday ? "active-cell" : "light-cell"
                    }`}
                  >
                    <strong>{item.station}</strong> | {item.task}
                  </div>
                </td>
                <td>
                  <div
                    className={`cell-box ${
                      isToday ? "active-cell" : "light-cell"
                    }`}
                  >
                    Same as deployed
                  </div>
                </td>
                <td>
                  <div
                    className={`cell-box ${
                      isToday ? "active-cell" : "light-cell"
                    }`}
                  >
                    {item.type}
                  </div>
                </td>
                <td>
                  <div
                    className={`cell-box ${
                      isToday ? "active-cell" : "light-cell"
                    }`}
                  >
                    <FiDownload className="download-icon" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DeploymentTable;
