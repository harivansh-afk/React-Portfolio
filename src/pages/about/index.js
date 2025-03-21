import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { RiExternalLinkLine } from "react-icons/ri";
import SkillsRadar from "../../components/SkillsRadar";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <div className="work-timeline">
              {worktimeline.map((data, i) => {
                return (
                  <div key={i} className="timeline-item">
                    <div className="timeline-content">
                      <h4 className="timeline-title">{data.jobtitle}</h4>
                      <div className="timeline-company">
                        <span>{data.where}</span>
                        {data.url && (
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-link"
                            aria-label={`Visit ${data.where} website`}
                            title={`Visit ${data.where} website`}
                          >
                            <RiExternalLinkLine aria-hidden="true" />
                          </a>
                        )}
                      </div>
                      <span className="timeline-date">{data.date}</span>
                      {data.description && (
                        <p className="timeline-description">{data.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <div>
              <p>
                <strong>University of Virginia, Charlottesville, VA</strong>
                <br />
                Bachelor of Arts, Computer Science
                <br />
                Expected May 2026
                <br />
                Cumulative GPA: 3.55/4.0
              </p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7" className="d-flex justify-content-center">
            <SkillsRadar skills={skills} />
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
