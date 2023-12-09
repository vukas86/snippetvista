import hamburgerIcon from "../../assets/icons/burger/hamburger.png";
import logo from "../../assets/logo/snappvista-removebg-preview.png";

import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav>
      <div className={styles.navGroup}>
        <div>
          <button>
            <img src={hamburgerIcon} alt="ham-icon"></img>
          </button>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div>Search</div>
      <div>Toggle</div>
    </nav>
  );
}

export default Navbar;
