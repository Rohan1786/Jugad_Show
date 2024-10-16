import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter> {/* Removed basename */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> {/* Use lowercase "about" */}
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
