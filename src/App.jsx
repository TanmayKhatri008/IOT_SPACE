import { useState } from "react";
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'; // Import Routes, Route, useNavigate, useParams
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SkillSense from "./components/SkillSense";
import users from "./components/userData"; // Assuming userData is an array of user objects
import View from "./components/View";
import Sidebar from "./components/SideBar";
import Operator_information from "./components/Operator_information";

import "./App.css";

// Component to handle operator selection and display
function OperatorPanel({ users, showActive, setShowActive, searchTerm, setSearchTerm, selectedOperator, setSelectedOperator }) {
  const { id } = useParams(); // Get ID from URL if routing to specific operator

  // Effect to set selected operator based on URL parameter
  // You might want to move this logic into OperatorInformation component if it's always routed
  useState(() => {
    if (id) {
      const user = users.find(u => u.id === id);
      setSelectedOperator(user || null);
    }
  }, [id, users, setSelectedOperator]);

  return (
    <div className="main-panel">
      <Sidebar
        onSelectOperator={setSelectedOperator}
        selectedOperator={selectedOperator}
        showActive={showActive}
        searchTerm={searchTerm}
      />
      <Operator_information user={selectedOperator} />
    </div>
  );
}

function App() {
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [showActive, setShowActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="Body">
      <Header />
      <hr />
      <div className="others">
        <Dashboard />
        <SkillSense />
        <View
          users={users}
          showActive={showActive}
          setShowActive={setShowActive}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Routes> {/* Define your routes here */}
          <Route
            path="/"
            element={
              <OperatorPanel
                users={users}
                showActive={showActive}
                setShowActive={setShowActive}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedOperator={selectedOperator}
                setSelectedOperator={setSelectedOperator}
              />
            }
          />
          {/* Example: Route for individual operator profile */}
          <Route
            path="/operator/:id"
            element={
              <OperatorPanel
                users={users}
                showActive={showActive}
                setShowActive={setShowActive}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedOperator={selectedOperator} // This will be set by the useParams hook in OperatorPanel
                setSelectedOperator={setSelectedOperator}
              />
            }
          />
          {/* Add more routes for other sections like "DEPLOYMENT", "ON THE JOB TRAINING", etc. */}
          {/* For example, if you want a dedicated page for "ATTENDANCE" with dynamic user: */}
          {/* <Route path="/operator/:id/attendance" element={<AttendancePage />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;