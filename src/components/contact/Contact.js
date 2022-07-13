import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { RiHeadphoneLine, RiMailSendLine, RiWhatsappLine } from "react-icons/ri";


const Contact = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4} lg={6}>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title>Demir-Çelik Sorumlusu</Card.Title>
                  <Card.Title>Mehmet Çetin</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine />
                      <a href="tel:0532695452">+90 532 695 54 52</a>
                    </p>
                    <p>
                      <RiWhatsappLine />
                      <a href="https://wa.me/90532695452" target="_blank">
                        +90 532 695 54 52
                      </a>
                    </p>
                    <p>
                      <RiMailSendLine />{" "}
                      <a href="mailto:efedemircelik@gmail.com">
                        <em>efedemircelik@gmail.com</em>{" "}
                      </a>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} md={4} lg={6}>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title>Makina Sorumlusu</Card.Title>
                  <Card.Title>Nuri Bilgi</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine />
                      <a href="tel:05327238327">+90 532 723 83 27</a>
                    </p>
                    <p>
                      <RiWhatsappLine />
                      <a href="https://wa.me/05327238327" target="_blank">
                        +90 532 723 83 27
                      </a>
                    </p>
                    <p>
                      <RiMailSendLine />
                      <a href="mailto:efelergrubdemircelik@gmail.com">
                        <em>efelergrubdemircelik@gmail.com</em>
                      </a>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      
      </Row>
    </Container>
  );
};

export default Contact;
