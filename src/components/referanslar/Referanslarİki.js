import React from 'react'
import { Container,Table,Row,Col,Image } from 'react-bootstrap'
import { referanslarList } from '../data/referanslarList';
import { partnerList } from "../data/partnerList";

import SectionTitle from "../common/SectionTitle";

const Referanslarİki = () => {
  return (
    <Container>
      <SectionTitle title="Referanslarımız" />

      <p>
        Olumlu değişime katkıda bulunmak ve sürdürülebilirlik hedeflerimize
        ulaşmak için dünya çapında birçok olağanüstü kuruluşla ortaklık
        yapıyoruz. Uzmanlıkları tek başımıza yapabileceğimizden çok daha
        fazlasını yapmamızı sağlıyor. Tutkuları ve yetenekleri bize ilham
        veriyor. Başarıları ve taahhütleri, ortaklarımız olarak adlandırma
        şansına sahip olduğumuz tüm kuruluşlar ile sizi tanıştırmaktan mutluluk
        duyuyoruz.
      </p>
      <br></br>
      <Row className="mt-2">
        {partnerList.map((partner, index) => (
          <Col key={index}>
            <Image
              src={
                require(`../../assets/img/partners/${partner.image}`).default
              }
              alt={partner.title}
              className="img-fluid"
            />
          </Col>
        ))}
      </Row>
      <br></br>
      <br></br>
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
}

export default Referanslarİki;