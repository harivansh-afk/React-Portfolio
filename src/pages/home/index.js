import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import {
  RiGithubFill,
  RiLinkedinFill,
  RiFilePdfFill,
  RiTwitterXFill
} from "react-icons/ri";
import { socialprofils } from "../../content_option";

export const Home = () => {
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowHeight = window.innerHeight;
      setNeedsScroll(documentHeight > windowHeight);
    };

    // Initial check
    checkOverflow();

    // Add resize listener
    window.addEventListener('resize', checkOverflow);

    // Cleanup
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = needsScroll ? 'auto' : 'hidden';
  }, [needsScroll]);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(/assets/images/new_headshot.png)` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <div
                  className="mobile-image d-lg-none"
                  style={{ backgroundImage: `url(/assets/images/new_headshot.png)` }}
                ></div>
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-3">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <div className="social-icons mb-3">
                  <a
                    href={socialprofils.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="GitHub"
                  >
                    <RiGithubFill />
                  </a>
                  <a
                    href={socialprofils.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="LinkedIn"
                  >
                    <RiLinkedinFill />
                  </a>
                  <a
                    href={socialprofils.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="Resume"
                  >
                    <RiFilePdfFill />
                  </a>
                  <a
                    href="https://x.com/HarivanshRathi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link"
                    aria-label="X (Twitter)"
                  >
                    <RiTwitterXFill />
                  </a>
                </div>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <div className="buttons-container">
                    <a href="#portfolio" className="text_2" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                    }}>
                      <div id="button_p" className="ac_btn btn ">
                        My Portfolio
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="#contact" onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}>
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
