import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import Projeler from '../components/projeler/Projeler'
import Vehicles from '../components/services/Vehicles'

const ProjelerPage = () => {
  return (
     <>
      <PageHeader title="Projelerimiz"/>
      <Spacer/>
      <Projeler/>
      <Spacer/>
      <Vehicles/>
      <Spacer/>
      
      
    </>
  )
}

export default ProjelerPage