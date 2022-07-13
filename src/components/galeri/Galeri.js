import React from "react";
import { galeriList } from "../data/galeriList";
import { Row, Container, Col, Card } from "react-bootstrap";

const Galeri = () => {
  return (
    <Container className="resimler">
      <div className="row-wrapper">
        <Row>
          {galeriList.map((product) => (
            <Col xs={12} md={4} lg={3} key={product.id}>
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
                        maxWidth: "18rem",
                        maxHeight: "18rem",
                        textAlign: "center",
                        objectFit: "cover",
                      }}
                      variant="top"
                      src={product.image}
                    />
                  </div>
                </Card>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Galeri;
