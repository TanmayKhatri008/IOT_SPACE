import "./Shift.css";

function Shift() {
  return (
    <div className="boxes">
      <div className="select-box2">
        <label htmlFor="From">FROM:</label>
        <select id="From">
          <option>01/12/2023</option>
          <option>02/12/2023</option>
        </select>
      </div>
      <div className="select-box2">
        <label htmlFor="To">To:</label>
        <select id="To">
          <option>04/12/2023</option>
          <option>04/12/2024</option>
        </select>
      </div>
      <div className="select-box2">
        <label htmlFor="Station">Station:</label>
        <select id="Station">
          <option>All</option>
          <option>Jaipur</option>
        </select>
      </div>
      <div className="select-box2">
        <label htmlFor="Shift">Shift:</label>
        <select id="Shift">
          <option>Morning</option>
          <option>Evening</option>
        </select>
      </div>
    </div>
  );
}

export default Shift;
