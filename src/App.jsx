import { useState } from 'react'
import ResponsiveAppBar from './Components/ResponsiveAppBar'
import Sidebar from './Components/Sidebar'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Schedule from './Components/Schedule'
import Blog from './Components/Blog'
import Pricing from './Components/Pricing'
import Classes from './Components/Classes'
import Contact from "./Components/Contact"
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'


function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='schedule' element={<Schedule />} />
          <Route path='blog' element={<Blog />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='classes' element={<Classes />} />
          <Route path='contact' element={<Contact />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
