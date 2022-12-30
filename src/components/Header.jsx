import React, { useEffect, useState } from 'react'
import Restaurante from '../assets/restaurante.jpg'
import Cocteleria from '../assets/cocteleria.jpg'
import Comida from '../assets/comida.jpg'
import Diversion from '../assets/diversion.jpg'
import Fiesta from '../assets/fiesta.jpg'
import Pantalla from '../assets/pantalla.jpg'

import {AppContext} from '../context/AppLevelContext'
import Navbar from './Navbar'


 var photoarray = [Restaurante, Cocteleria,Comida, Diversion, Fiesta, Pantalla]
var textarray = ['el mejor restaurante', 'la mejor cocteleria',' los mejores platillos', 'la mejor diversión', 'la mejor fiesta', 'la pantalla más grande del sur']
 


function Header() {

    const{movil} = AppContext()


    const [photoSelected, setPhotoSelected] = useState(photoarray[0])
    const [textSelected, setTextSelected] = useState(textarray[0])

    useEffect(() => {
        for (let i = 0; i < photoarray.length; i++) {
          
            setTimeout(function() {
             
              setPhotoSelected(photoarray[i])
              setTextSelected(textarray[i])
              console.log(i)
              if(i == photoarray.length-1){
                console.log('entre')
                i=i*0
                console.log(i)
            }
              
            }, 2000*i);
            
          }
    }, [])
    


  return (
    <div className=' w-full h-screen relative overflow-x-hidden'>
      <Navbar/>
        
        <img src={photoSelected} alt="restaurante" className='w-full h-full object-cover' />
        <div className='absolute top-0 w-full h-full bg-black/70 z-10 overflow-hidden'></div>

        <div className='w-full h-full absolute top-[0%] left-[0%] z-20'>
        <div className='w-full h-full flex flex-col justify-center items-center  text-white font-varsity text-center'>
           <h2 className={`text-5xl md:text-[120px] animate-text-zoom2 leading-[40px] md:leading-[120px] ${movil == true ? 'hidden' : 'block' }`}> {textSelected}</h2>
        </div>
        </div>
        
    </div>
  )
}

export default Header