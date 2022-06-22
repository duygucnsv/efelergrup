import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerContactItem = (props) => {
  return (
    <Container >
      <Row>
        <Col>
          <div >
        <img src={props.img} alt="support" />
      </div>
      <div>
        <h5>
          <a href={props.link}>{props.icerik}</a>
        </h5>
       
      </div>
        </Col>
      </Row>
    
    </Container>
  );
};

export default BannerContactItem;
