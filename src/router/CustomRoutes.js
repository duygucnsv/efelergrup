import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ReferanslarPage from '../pages/ReferanslarPage'
import ProjelerPage from '../pages/ProjelerPage'
import TeklifPage from '../pages/TeklifPage'
import GaleriPage from '../pages/GaleriPage'
import HizmetlerimizPage from '../pages/HizmetlerimizPage'


const CustomRoutes = () => {
  return (
    <Routes> 
       
        <Route path='/contact' element={<ContactPage/>}/>     
        <Route path='/galeri' element={<GaleriPage/>}/>     
        <Route path='/projeler' element={<ProjelerPage/>}/>   
        <Route path='/referanslar' element={<ReferanslarPage/>}/>  
        <Route path='/hizmetler' element={<HizmetlerimizPage/>}/> 
        <Route path='/about' element={<AboutPage/>}/>   
        <Route path='/teklif' element={<TeklifPage/>}/>        
        <Route path='/' element={<HomePage/>}/>

    </Routes>
  )
}

export default CustomRoutes;