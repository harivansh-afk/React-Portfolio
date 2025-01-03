import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Portfolio = () => {
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
            const title = data.description.split(",")[0];
            const description = data.description.split(",").slice(1).join(",").trim();

            return (
              <div key={i} className="project_item">
                <img src={data.img} alt={title} />
                <div className="content">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    View Project <FaExternalLinkAlt size={14} />
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
