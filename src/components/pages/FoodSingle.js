import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import css from './foodSingle.module.css'

const FoodSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;
  const ingredients = location.state.ingredients

  return (
    <div className={css.singleFood}>
      <div className={css.imageContainer}>
        <img src={recipe.image} alt={recipe.name} className={css.image} />
      </div>
      
      <div className={css.dataContainer}>
        <div className={css.dataHeader}>
          <h2 className={css.foodName}>"{recipe.name}"</h2>
          <img src={country.flag} alt={country.name}  className={css.flag} />
        </div>
        <h3>Ingredients:</h3>
        <ul>
        { 
          recipe.ingredients.map((item) => (
            <li>{item.ingredient} - {item.quantity} </li>
          ))
        }
        </ul>
        <br/>
        <p>{recipe.instruction}</p>
      </div>
    </div>
  );
};

export default FoodSingle;