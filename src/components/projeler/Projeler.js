import React from 'react'
import {Col, Container, Row, Figure} from "react-bootstrap"

const Projeler = () => {
  return (
    <Container className="galeri">
      <Row>
        <Col lg={4}>
         <Figure>         
       <Figure.Image
          
          alt="171x180"
          src="assets/img/resimler/soğan sökme mak2.jpeg"
        />  
        </Figure>
        </Col>

        <Col lg={4}>
        <Figure>         
       <Figure.Image
        
          src="assets/img/resimler/2.jpg"
        />  
        </Figure>
        </Col>

        <Col lg={4}>
       <Figure>          
       <Figure.Image
          
          
          src="assets/img/resimler/1.jpg"
        />  
        </Figure>
        </Col>         
           
        
      </Row> 
      
    </Container>
  )
}

export default Projeler
