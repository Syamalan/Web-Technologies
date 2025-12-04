import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/ContactUs'

function App() {

  return (
    <div className='App'>
      <About />
      <Contact />

    </div>
    
  )
}

export default App
