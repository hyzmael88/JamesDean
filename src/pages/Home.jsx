import React from 'react'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Pasos from '../components/Pasos'
import Testimonios from '../components/Testimonios'

function Home() {
  return (
    <div className='bg-black'>
        <Header/>
        <AboutUs/>
        <Pasos/>
         <Menu/>
        <Testimonios/>
        <Contact/>
        <Footer/>
        
      

    </div>
  )
}

export default Home