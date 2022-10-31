import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerContactItem = (props) => {
  return (
    <Container>
      <Row>
        <Col
          style={{
            width: "8rem",
            height: "8rem",
            textAlign: "center",
            objectFit: "cover",
          }}
        >
          <div>
            <img src={props.img} alt="support" /> <br />
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
