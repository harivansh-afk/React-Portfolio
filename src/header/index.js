import React, { useState } from "react";
import "./style.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { logotext } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    handleToggle();

    // Find all section elements
    const sections = document.querySelectorAll('.fullpage-section');
    const targetSection = Array.from(sections).findIndex(
      section => section.querySelector(`#${targetId}`) !== null
    );

    // Trigger a custom event that FullPage component will listen for
    if (targetSection !== -1) {
      const customEvent = new CustomEvent('navigateTo', {
        detail: { index: targetSection }
      });
      document.dispatchEvent(customEvent);
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a
            className="navbar-brand nav_ac"
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            {logotext}
          </a>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button className="menu__button nav_ac" onClick={handleToggle}>
              {!isActive ? <RiCloseLine /> : <RiMenuLine />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <a
                      href="#home"
                      className="my-3"
                      onClick={(e) => handleNavClick(e, 'home')}
                    >Home</a>
                  </li>
                  <li className="menu_item">
                    <a
                      href="#portfolio"
                      className="my-3"
                      onClick={(e) => handleNavClick(e, 'portfolio')}
                    >Portfolio</a>
                  </li>
                  <li className="menu_item">
                    <a
                      href="#about"
                      className="my-3"
                      onClick={(e) => handleNavClick(e, 'about')}
                    >About</a>
                  </li>
                  <li className="menu_item">
                    <a
                      href="#contact"
                      className="my-3"
                      onClick={(e) => handleNavClick(e, 'contact')}
                    >Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
