import React, { useState } from "react";
import { FaHome, FaUser, FaChevronDown } from "react-icons/fa";
import "./ProfileDropdown.css";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="profile-container">
      <button className="profile-button" onClick={toggleDropdown}>
        <FaHome className="icon" />
        <span className="name">John Smith</span>
        <FaUser className="icon" />
        <FaChevronDown className="icon" />
      </button>

      {open && (
        <div className="dropdown-menu">
          <div className="dropdown-item">Profile</div>
          <div className="dropdown-item">Settings</div>
          <div className="dropdown-item">Logout</div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
