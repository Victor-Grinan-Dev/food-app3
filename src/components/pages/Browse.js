import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../UIs/Card';
import css from './browse.module.css'

const databaseAPI = 'http://localhost:8001/database';
const countriesAPI = 'https://restcountries.com/v2/all'

function Browse() {
  const [recipes, setRecipes] = useState([]);
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const recipesFilter = recipes.filter((res) => {
    res.name = res.name.toLowerCase()
    return res.name.includes(search.toLowerCase());
  });

  const searchHandler = (e) => {
    setSearch(e.target.value); 
    };

  const getRecipes = () => axios.get(databaseAPI);
  const getCountries = () => axios.get(countriesAPI);

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
    return <p>Loading...</p>;
  }

  return (
    <div className={css.browse}>

      <div className={css.search}>
        <label> Search </label>
        <input type="text" className={css.searchImput} placeholder="🔍" onChange={searchHandler} />
      </div>
    
      <div className={css.showCards}>
        {recipesFilter.map((recipe) => (
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

    </div>
  );
};

export default Browse;
