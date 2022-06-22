import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import CelikKonstrüksiyon from '../components/hizmetlerimiz/CelikKonstrüksiyon'
import Hizmetler from '../components/hizmetlerimiz/Hizmetler'

const HizmetlerimizPage = () => {
  return (
    <>
    <PageHeader title="Hizmetlerimiz"/>
    <Spacer/>
    <Hizmetler/>
    <Spacer/>
    <CelikKonstrüksiyon/>
    <Spacer/>
    </>
  )
}

export default HizmetlerimizPage;