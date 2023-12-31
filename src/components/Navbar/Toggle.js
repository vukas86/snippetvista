import { useAppContext } from "../../store/AppContext";
import Toggle from "react-toggle";

import "react-toggle/style.css";
import styles from "./Toggle.module.css";

function DarkModeToggle() {
  const { isDarkMode, setIsDarkMode } = useAppContext();

  return (
    <Toggle
      checked={isDarkMode}
      onChange={({ target }) => setIsDarkMode(target.checked)}
      icons={{ checked: null, unchecked: null }}
      aria-label="Dark mode toggle"
    />
  );
}

export default DarkModeToggle;
