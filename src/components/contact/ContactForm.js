import React from "react";
import { Container, Row, Col,Form,Button } from "react-bootstrap";

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col lg={6}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2345968206682!2d28.637662415841966!3d41.041998579297406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55fdfb8389d05%3A0x47dc8de507c0c486!2zRUZFTEVSIEdSVVAgREVNxLBSLcOHRUzEsEstTUFLxLBOQQ!5e0!3m2!1str!2str!4v1653937437836!5m2!1str!2str" 
         width="500" 
         height="450"  
         allowfullscreen="" 
         loading="lazy" ></iframe>
        </Col>
        <Col lg={6}>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>İsim</Form.Label>
              <Form.Control type="text" placeholder="Firma Adı" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="text" placeholder="Telefon Numaranızı Yazınız" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email Adresinizi Yazınız" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Konu</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button type="submit">GÖNDER</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
