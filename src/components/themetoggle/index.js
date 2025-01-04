import React, { useEffect, useState } from "react";
import { RiSunLine, RiMoonClearLine } from "react-icons/ri";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme") || "dark");
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="nav_ac" onClick={themetoggle}>
      {theme === "dark" ? <RiSunLine /> : <RiMoonClearLine />}
    </div>
  );
};

export default Themetoggle;
