import React from "react";
import { galeriList } from "../data/galeriList";
import { Row, Container, Col, Card } from "react-bootstrap";

const Galeri = () => {
  return (
    <Container className="resimler container-fluid">
      <Row className="m-auto">
        {galeriList.map((product) => (
          <Col xs={12} md={4} lg={3} key={product.id}>
            <Card style={{ maxWidth: "18rem", maxHeight: "28rem" }}>
              <Card.Img
                style={{
                  width: "18rem",
                  height: "18rem",
                  textAlign: "center",
                  objectFit: "cover",
                }}
                variant="top"
                src={product.image}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Galeri;
