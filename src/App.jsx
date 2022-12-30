import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-black  '>
      
      <Home/>
    </div>
  )
}

export default App
