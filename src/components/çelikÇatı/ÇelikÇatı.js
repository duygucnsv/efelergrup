import React from 'react'



const ÇelikÇatı = () => {
  return (
    <Container className="projeler">
      <div className="row-wrapper">
        <Row>
          {projectList.map((product) => (
            <Col xs={12} md={4} lg={3} key={product.id}>
              <Row>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Button variant="primary">Go somewhere</Button>
                </Card>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default ÇelikÇatı