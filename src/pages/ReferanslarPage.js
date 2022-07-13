import React from 'react'
import Referanslarİki from '../components/referanslar/Referanslarİki'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'

const ReferanslarPage = () => {
  return (
    <>
    <PageHeader title="Referanslarımız"/>
    <Spacer/>
    <Referanslarİki/>
    <Spacer/>
   
    </>
  )
}

export default ReferanslarPage;