import React from 'react';
import './card.css';

const Card = ({ cafe }) => {
  return (
    <li className="card">
      <a href="" className="card__link">
        <img className="card__image" src={cafe.img} alt=""></img>
        <h2 className="card__name">{cafe.name}</h2>
        <p className="card__menu">{cafe.menu}</p>
        <p className="card__delivery-time">{cafe.delivery}</p>
      </a>
    </li>
  );
};

export default Card;
