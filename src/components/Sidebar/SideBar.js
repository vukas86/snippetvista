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

function SideBar() {
  const { isDarkMode, setIsDarkMode, isSideBarOpen, toggleSidebar } =
    useAppContext();

  const home = isDarkMode ? homeWhite : homeBlack;
  const object = isDarkMode ? objectWhite : objectBlack;
  const array = isDarkMode ? arrayWhite : arrayBlack;
  const github = isDarkMode ? githubWhite : githubBlack;
  const linkedin = isDarkMode ? linkendinWhite : linkendinBlack;

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
      >
        <ul>
          <motion.li variants={itemVariants}>
            <a href="exmple.com">
              <img src={home} alt="home-icon"></img>
              <span>Home</span>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="exmple.com">
              <img src={object} alt="object-icon"></img>
              <span>Objects</span>
            </a>
          </motion.li>
          <motion.li variants={itemVariants}>
            <a href="exmple.com">
              <img src={array} alt="array-icon"></img>
              <span>Arrays</span>
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
