import styles from "./SidebarProfile.module.less";
import PlanetIcon from "@assets/icons/Planet.svg?react";
import SunIcon from "@assets/icons/Sun.svg?react";
import MoonIcon from "@assets/icons/Moon.svg?react";
import person from "@assets/images/person.png";
import { useState } from "react";

export const SidebarProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={styles.sidebarProfile}>
      <div className={styles.sidebarCell}>
        <PlanetIcon />
      </div>
      <div className={styles.border} />
      <div className={styles.imageWrapper}>
        <img src={person} alt="Person photo" />
      </div>
      <label className={styles.switch}>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <span className={styles.slider}>
          <SunIcon className={styles.sunIcon} />
          <MoonIcon className={styles.moonIcon} />
        </span>
      </label>
      <div className={styles.border} />
    </div>
  );
};
