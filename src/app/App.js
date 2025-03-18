import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedCursor from "../hooks/AnimatedCursor";
import Headermain from "../header";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import FullPage from "../components/FullPage";
import Section from "../components/Section";
import "./App.css";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Traditional multi-page style for mobile
  if (isMobile) {
    return (
      <div className="mobile-app-container">
        <div className="cursor__dot">
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="255, 255 ,255"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        </div>
        <Headermain isMobile={true} />
        <main className="mobile-content">
          <section id="home" className="mobile-section">
            <Home />
          </section>
          <section id="about" className="mobile-section">
            <About />
          </section>
          <section id="portfolio" className="mobile-section">
            <Portfolio />
          </section>
          <section id="contact" className="mobile-section">
            <ContactUs />
          </section>
        </main>
      </div>
    );
  }

  // Desktop version with smooth scrolling
  return (
    <div className="app-container">
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <Headermain isMobile={false} />
      <FullPage>
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <Section id="contact">
          <ContactUs />
        </Section>
      </FullPage>
    </div>
  );
}
