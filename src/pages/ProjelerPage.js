import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import Projeler from '../components/projeler/Projeler'
import Vehicles from '../components/services/Vehicles'
import NewsletterPanel from '../components/contact/NewsletterPanel'
import Project from '../components/projeler/Project'


const ProjelerPage = () => {
  return (
     <>
      <PageHeader title="Projelerimiz"/>
      <Spacer/>
      <Project/>
      <Spacer/>
      <Vehicles/>
      <Spacer/>
      <NewsletterPanel/>
      <Spacer/>

      
      
    </>
  )
}

export default ProjelerPage