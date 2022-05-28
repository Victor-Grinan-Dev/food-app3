import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UIs/Card';
import css from './browse.module.css'

function Browse() {
  const [recipes, setRecipes] = useState([]);
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = () => axios.get('http://localhost:3001/database');
  const getCountries = () => axios.get('https://restcountries.com/v2/all');

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; 
      setRecipes(recipesData.data);
      setCountry(countriesData.data);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div className={css.browse}>
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          name={recipe.id}
          data={recipe}
          country={country.find(
            (country) => country.alpha2Code === recipe.country_code
          )}
          {...recipe}
        />
      ))}
    </div>
  );
};

export default Browse;
//