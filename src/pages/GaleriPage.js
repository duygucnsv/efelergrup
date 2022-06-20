import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import GaleriBir from '../components/galeri/GaleriBir'

const GaleriPage = () => {
  return (
    <>
      <PageHeader title="Galeri"/>
            <Spacer/>
            <GaleriBir/>           
            <Spacer/>   
    </>
  )
}

export default GaleriPage