import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddFood = () => {
  const [data, setData] = useState({
    name: '',
    author: '',
    description: '',
    country: '',
    imgen: '',
    ingredients: [],
    inst: '',
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredient: '', quantity: '' },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngData = (e, i) => {
    const { name, value } = e.target;
    const ingredients = [...ingredients];
    ingredients[i][name] = value;
    setIngredients(ingredients);
    setData({ ...data, ingredients: ingredients });
  };


  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newInc = { id: ingredients.length + 1, ingredient: '', quantity: '' };
    setIngredients([...ingredients, newInc]);
  };


  const submitData = (e) => {
    axios.post('http://localhost:3001/database', data);
  };

  return (
 
    <form onSubmit={submitData}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea type="text" name="desc" id="desc" onChange={changeData} />
      </div>
      <div>
        <label htmlFor="countryCode">Recipe is from:</label>
        <select name="country_code" id="countryCode" onChange={changeCountry}>

          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="img">Image url</label>
        <input type="url" name="img" id="img" onChange={changeData} />
      </div>
      <p>Ingredients</p>
      {ingredients.map((_, i) => {
        return (
          <div key={i}>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                onChange={(e) => changeIngData(e, i)}
              />
            </div>
            <div>
              <label htmlFor="incName">Ingredient</label>
              <input
                type="text"
                name="incName"
                id="incName"
                onChange={(e) => changeIngData(e, i)}
              />
            </div>
          </div>
        );
      })}
      <button onClick={addMore}>Add more ingredients</button>
      <div>
        <label htmlFor="inst">Instructions</label>
        <textarea type="text" name="inst" id="inst" onChange={changeData} />
      </div>
      <input type="submit" value="Add recipe" />
    </form>
  );
};

export default AddFood;