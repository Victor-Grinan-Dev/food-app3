import React from 'react';
import { Link } from 'react-router-dom';
import css from './card.module.css';

const Card = ({ name, description, image, data, country }) => {
  return (
    <div className={css.cardBox}>
      <div className={css.cardHeader}>
        <h2 className={css.name}>{name}</h2>
        <img src={country.flag} alt={country.name} className={css.flag}/>
      </div>
      
      <div className={css.imageContainer}>
        <img src={image} alt={name} className={css.image}/>     
      </div>
      
      <p className={css.description}>{description}</p>
      
      
      <div className={css.seeMore}>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;