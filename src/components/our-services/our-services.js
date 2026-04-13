"use client";

import React from 'react'
import { Container, Row, Accordion, Col } from "react-bootstrap";
import SectionTitle from '../common/section-title';
import Spacer from '../common/spacer';
import { hizmetlerList } from '../data/services-list';

const Hizmetler = () => {
  return (
    <Container>
    <Row>
          <Col> 
          <SectionTitle title="Hizmet Alanlarımız"/>
          <p>    Efeler Grup uzman kadrosu ile kaliteli, sorunsuz, hassas ve hızlı üretim anlayışı çerçevesinde hizmet vermeye devam etmektedir.</p>
          <br></br>
          </Col>
          </Row>
      <Row className='hizmetler'>
        {hizmetlerList.map((hizmetler, index) => (
          <Col key={`${index}-${hizmetler.başlık}`}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey={String(hizmetler.id)}>
                <Accordion.Header>{hizmetler.başlık}</Accordion.Header>
                <Accordion.Body>{hizmetler.açıklama}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Spacer size={5} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hizmetler