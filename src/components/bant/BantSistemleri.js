import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const BantSistemleri = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={3}>
          <div href="#" className="project-link">
            <img
              src="assets/img/resimler/44.jpg"
              alt="Bant Sistemleri"
              className="img-fluid"
            />
            <div className="title">
              <h4>Bant</h4>
              <h2>Sistemleri</h2>
            </div>

            <a className="btn btn-outline-primary btn-lg">Detaylar</a>
          </div>
        </Col>

        <Col xs={12} md={4} lg={3}>
          <div href="#" className="project-link">
            <img
              src="assets/img/resimler/44.jpg"
              alt="Bant Sistemleri"
              className="img-fluid"
            />
            <div className="title">
              <h4>Bant</h4>
              <h2>Sistemleri</h2>
            </div>

            <a className="btn btn-outline-primary btn-lg">Detaylar</a>
          </div>
        </Col>

        <Col xs={12} md={4} lg={3}>
          <div href="#" className="project-link">
            <img
              src="assets/img/resimler/44.jpg"
              alt="Bant Sistemleri"
              className="img-fluid"
            />
            <div className="title">
              <h4>Bant</h4>
              <h2>Sistemleri</h2>
            </div>

            <a className="btn btn-outline-primary btn-lg">Detaylar</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BantSistemleri