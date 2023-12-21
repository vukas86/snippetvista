import { useState } from "react";
import styles from "./Toggle.module.css";
import Toggle from "react-toggle";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  return (
    <Toggle
      checked={isDarkMode}
      onChange={({ target }) => setIsDarkMode(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
}

export default DarkModeToggle;
