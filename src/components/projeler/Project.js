import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";

const Project = () => {
  return (
    <Container>
      <SectionTitle title="Faaliyet Alanlarımız" />

      <div className="project container-fluid p-0 m-5">
        <Row>
          <Col xs={12} md={4} lg={6}>
            <div className="project-link">
              <img
                src="assets/img/resimler/2.jpeg"
                alt="Çelik Çatı Sistemleri"
                className="img-fluid"
              />
              <div className="title">
                <h4>Çelik Çatı</h4>
                <h2>Sistemleri</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/galeri">
                Detaylar
              </a>
            </div>
          </Col>

          <Col xs={12} md={4} lg={6}>
            <div href="#" className="project-link">
              <img
                src="assets/img/resimler/5.jpeg"
                alt="Çelik Konstrüksiyon"
                className="img-fluid"
              />
              <div className="title">
                <h4>Çelik</h4>
                <h2>Konstrüksiyon</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/galeri">
                Detaylar
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Project;
