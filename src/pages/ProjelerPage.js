import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import Projeler from '../components/projeler/Projeler'
import Vehicles from '../components/services/Vehicles'
import NewsletterPanel from '../components/contact/NewsletterPanel'


const ProjelerPage = () => {
  return (
     <>
      <PageHeader title="Projelerimiz"/>
      <Spacer/>
      <Projeler/>
      <Spacer/>
      <Vehicles/>
      <Spacer/>
      <NewsletterPanel/>
      <Spacer/>

      
      
    </>
  )
}

export default ProjelerPage