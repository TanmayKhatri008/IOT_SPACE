import React from "react";
import { Link, useParams } from 'react-router-dom'; // Import Link and useParams
import styles from "./NavTabs.module.css";

const tabs = [
  { name: "AREA DASHBOARD", path: "" }, // Base path for operator dashboard
  { name: "DEPLOYMENT", path: "deployment" },
  { name: "ON THE JOB TRAINING", path: "training" },
  { name: "SKILL MATRIX", path: "skills" },
  { name: "REPORTS", path: "reports" }
];

const NavTabs = () => {
  const { id } = useParams(); // Get the operator ID from the URL
  const currentPath = window.location.pathname; // Or use useLocation hook

  return (
    <div className={styles.navContainer}>
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={`/operator/${id}/${tab.path}`} // Construct the path
          className={`${styles.navItem} ${currentPath.includes(tab.path) ? styles.active : ""}`}
          // The active class logic might need refinement based on exact path matching
        >
          {tab.name}
        </Link>
      ))}
    </div>
  );
};

export default NavTabs;