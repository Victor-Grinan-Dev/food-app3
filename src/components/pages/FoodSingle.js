import React from 'react';
import { useLocation } from 'react-router-dom';
import css from './foodSingle.module.css'

const FoodSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={css.singleFood}>
      <div className={css.imageContainer}>
        <img id={recipe.name} src={recipe.image} alt={recipe.name} className={css.image} />
      </div>
      
      <div className={css.dataContainer}>
        <div className={css.dataHeader}>
          <h2 className={css.foodName}>"{capitalStart(recipe.name)}"</h2>
          <img id={recipe.name} src={country.flag} alt={country.name}  className={css.flag} />
        </div>
        <h3>Ingredients:</h3>
        <ul>
        { 
          recipe.ingredients.map((item) => (
            <li id={item.id}>{capitalStart(item.ingredient)} - {item.quantity} </li>
          ))
        }
        </ul>
        <br/>
        <p >{capitalStart(recipe.instruction)}</p>
      </div>
    </div>
  );
};

export default FoodSingle;