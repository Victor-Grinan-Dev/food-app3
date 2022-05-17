import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, description, imgen, data, country }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={imgen} alt={name} />
      <img src={country.flag} alt={country.name} />
      <div>
        <Link to={`${name}`} state={{ data: data, country: country }}>
          See more
        </Link>
      </div>
    </div>
  );
};

export default Card;