import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UIs/Card';

function Browse() {
  const [recipies, setRecipies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = () => axios.get('http://localhost:3001/database');
  const getCountries = () => axios.get('https://restcountries.com/v2/all');

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; 
      setRecipies(recipesData.data);
      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  // conditional rendering
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      {recipies.map((recipe) => (
        <Card
          key={recipe.id}
          data={recipe}
          country={countries.find(
            (country) => country.alpha2Code === recipe.country_code
          )}
          {...recipe}
        />
      ))}
    </div>
  );
};

export default Browse;