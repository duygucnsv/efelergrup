import React from 'react'
import { Col, Container, Form, Row, Button,InputGroup} from 'react-bootstrap'
import {Link} from "react-dom"
import {AiOutlineFilePdf,AiOutlineCloudDownload} from "react-icons/ai"

const NewsletterPanel = () => {
  return (
   <div className='newsletter'>
      <Container>
        <Row>
            <Col lg={9}>
                <h3><AiOutlineFilePdf /> Projenize değer katmak için hizmet sağlıyoruz.Bilgi almak ve firmamızı daha yakından tanımak için E-KATALOĞU indirin.</h3>
                <p></p>
            </Col>
            <Col lg={3}>
                <Form>
                    <InputGroup className="mb-3">
   
    <Button as={Link} to="/teklif" variant="outline-primary" id="button-addon2">
     <AiOutlineCloudDownload/> İNDİR
    </Button>
  </InputGroup>
                </Form>
            </Col>

        </Row>

    </Container>
   </div>
  )
}

export default NewsletterPanel