import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/pages/Home';
import AddFood from './components/pages/AddFood';
import Browse from './components/pages/Browse';
import FoodSingle from './components/pages/FoodSingle';
//import Footer from './components/UIs/Footer';
import logo from './components/assets/images/meLogo.png'
import css from './App.module.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav className={css.nav}>
      <div className={css.logo}>
           <NavLink to='/'><img src={logo}/></NavLink> 
        </div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="browse">Browse</NavLink>
        <NavLink to="/add">Add new recipe</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="add" element={<AddFood />} />
        <Route path="browse/:single" element={<FoodSingle />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
