import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Toggle from "react-toggle";
import DarkmodeIcon from "./DarkmodeIcon";

import "react-toggle/style.css";
import styles from "./Toggle.module.css";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme:dark)",
    },
    undefined,
    (isSystemDark) => setIsDarkMode(isSystemDark)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

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
