import React from 'react'
import { Container,Row,Col,Image } from 'react-bootstrap'
import SectionTitle from '../common/SectionTitle'
import partnerList from "../data/partners"

const Partners = () => {
  return (
    <Container>
        <SectionTitle title="Our Partners"/>
        <Row>
            <Col>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta corrupti odit adipisci quae ad, vel obcaecati iusto deserunt doloribus? Incidunt animi illo quo voluptas, sed ut labore reiciendis eveniet.
            </Col>
        </Row>
        <Row className="mt-2">
          {partnerList.map((partner,index)=><Col key={index}>
            <Image src={require(`../../assets/img/partners/${partner.image}`).default} alt={partner.title} className="img-fluid"/>
        </Col>)}
      </Row>
    </Container>
  )
}

export default Partners