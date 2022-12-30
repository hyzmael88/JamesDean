import React from 'react'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'
import Pasos from '../components/Pasos'

function Home() {
  return (
    <div className='bg-black'>
        <Header/>
        <AboutUs/>
        <Pasos/>
    </div>
  )
}

export default Home