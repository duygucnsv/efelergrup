import React from 'react'
import { Container,Breadcrumb } from 'react-bootstrap'

const Hizmetler = () => {
  return (
    <Container>
        <Breadcrumb>
  <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
  <Breadcrumb.Item href="/hizmetler">
    Hizmetlerimiz
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
    </Container>
  )
}

export default Hizmetler