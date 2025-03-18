import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Portfolio = () => {
  // Check if the device is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 project_items_ho">
          {dataportfolio.map((data, i) => {
            // Extract title and description without modifying for desktop
            const fullTitle = data.description.split(",")[0];
            const description = data.description.split(",").slice(1).join(",").trim();

            // Create shortened version only for mobile display
            const words = fullTitle.split(" ");
            const shortTitle = words.length > 3
              ? words.slice(0, 3).join(" ") + "..."
              : fullTitle;

            return (
              <div key={i} className="project_item">
                <img src={data.img} alt={fullTitle} />
                <div className="content">
                  <h3>{fullTitle}</h3>
                  <p>{description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span className="desktop-text">View Project</span>
                    <span className="mobile-text">{shortTitle}</span>
                    <FaExternalLinkAlt size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
