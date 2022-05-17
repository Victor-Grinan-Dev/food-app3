import React from 'react';
import { useLocation } from 'react-router-dom';

const FoodSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.img} alt={recipe.name} />
      <img src={country.flag} alt={country.name} />
    </div>
  );
};

export default FoodSingle;