import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

import { MdOutlineLocalOffer } from "react-icons/md";

import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import Teklif from "../teklif/Teklif";
import { Link } from "react-router-dom";

const TopBar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="topbar">
      <Row>
        <Col xs={7}>
          <FiPhoneCall size={16} />
          <span className="d-none d-md-inline">
            BİZİ ARAYIN <br></br>
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
              <Button size="sm" variant="primary">
                <MdOutlineLocalOffer />
                TEKLİF ALIN
              </Button>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
