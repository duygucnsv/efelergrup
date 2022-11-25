import React from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import { referanslarList } from "../data/referanslarList";

const ReferanslarTablo = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-space-between">
          <tbody>
            <thead>
              <tr>
                <Col>
                  <th>#</th>
                  <th>FİRMA ADI</th>
                </Col>
                <Col>
                  <th>KONUMU</th>
                </Col>
              </tr>
            </thead>
          </tbody>
        </Col>
      </Row>
      <Row>
        <Col>
          {referanslarList.map((referans) => (
            <Table striped bordered hover key={referans.id}>
              <tbody>
                <tr>
                  <Col>
                    <td>{referans.ad}</td>
                  </Col>

                  <Col>
                    <td>{referans.konum}</td>
                  </Col>
                </tr>
              </tbody>
            </Table>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default ReferanslarTablo;
