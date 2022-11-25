import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import SectionTitle from "../common/SectionTitle";
import { partnerList } from "../data/partnerList";

const Partners = () => {
  return (
    <Container>
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
      <Row className="m-4 referanslar">
        {partnerList.map((partner, index) => (
          <Col key={index}>
            <Image
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
