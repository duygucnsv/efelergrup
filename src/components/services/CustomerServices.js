import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import services from "../data/services";
import CustomerServiceCard from "./CustomerServiceCard";

const CustomerServices = () => {
  return (
    <Container>
      <SectionTitle title="Neden BİZ?" />

      <Row className="g-5">
        {services.map((service) => (
          <Col md={6} key={service.id}>
            <CustomerServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerServices;
