import React from 'react';
import { Link } from 'react-router-dom';
import css from './card.module.css';

const Card = ({ name, description, image, data, country }) => {
  return (
    <div className={css.cardBox}>
      <h2 className={css.name}>{name}</h2>
      <p className={css.description}>{description}</p>
      <img src={image} alt={name} className={css.image}/>
      <img src={country.flag} alt={country.name} className={css.flag}/>
      <div className={css.seeMore}>
        <Link to={name} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;