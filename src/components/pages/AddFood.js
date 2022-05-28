import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './addFood.module.css';
function AddFood() {

  const DB_API = 'http://localhost:3001/database';
  const COUNTRIES_API = 'https://restcountries.com/v2/all';

  const [data, setData] = useState({
    name: '',
    author: '',
    description: '',
    ingredients: [],
    instruction: '',
    image: '',
    country_code: '',
  });

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(COUNTRIES_API).then((res) => {
      setCountries(res.data);
    });
  }, []);

  const [ingredients, setIngredients] = useState([
      { id: 1, ingredient: '', quantity: '' },
    ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const changeCountry = (e) => {
    const country = countries.find((item) => item.name === e.target.value);
    setData({ ...data, country_code: country.alpha3Code });
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post(DB_API, data);
  };

  const changeIngredient = (e, i) => {
    const { name, value } = e.target;
    const ingredientlist = [...ingredients];
    ingredientlist[i][name] = value;
    setIngredients(ingredientlist);
    setData({ ...data, ingredients: ingredients });
  };

  const addIngrdient = (e) => {
    e.preventDefault();
    const newIngredient = { id: ingredients.length + 1, incName: '', quantity: '' };
    setIngredients([...ingredients, newIngredient])
  }

  return (
    <div className={css.addFood}>
      <form onSubmit={submitData}>
        <table>
          <tr>
            <td><label htmlFor="name">Name</label></td>
            <td><input type="text" name="name" id="name" onChange={changeData} className={css.input1}/></td>
          </tr>

          <tr>
            <td><label htmlFor="author">Author</label></td>
            <td><input type="text" name="author" id="author" onChange={changeData} className={css.input1} /></td>
          </tr>

          <tr>
            <td><label htmlFor="desc">Description</label></td>
            <td><textarea type="text" name="desc" id="desc" onChange={changeData} className={css.input1} /></td>
          </tr>

          <tr>
            <td><label htmlFor="countryCode">Origin Country :</label></td>

            <td><select name="country_code" id="countryCode" onChange={changeCountry} className={css.input1}>
            {countries.map((c) => (
              <option key={c.name}>{c.name}</option>
            ))}
            </select>
            </td>

          </tr>

          <tr>
            <td><label htmlFor="img">Image url</label></td>
            <td><input type="url" name="img" id="img" onChange={changeData} className={css.input1} /></td>
          </tr>
              
          <tr>
            <td><p>Ingredients</p></td>         
            <td>{ingredients.map((_, i) => {
                  return (
                    <div key={i}>

                      <table>

                        <tr>
                          <td><label htmlFor="ingredient">Ingredient</label></td>
                          <td><input type="text" name="ingredient" id="ingredient" onChange={(e) => changeIngredient(e, i)} className={css.input2} /></td>
                        </tr>
              
                        <tr>
                          <td><label htmlFor="quantity">Quantity</label></td>
                          <td><input type="text" name="quantity" id="quantity" onChange={(e) => changeIngredient(e, i)} className={css.input2} /></td>
                        </tr>
                      </table>

                    </div>
                  );
            })}
            <button onClick={addIngrdient}>Add ingredient</button></td>
          </tr>

          <tr>
            <td><label htmlFor="inst">Instructions</label></td>
            <td><textarea type="text" name="inst" id="inst" onChange={changeData} className={css.input1} /></td>
          </tr>

          <tr>
            <td></td>
            <td><input type="submit" value="Submit"/></td>
          </tr>

        </table>
      </form>
    </div>
  )
}

export default AddFood;

//Database names
/*
name
author
description
ingredients
ingredient
quantity
instruction
image
country_code
*/