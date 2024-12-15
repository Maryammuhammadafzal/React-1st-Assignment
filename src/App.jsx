import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/services.jsx'
import Contact from './components/Contact/Contact.jsx'
function App() {
  

  return (
    <>
     <div className="md:w-full md:min-h-96 w-full md:m-0 p-0 md:p-0 md:justify-center md:items-center md:flex md:flex-col m-0">
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Contact/>

     </div>
    </>
  )
}

export default App

