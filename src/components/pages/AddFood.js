import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './addFood.module.css';

function AddFood() {

  const DB_API = 'http://localhost:8001/database';
  const COUNTRIES_API = 'https://restcountries.com/v2/all';
  const RANDOM_IMG_API = 'https://source.unsplash.com/500x400/?'; //concat this to a name

  const emptyState = {
    name: '',
    author: '',
    description: '',
    ingredients: [],
    instruction: '',
    image: '',
    country_code: '',
  };

  const [data, setData] = useState(emptyState);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(COUNTRIES_API).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [ingredients, setIngredients] = useState([
    { id: 1, ingredient: '', quantity: '' },
  ]);

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: capitalStart(e.target.value) });
  };

  const chanImage = (e) => {
    const head_api = 'https://source.unsplash.com/';

    if ((e.target.value.indexOf(head_api) == -1)){
      const randomPic = RANDOM_IMG_API + e.target.value + '-food';
      setData({ ...data, [e.target.name]: randomPic }); 
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    } 
  };

  const changeCountry = (e) => {
    const country = countries.find((item) => item.name === e.target.value);
    setData({ ...data, country_code: country.alpha2Code });
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!data.image || data.image === ""){
      const endPoint = data.name.split(' ').join('-')
      const randomPic = RANDOM_IMG_API + endPoint;
      setData(data.image = randomPic)
    }
    axios.post(DB_API, data);
    setData(emptyState);
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
    const newIngredient = { id: ingredients.length + 1, ingredient: '', quantity: '' };
    setIngredients([...ingredients, newIngredient])
  }

  return (
    <div className={css.addFood}>
      
      <form>
      
      <h2>Add a new recipe: </h2>
      <br/>
        <table>
          
          <tbody>
            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" name="name" id="name" onChange={changeData} className={css.input1}/></td>
            </tr>
            <tr>
              <td><label htmlFor="author">Author</label></td>
              <td><input type="text" name="author" id="author" onChange={changeData} className={css.input1} /></td>
            </tr>
            <tr>
              <td><label htmlFor="description">Description</label></td>
              <td><textarea type="text" name="description" id="description" onChange={changeData} className={css.input1} /></td>
            </tr>
            <tr>
              <td><label htmlFor="country_code">Origin Country :</label></td>
              <td><select name="country_code" id="country_code" onChange={changeCountry} className={css.input1} defaultValue='Select a Country'>
              <option hidden disabled value> Select a country... </option>
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
              </select>
              </td>
            </tr>
            
            <tr>
              <td><label htmlFor="image">Image url <br/> or image name <br/> to search: </label></td>
              <td><input type="text" name="image" id="image" onChange={chanImage} className={css.input1} /></td>
            </tr>
            <tr>
              <td></td>
              <td>https://source.unsplash.com/[img_id]</td>
            </tr>
            
            <tr>
              <td><p>Ingredients</p></td>         
              <td>{ingredients.map((_, i) => {
                    return (
                      <div key={i}>
                            <label htmlFor="ingredient">Ingredient </label>
                            <input type="text" name="ingredient" id="ingredient" onChange={(e) => changeIngredient(e, i)} className={css.input2} />
                            <br></br>               
                          
                            <label htmlFor="quantity">Quantity </label>
                            <input type="text" name="quantity" id="quantity" onChange={(e) => changeIngredient(e, i)} className={css.input2} />
                      </div>
                    );
              })}
              <button onClick={addIngrdient}>Add ingredient</button></td>
            </tr>
            
            <tr>
              <td><label htmlFor="instruction">Instructions</label></td>
              <td><textarea type="text" name="instruction" id="instruction" onChange={changeData} className={css.input1} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Submit" onClick={submitData}/></td>
            </tr>
          </tbody>
          
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