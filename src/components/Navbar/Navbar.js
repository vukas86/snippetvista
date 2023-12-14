import Search from "./Search";

import hamburgerIcon from "../../assets/icons/burger/hamburger.png";
import logo from "../../assets/logo/snilogo-removebg-preview.png";

import styles from "./Navbar.module.css";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <nav>
      <div className={styles.navGroup}>
        <div>
          <button className={styles.menuBtn}>
            <img src={hamburgerIcon} alt="ham-icon"></img>
          </button>
        </div>
        <img src={logo} alt="logo" className={styles.logoImg} />
      </div>
      <Search />
      <Toggle />
    </nav>
  );
}

export default Navbar;
