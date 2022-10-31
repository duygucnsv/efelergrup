import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CelikCati = () => {
  return (
    <Container>
      <div className="row-wrapper">
        <Row>
          <Col xs={12} md={4} lg={3}>
            <Row style={{ margin: "1rem" }}>
              <Card style={{ maxWidth: "18rem", maxHeight: "28rem" }}>
                <div
                  style={{
                    maxWidth: "18rem",
                    maxHeight: "18rem",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    style={{
                      width: "18rem",
                      height: "18rem",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src="assets/img/resimler/1.jpeg"
                  />
                </div>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Row style={{ margin: "1rem" }}>
              <Card style={{ maxWidth: "18rem", maxHeight: "28rem" }}>
                <div
                  style={{
                    maxWidth: "18rem",
                    maxHeight: "18rem",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    style={{
                      width: "18rem",
                      height: "18rem",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src="assets/img/resimler/2.jpeg"
                  />
                </div>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Row style={{ margin: "1rem" }}>
              <Card style={{ maxWidth: "18rem", maxHeight: "28rem" }}>
                <div
                  style={{
                    maxWidth: "18rem",
                    maxHeight: "18rem",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    style={{
                      width: "18rem",
                      height: "18rem",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src="assets/img/resimler/3.jpeg"
                  />
                </div>
              </Card>
            </Row>
          </Col>
          <Col xs={12} md={4} lg={3}>
            <Row style={{ margin: "1rem" }}>
              <Card style={{ maxWidth: "18rem", maxHeight: "28rem" }}>
                <div
                  style={{
                    maxWidth: "18rem",
                    maxHeight: "18rem",
                    textAlign: "center",
                  }}
                >
                  <Card.Img
                    style={{
                      width: "18rem",
                      height: "18rem",
                      textAlign: "center",
                      objectFit: "cover",
                    }}
                    variant="top"
                    src="assets/img/resimler/4.jpeg"
                  />
                </div>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CelikCati;
