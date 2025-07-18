import styles from "./Header.module.css";
import { CiSearch } from "react-icons/ci";
import IoTLogo from "./Iotlogo.png";
import ProfileDropdown from "./ProfileDropDown";
import Union from "./Union.png";
import Cat from "./cat.png";
function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.IOT}>
        <img src={Cat} alt="" />
        <img src={IoTLogo} alt="" />
        <CiSearch />
      </div>
      <img src={Union} alt="" className={styles.Union} />
      <ProfileDropdown />
      
    </div>
    
  );
}
export default Header;
