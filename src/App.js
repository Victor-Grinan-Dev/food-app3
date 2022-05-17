import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import FoodSingle from './components/FoodSingle';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/add_recipe">Add new recipe</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipes" element={<RecipeList />} />
        <Route path="add_recipe" element={<AddFood />} />
        <Route path="recipes/:single" element={<RecipeSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
