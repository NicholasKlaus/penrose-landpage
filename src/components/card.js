import React from 'react';

export const QuotesCard = ({ el }) => {
  return (
    <div className="card">
      <h3 className="card__title">Name: {el.name}</h3>
      <span className="card__subtitle">Price: {el.price}$</span>
    </div>
  );
}