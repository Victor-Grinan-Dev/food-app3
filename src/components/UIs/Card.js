import React from 'react';
import { Link } from 'react-router-dom';
import css from './card.module.css';

const Card = ({ name, description, image, data, country }) => {

  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className={css.cardBox}>
      
      <div className={css.cardHeader}>
        <h2 className={css.name}>{capitalStart(name)}</h2>
        <img src={country.flag} alt={country.name} className={css.flag}/>
      </div>
      
      <div className={css.imageContainer}>
        <img src={image} alt={name} className={css.image}/>     
      </div>
      
      <p className={css.description}>{capitalStart(description)}</p>
      
      
      <div className={css.seeMore}>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;