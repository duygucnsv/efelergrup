import React from 'react'
import { Container,Row,Breadcrumb } from 'react-bootstrap'
import { Accordion, Col } from 'react-bootstrap/esm';
import SectionTitle from '../common/SectionTitle';
import Spacer from '../common/Spacer';
import { hizmetlerList } from '../data/hizmetlerList';

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
        {hizmetlerList.map((hizmetler) => (
          <Col>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey={hizmetler.id}>
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