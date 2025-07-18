import "./attendance-dropdown.css"
function Attendancedropdown() {
  return (
    <div class="boxes2">
      <div class="select-box3">
        <label for="city">FROM:</label>
        <select id="attendance-from">
          <option>01/12/2023</option>
          <option>02/12/2023</option>
        </select>
      </div>
      <div class="select-box3">
        <label for="city">To:</label>
        <select id="attendance-to">
          <option>04/12/2023</option>
          <option>04/12/2024</option>
        </select>
      </div>
      <div class="select-box3">
        <label for="city">Attendance :</label>
        <select id="total-attendance">
          <option>All</option>
          <option>Yesterday</option>
        </select>
      </div>
    </div>
  );
}
export default Attendancedropdown;
