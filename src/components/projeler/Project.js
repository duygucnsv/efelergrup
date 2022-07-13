import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";

const Project = () => {
  return (
    <Container className="project">
      <SectionTitle title="Faaliyet Alanlarımız" />

      <div className="container-fluid p-0 m-5">
        <Row>
          <Col xs={12} md={4} lg={3}>
            <div href="#" className="project-link">
              <img
                src="assets/img/resimler/44.jpg"
                alt="Bant Sistemleri"
                className="img-fluid"
              />
              <div className="title">
                <h4>Konveyör Bant</h4>
                <h2>Sistemleri</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/bant">
                Detaylar
              </a>
            </div>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <div href="/BantSistemleri" className="project-link">
              <img
                src="assets/img/resimler/2.jpeg"
                alt="Çelik Çatı Sistemleri"
                className="img-fluid"
              />
              <div className="title">
                <h4>Çelik Çatı</h4>
                <h2>Sistemleri</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/çelikÇatı">
                Detaylar
              </a>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div href="#" className="project-link">
              <img
                src="assets/img/resimler/teleferik1.jpeg"
                alt="Teleferik Sistemleri"
                className="img-fluid"
              />
              <div className="title">
                <h4>Teleferik</h4>
                <h2>Sistemleri</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/teleferik">
                Detaylar
              </a>
            </div>
          </Col>

          <Col xs={12} md={4} lg={3}>
            <div href="#" className="project-link">
              <img
                src="assets/img/resimler/5.jpeg"
                alt="Teleferik Sistemleri"
                className="img-fluid"
              />
              <div className="title">
                <h4>Çelik</h4>
                <h2>Konstrüksiyon</h2>
              </div>

              <a className="btn btn-outline-primary btn-lg" href="/çelikKons">
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
