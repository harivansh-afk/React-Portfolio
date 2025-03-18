import React from "react";
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
      <Headermain />
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
