import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import Galeri from "../components/galeri/Galeri";

const GaleriPage = () => {
  return (
    <>
      <PageHeader title="Galeri"/>
            <Spacer/>
            <Galeri/>           
            <Spacer/>   
    </>
  )
}

export default GaleriPage