import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { RiHeadphoneLine, RiMailSendLine, RiWhatsappLine } from "react-icons/ri";


const Contact = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card>
            <Row>
              
              <Col >
                <Card.Body>
                  <Card.Title>Demir-Çelik Sorumlusu</Card.Title>
                  <Card.Title>Mehmet Çetin</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine /> <em>+90 532 695 54 52</em>
                    </p>
                    <p>
                      <RiWhatsappLine /> <em>+90 532 695 54 52</em>
                    </p>
                    <p>
                      <RiMailSendLine /> <em>efedemircelik@gmail.com</em>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={4}>
        <Card>
            <Row>
              
              <Col>
                <Card.Body>
                  <Card.Title>Makina Sorumlusu</Card.Title>
                  <Card.Title>Nuri Bilgi</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine /> <em>+90 532 723 83 27</em>
                    </p>
                    <p>
                      <RiWhatsappLine /> <em>+90 532 723 83 27</em>
                    </p>
                    <p>
                      <RiMailSendLine /> <em>efelergrubdemircelik@gmail.com</em>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={4}>
        <Card>
            <Row>
              
              <Col>
                <Card.Body>
                  <Card.Title>İmalat Müdürü</Card.Title>
                  <Card.Title>Yasin Bilgi</Card.Title>
                  <Card.Text>
                    <p>
                      <RiHeadphoneLine /> <em>+90 553 160 62 74</em>
                    </p>
                    <p>
                      <RiWhatsappLine /> <em>+90 553 160 62 74</em>
                    </p>
                    <p>
                      <RiMailSendLine /> <em>efelergrubdemircelik@gmail.com</em>
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
