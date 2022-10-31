import React from "react";
import { Container, Table, Row, Col} from "react-bootstrap";
import { referanslarList } from "../data/referanslarList";


const ReferanslarTablo = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-space-between">
          <tbody>
            <thead>
              <tr>
                <th>#</th>
                <th>FİRMA ADI</th>
                <th>KONUMU</th>
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
                  <td>{referans.ad}</td>
                  <td>{referans.konum}</td>
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
