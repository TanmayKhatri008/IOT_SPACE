import React from "react";
import styles from "./Dropdown_first.module.css"; // Make sure file has NO spaces

const dropdownData = [
  { id: "city", label: "Site", options: ["MSIL", "PSIL"] },
  { id: "location", label: "Location", options: ["Gurgaon Vehicle Plant", "Delhi Vehicle Plant"] },
  { id: "plant", label: "Plant", options: ["PLT-GP1", "PLT-GP2"] },
  { id: "shop", label: "Shop", options: ["AS1", "BS1"] }
];

const Dropdowns = () => {
  return (
    <div className={styles.sideSelect}>
      {dropdownData.map((item) => (
        <div className={styles.selectBox} key={item.id}>
          <label htmlFor={item.id}>{item.label}:</label>
          <select id={item.id}>
            {item.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button className={styles.moreButton}>More</button>
    </div>
  );
};

export default Dropdowns;
