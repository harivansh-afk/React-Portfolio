import React, { useEffect, useState } from "react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";
import "./style.css";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  const [isHovering, setIsHovering] = useState(false);

  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme__button nav_ac"
      onClick={themetoggle}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`theme-icon-wrapper ${isHovering ? 'hover' : ''}`}>
        {theme === "dark" ? <RiSunLine data-state="sun" /> : <RiMoonClearLine data-state="moon" />}
      </div>
    </div>
  );
};

export default Themetoggle;
