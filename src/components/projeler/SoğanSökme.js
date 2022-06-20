import React from 'react'

const SoğanSökme = () => {
  return (
    <Container className="galeri">
      <Row>
        <Col lg={4}>
          <Card className='d-flex h-100 w-100'>
            <Row>              
              <Col xs={5} >
            <Card.Img src="assets/img/resimler/soğan sokme makinası.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={4}>
        <Card>
            <Row>              
              <Col xs={5}>
                 <Card.Img className="img-fluid rounded-start" src="assets/img/resimler/soğan sökme mak2.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={4}>
        <Card>
            <Row>              
              <Col xs={5}>
                  <Card.Img className="img-fluid rounded-start" src="assets/img/resimler/soğan sökme3.jpg" />
              </Col>
            </Row>
          </Card>
        </Col>         
           
        
      </Row> 
      
    </Container>
  )
}

export default SoğanSökme