import React from 'react'
import {Card, Col, Container, Row} from "react-bootstrap"

const projeler = () => {
  return (
    <Container className="galeri">
      <Row>
        <Col lg={4}>
          <Card className='d-flex h-100 w-100'>
            <Row>              
              <Col xs={5} >
            <Card.Img src="assets/img/resimler/soğan sökme mak2.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={4}>
        <Card>
            <Row>              
              <Col xs={5}>
                 <Card.Img className="img-fluid rounded-start" src="assets/img/resimler/2.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={4}>
        <Card>
            <Row>              
              <Col xs={5}>
                  <Card.Img className="img-fluid rounded-start" src="assets/img/resimler/3.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>         
           
        
      </Row> 
      
    </Container>
  )
}

export default projeler
