import React from 'react';
import './cards.css';
import Card from '../card/Card';
import Array from '../Array';

const Cards = () => {
  const listItem = Array.slice(0, 6).map((item) => (
    <Card key={item.id} cafe={item} />
  ));

  return (
    <section className="cards">
      <input
        className="cards__search"
        placeholder="Поиск по ресторанам и кухням"
      ></input>
      <h1 className="cards__title">Рестораны в Москве</h1>
      <ul className="cards__list">{listItem}</ul>
    </section>
  );
};

export default Cards;
