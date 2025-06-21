import React from 'react'
import './App.css'
import Home from './components/pages/Home'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import Quote from './components/pages/Quote'
import Book1 from './components/pages/Book1'
import Welcome from './components/Welcome'
const App = () => {
  return (
   
   <div className="min-h-screen bg-[#F3F2EF] dark:bg-[#232321] dark:text-white transition-all">
   <Welcome/>
   <Nav />
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/About" element={<About/>} />
      <Route path ="/Quote" element={<Quote/>} /> 
      <Route path ="/Book1" element={ <Book1 />} />
    </Routes>
    
   </div>

  )
}

export default App
