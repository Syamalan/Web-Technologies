import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Blogs from './Components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='App'>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />


       
      </Routes>
     </div>
        
    </>
  )
}

export default App
