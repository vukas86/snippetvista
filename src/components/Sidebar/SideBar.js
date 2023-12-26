import { useAppContext } from "../../store/AppContext";
import style from "./SideBar.module.css";

import homeBlack from "../../assets/icons/home/home-outline.png";
import homeWhite from "../../assets/icons/home/home-outline (1).png";
import objectBlack from "../../assets/icons/curly/brackets-curly.png";
import objectWhite from "../../assets/icons/curly/brackets-curly (1).png";
import arrayBlack from "../../assets/icons/square/bx-bracket.png";
import arrayWhite from "../../assets/icons/square/bx-bracket (1).png";

function SideBar() {
  const { isDarkMode, setIsDarkMode, isSidebarOpen, toggleSidebar } =
    useAppContext();
  const home = isDarkMode ? homeWhite : homeBlack;
  const object = isDarkMode ? objectWhite : objectBlack;
  const array = isDarkMode ? arrayWhite : arrayBlack;

  if (isSidebarOpen) {
    return null;
  }

  return (
    <section className="sidecontainer">
      <div className={style.barlinks}>
        <ul>
          <li>
            <a href="exmple.com">
              <img src={home} alt="home-icon"></img>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="exmple.com">
              <img src={object} alt="object-icon"></img>
              <span>Objects</span>
            </a>
          </li>
          <li>
            <a href="exmple.com">
              <img src={array} alt="array-icon"></img>
              <span>Arrays</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;
