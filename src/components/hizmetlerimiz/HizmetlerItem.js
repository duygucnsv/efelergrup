import React from "react";
import { Container, Row, Accordion, Col} from "react-bootstrap";
import Spacer from "../common/Spacer";

const HizmetlerItem = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey={props.id}>
              <Accordion.Header>{props.başlık}</Accordion.Header>
              <Accordion.Body>{props.açıklama}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Spacer size={5} />
        </Col>
      </Row>
    </Container>
  );
};

export default HizmetlerItem;
