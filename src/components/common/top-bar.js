import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { MdOutlineLocalOffer } from "react-icons/md";

import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="topbar">
      <Container>
        <Row>
        <Col xs={7}>
          <FiPhoneCall size={16} />
          <span className="d-none d-md-inline">
            BİZİ ARAYIN <br />
            <a href="tel:05326955452">+90 532 695 54 52</a>
          </span>
        </Col>

        <Col xs={5}>
          <ul>
            <li className="d-none d-md-block">
              <FiYoutube />
            </li>
            <li className="d-none d-md-block">
              <FiFacebook />
            </li>
            <li className="d-none d-md-block">
              <FiTwitter />
            </li>
            <li className="d-none d-md-block">
              <FiInstagram />
            </li>
            <li>
              <Button
                as="a"
                href="mailto:efedemircelik@gmail.com?subject=Teklif%20Talebi"
                size="sm"
                variant="primary"
                className="text-decoration-none"
              >
                <MdOutlineLocalOffer />
                TEKLİF ALIN
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default TopBar;
