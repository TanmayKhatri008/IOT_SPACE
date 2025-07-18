// AttendanceTable.jsx
import React from "react";
import "./attendance_table.css";

const AttendanceTable = ({ attendance }) => {
  return (
    <div className="attendance-container">
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date ⬍</th>
            <th>Status ⬍</th>
            <th>Punch In ⬍</th>
            <th>Punch Out ⬍</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((entry, index) => (
            <tr key={index} className={entry.status === "Absent" ? "absent-row" : ""}>
              <td>{entry.date}</td>
              <td style={{ color: entry.status === "Absent" ? "red" : "black" }}>{entry.status}</td>
              <td>{entry.inTime !== "-" ? entry.inTime : "-"}</td>
              <td>{entry.outTime !== "-" ? entry.outTime : "Absent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
