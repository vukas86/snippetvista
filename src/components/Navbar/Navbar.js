import Search from "./Search";
import { useAppContext } from "../../store/AppContext";

import hamburgerIconBlack from "../../assets/icons/burger/ham-black.svg";
import hamburgerIconWhite from "../../assets/icons/burger/ham-white.svg";
import logoBlack from "../../assets/logo/snilogo-removebg-preview.png";
import logoNoBg from "../../assets/logo/sv_logo-removebg-preview.png";

import styles from "./Navbar.module.css";
import DarkModeToggle from "./Toggle";

function Navbar() {
  const { isDarkMode, setIsDarkMode, isSidebarOpen, setIsSideBarOpen } =
    useAppContext();
  const logo = isDarkMode ? logoNoBg : logoBlack;
  const hamburgerIcon = isDarkMode ? hamburgerIconWhite : hamburgerIconBlack;

  const toggleSideBarHandler = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className={styles.navGroup}>
        <img
          src={hamburgerIcon}
          alt="ham-icon"
          className={styles.hamIcon}
          onClick={toggleSideBarHandler}
        ></img>
        <img src={logo} alt="logo" className={styles.logoImg} />
      </div>
      <Search />
      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;
