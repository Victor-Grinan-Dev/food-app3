import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './foodSingle.module.css'

const FoodSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div >
      <h1 className={css.foodName}>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className={css.image} />
      <img src={country.flag} alt={country.name}  className={css.flag} />
      <p>{recipe.instruction}</p>
    </div>
  );
};

export default FoodSingle;