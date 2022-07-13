import React from 'react'
import { Container,Row,Col,Figure,Card } from 'react-bootstrap'

const Galeri2 = () => {
  return (
      <Container className="galeri">
      <Row >    

           <Col lg={3}>
        <Card>
            <Row>              
              <Col>
                  <Card.Img className="img-fluid rounded-start"
                   src="assets/img/resimler/4.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

<Col lg={3}>
        <Card>
            <Row>              
              <Col>
                  <Card.Img className="img-fluid rounded-start"
                   src="assets/img/resimler/8.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

            <Col lg={3}>
        <Card>
            <Row>              
              <Col>
                  <Card.Img className="img-fluid rounded-start"
                   src="assets/img/resimler/12.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

          <Col lg={3}>
        <Card>
            <Row>              
              <Col>
                  <Card.Img className="img-fluid rounded-start"
                   src="assets/img/resimler/16.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row> 
     

  

     
    </Container>
  )
}

export default Galeri2