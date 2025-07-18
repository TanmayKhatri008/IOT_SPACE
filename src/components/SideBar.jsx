import users from "./userData";
import "./Sidebar.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Sidebar({ onSelectOperator, selectedOperator, showActive, searchTerm }) {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const filteredUsers = users
    .filter((user) => user.active === showActive)
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleUserClick = (user) => {
    onSelectOperator(user); // Still update the selected user in App.jsx state
    navigate(`/operator/${user.id}`); // Navigate to the operator's specific route
  };

  return (
    <div className="sidebar">
      {filteredUsers.length === 0 ? (
        <p style={{ padding: "10px", color: "#666" }}>No users found.</p>
      ) : (
        filteredUsers.map((user) => {
          const isSelected = selectedOperator?.id === user.id;

          const borderColor = isSelected
            ? parseInt(user.daysLeft) > 30 // Corrected from user.dayLeft to user.daysLeft
              ? "green"
              : "red"
            : "transparent";

          return (
            <div
              key={user.id}
              className={`user-card ${isSelected ? "selected" : ""}`}
              onClick={() => handleUserClick(user)} // Use the new handler
            >
              <img
                src={user.image}
                alt={user.name}
                className="user-icon"
                style={{ borderColor }}
              />
              <div className="user-text">
                <p className="user-name">{user.name}</p>
                <p className="user-id">{user.id}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Sidebar;