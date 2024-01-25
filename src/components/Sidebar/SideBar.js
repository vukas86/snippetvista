import { useAppContext } from "../../store/AppContext";
import { motion } from "framer-motion";
import style from "./SideBar.module.css";

import homeBlack from "../../assets/icons/home/home-outline.png";
import homeWhite from "../../assets/icons/home/home-outline (1).png";
import objectBlack from "../../assets/icons/curly/brackets-curly.png";
import objectWhite from "../../assets/icons/curly/brackets-curly (1).png";
import arrayBlack from "../../assets/icons/square/bx-bracket.png";
import arrayWhite from "../../assets/icons/square/bx-bracket (1).png";
import githubBlack from "../../assets/icons/social/github.svg";
import githubWhite from "../../assets/icons/social/github (1).svg";
import linkendinBlack from "../../assets/icons/social/linkedin.svg";
import linkendinWhite from "../../assets/icons/social/linkedin (1).svg";
import quoteBlack from "../../assets/icons/quotes/quote_left_black.svg";
import quoteWhite from "../../assets/icons/quotes/quote_left_white.svg";
import utilWhite from "../../assets/icons/aid/fak_white.svg";
import utilBlack from "../../assets/icons/aid/fak_black.svg";

function SideBar() {
  const {
    isDarkMode,
    setIsDarkMode,
    isSideBarOpen,
    toggleSidebar,
    selectedSection,
    setSelectedSection,
  } = useAppContext();

  const selectionHandler = (section) => {
    setSelectedSection(section);
  };
  const home = isDarkMode ? homeWhite : homeBlack;
  const object = isDarkMode ? objectWhite : objectBlack;
  const array = isDarkMode ? arrayWhite : arrayBlack;
  const github = isDarkMode ? githubWhite : githubBlack;
  const linkedin = isDarkMode ? linkendinWhite : linkendinBlack;
  const quotes = isDarkMode ? quoteWhite : quoteBlack;
  const utility = isDarkMode ? utilWhite : utilBlack;

  const sideBarVarients = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  if (isSideBarOpen) {
    return null;
  }

  console.log(selectedSection);

  return (
    <motion.aside
      className="sidecontainer"
      initial={{ width: 0 }}
      animate={{ width: 200 }}
      transition={{ type: "tween", duration: 0.5 }}
    >
      <motion.div
        className={style.barlinks}
        initial="closed"
        animate="open"
        variants={sideBarVarients}
        id="list-items"
      >
        <ul>
          <motion.li
            variants={itemVariants}
            className={selectedSection === "" ? "active" : ""}
          >
            <a href="#home" onClick={() => selectionHandler("")}>
              <img src={home} alt="home-icon"></img>
              <span>Home</span>
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className={selectedSection === "Objects" ? "active" : ""}
          >
            <a href="#objects" onClick={() => selectionHandler("Objects")}>
              <img src={object} alt="object-icon"></img>
              <span>Objects</span>
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className={selectedSection === "Arrays" ? "active" : ""}
          >
            <a href="#arrays" onClick={() => selectionHandler("Arrays")}>
              <img src={array} alt="array-icon"></img>
              <span>Arrays</span>
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className={selectedSection === "Strings" ? "active" : ""}
          >
            <a href="#strings" onClick={() => selectionHandler("Strings")}>
              <img src={quotes} alt="string-icon"></img>
              <span>Strings</span>
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className={selectedSection === "Utilities" ? "active" : ""}
          >
            <a href="#utilities" onClick={() => selectionHandler("Utilities")}>
              <img src={utility} alt="string-icon"></img>
              <span>Utilities</span>
            </a>
          </motion.li>
        </ul>
      </motion.div>
      <div className="socialLinks">
        <ul>
          <li>
            <a
              href="https://github.com/vukas86"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github-icon"></img>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/aleksandar-vukasovic/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkndin-icon"></img>
            </a>
          </li>
        </ul>
      </div>
    </motion.aside>
  );
}

export default SideBar;
