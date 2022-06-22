import React from "react";
import { Container, Row, Col,Button } from "react-bootstrap";


import {MdOutlineLocalOffer} from "react-icons/md"


import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import {Link} from "react-dom";

const TopBar = () => {
  
  return (
    <div className="topbar">
      <Container>
        <Row>          
          <Col xs={7}>
            <FiPhoneCall size={16} /> <span className="d-none d-md-inline"> BİZİ ARAYIN <br></br> 
            <a href="+90 530 524 95 19"  link="tel:(+90)5305249519">+90 530 524 95 19</a> </span>
            
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
                <Button size="sm">
                  <MdOutlineLocalOffer/>TEKLİF ALIN
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
