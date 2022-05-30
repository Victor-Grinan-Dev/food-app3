import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './addFood.module.css';
function AddFood() {

  const DB_API = 'http://localhost:8001/database';
  const COUNTRIES_API = 'https://restcountries.com/v2/all';
  const RANDOM_IMG_API = 'https://source.unsplash.com/500x400/?'; //concat this to a name


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
    axios.get(COUNTRIES_API).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const [ingredients, setIngredients] = useState([
      { id: 1, ingredient: '', quantity: '' },
    ]);

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const chanImage = (e) => {
    e.preventDefault()
    const head_api = 'https://source.unsplash.com/';

    if ((e.target.value.indexOf(head_api) == -1)){//does not contain the api head
      const randomPic = RANDOM_IMG_API + e.target.value;
      setData({ ...data, [e.target.name]: randomPic }); 
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    } 
  }

  const changeCountry = (e) => {
    const country = countries.find((item) => item.name === e.target.value);
    console.log(country.alpha2Code)
    setData({ ...data, country_code: country.alpha2Code });
  };

  const submitData = (e) => {
    //if the url data still empty change it for the name
    axios.post(DB_API, data);
    setData({
      name: '',
      author: '',
      description: '',
      ingredients: [],
      instruction: '',
      image: '',
      country_code: '',
    })
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
      <br/>
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
              <td><label htmlFor="desc">Description</label></td>
              <td><textarea type="text" name="description" id="description" onChange={changeData} className={css.input1} /></td>
            </tr>

            <tr>
              <td><label htmlFor="countryCode">Origin Country :</label></td>

              <td><select name="country_code" id="country_code" onChange={changeCountry} className={css.input1} defaultValue='Select a Country'>
              <option hidden disabled value> Select a country... </option>
              {countries.map((country) => (
                <option key={country.name}>{country.name}</option>
              ))}
              </select>
              </td>
            </tr>
            <br/>
            <tr>
              <td><label htmlFor="img">Image url <br/> or image name <br/> to search: </label></td>
              <td><input type="text" name="image" id="image" onChange={chanImage} className={css.input1} /></td>
            </tr>
            <tr>
              <td></td>
              <td>https://source.unsplash.com/[img_id]</td>
            </tr>
            <br/>
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
            <br/>
            <tr>
              <td><label htmlFor="inst">Instructions</label></td>
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