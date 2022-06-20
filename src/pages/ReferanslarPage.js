import React from 'react'
import Referanslar from '../components/referanslar/Referanslar'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const ReferanslarPage = () => {
  return (
    <>
    <PageHeader title="Referanslarımız"/>
    <Spacer/>
    <Referanslar/>
    <Spacer/>
   
    </>
  )
}

export default ReferanslarPage;