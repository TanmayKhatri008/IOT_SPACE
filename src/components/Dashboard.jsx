import Dropdowns from "./Dropdown_first";
import styles from "./Dashboard.module.css";
function Dashboard() {
  return (
    <div className={styles.main}>
      <div className={styles.Dashboard}>
        <p style={{ color: "#111184" }}>Area Dashboard</p>
        <p>- Operators</p>
      </div>
      <Dropdowns></Dropdowns>
    </div>
  );
}
export default Dashboard;
