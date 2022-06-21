import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AddFood from './components/pages/AddFood';
import Browse from './components/pages/Browse';
import FoodSingle from './components/pages/FoodSingle';
import About from './components/pages/About';
import Navbar from './components/UIs/Navbar';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="about" element={<About />} />
        <Route path="add" element={<AddFood />} />
        <Route path="browse/:single" element={<FoodSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
