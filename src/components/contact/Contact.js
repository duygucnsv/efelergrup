import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  RiHeadphoneLine,
  RiMailSendLine,
  RiWhatsappLine,
} from "react-icons/ri";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Title>Demir-Çelik Sorumlusu</Card.Title>
                  <Card.Title>Mehmet Çetin</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine />
                      <a href="tel:05326955452">+90 532 695 54 52</a>
                    </p>
                    <p>
                      <RiWhatsappLine />
                      <a href="https://wa.me/905326955452" target="_blank">
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
      </Row>
    </Container>
  );
};

export default Contact;
