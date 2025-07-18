import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import "./Toggle.css";
import { FcSearch } from "react-icons/fc";

function Toggle({ showActive, setShowActive, users, searchTerm, setSearchTerm }) {
  const handleToggle = () => setShowActive(!showActive);

  const activeCount = users.filter((u) => u.active).length;
  const inactiveCount = users.length - activeCount;

  return (
    <div className="Button">
      <p style={{ fontWeight: showActive ? "bold" : "normal" }}>
        Active ({activeCount})
      </p>

      <div onClick={handleToggle} style={{ cursor: "pointer" }}>
        {showActive ? <BsToggle2Off size={26} /> : <BsToggle2On size={26}  />}
      </div>

      <p style={{ fontWeight: !showActive ? "bold" : "normal" }}>
        Inactive ({inactiveCount})
      </p>

    
      <input
        type="text"
        id="Staff-search"
        placeholder="Search by Name, Staff ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FcSearch />
    </div>
  );
}

export default Toggle;
