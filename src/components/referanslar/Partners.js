import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import { partnerList } from "../data/partnerList";

const Partners = () => {
  return (
    <Container xs={12} md={6} lg={3}>
      <SectionTitle title="Referanslarımız" />
      <Row>
        <Col>
          Olumlu değişime katkıda bulunmak ve sürdürülebilirlik hedeflerimize
          ulaşmak için dünya çapında birçok olağanüstü kuruluşla ortaklık
          yapıyoruz. Uzmanlıkları tek başımıza yapabileceğimizden çok daha
          fazlasını yapmamızı sağlıyor. Tutkuları ve yetenekleri bize ilham
          veriyor. Başarıları ve taahhütleri, ortaklarımız olarak adlandırma
          şansına sahip olduğumuz tüm kuruluşlar ile sizi tanıştırmaktan
          mutluluk duyuyoruz.
        </Col>
      </Row>
      <hr />
      <br />
      <Row className="m-2 referanslar">
        {partnerList.map((partner, index) => (
          <Col key={index} className="ref">
            <Image
              className="ref img-fluid p-1 m-1"
              src={
                require(`../../assets/img/partners/${partner.image}`).default
              }
              alt={partner.title}
              // className="img-fluid"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Partners;
