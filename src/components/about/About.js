import React from 'react'
import { Col, Container, Image,Row } from 'react-bootstrap'
import about from "../../assets/img/efeler-slider.jpg"


const About = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col lg={6}>
                    <Image src={about} className="img-fluid" />
                     </Col>
                <Col lg={6}>
                    <h2>What do we offer?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto fugit laudantium ad nostrum corporis, quo, incidunt cupiditate reiciendis quidem iste. Ipsum vero, harum aspernatur fuga ut natus ipsam odit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusantium commodi consequuntur esse. Modi doloribus ratione dolorem assumenda tempora cumque vel totam quasi reprehenderit numquam inventore beatae, dolor, magnam eveniet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae odio cupiditate delectus laborum explicabo alias a nesciunt enim, id quod dolorem molestias soluta autem praesentium aliquam, eius, similique voluptas?
                    </p>

                    
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About