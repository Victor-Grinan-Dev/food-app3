import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './UIs/Footer';
import Navbar from './UIs/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import About from './pages/About';
function Main() {
  return (
    <div>
        Main component
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/browse" element={<Browse/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>

        <Footer/>
    </div>
  )
}

export default Main;