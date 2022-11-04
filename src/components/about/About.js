import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import about from "../../assets/img/efeler-slider.jpg";

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <Image src={about} className="img-fluid" />
          </Col>
          <Col lg={6}>
            <h2>Ne sunuyoruz?</h2>
            <p>
              2000 yılında faaliyete başlayan firmamız Çelik Konstrüksiyon,
              çatı, gezer vinç, asma kat, yük asansörü, sundurma ve çelikle
              ilgili her türlü konuda sektörde sürekli gelişme anlayışını
              benimsemiş ve bu doğrultuda her türlü teknik ve teknolojik
              gelişmeleri takip ederek sadece müşteri memnuniyetini ilke
              edinmiştir.
            </p>
            <p>
              Çelik sektöründe adı daima var olan Efeler Grup başarılı
              birçok projeye imza atmış, atmaya da devam etmektedir.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
