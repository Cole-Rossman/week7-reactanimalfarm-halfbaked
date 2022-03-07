import React from 'react';
import './Animal.css';

export default function Animal({ animal }) {
  console.log(animal);
  return (
    <div className='animal' style={{ top: animal.top, left: animal.left }}>
      <img src={`${process.env.PUBLIC_URL}/animals/${animal.type}.svg`} />
      <span>{animal.name}</span>
      <span>{animal.says}</span>
      
    </div>
  );
}
