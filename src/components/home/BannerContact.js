import React from "react";
import BannerContactItem from "./BannerContactItem";
import { Card, Col, Container, Row } from "react-bootstrap";

const BannerContact = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <Card>
            <Row>
              <Col>
                <Card.Body>
                  <Card.Text>
                    <BannerContactItem
                      img="assets/img/envelop.png"
                      link="mailto:efelergrub@gmail.com"
                      icerik="efelergrubdemircelik@gmail.com"
                    />
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
                  <Card.Text>
                    <BannerContactItem
                      img="assets/img/phone.png"
                      link="tel:05326955452"
                      icerik="(+90) 532 695 54 52"
                    />
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
                  <Card.Text>
                    <BannerContactItem
                      img="assets/img/map.png"
                      link="/contact"
                      icerik="Osmangazi Mh.Mareşal Fevzi Çakmak Cd. No:33/1 Esenyurt/İSTANBUL"
                    />
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

export default BannerContact;
