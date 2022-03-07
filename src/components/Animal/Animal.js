import React from 'react';
import './Animal.css';

export default function Animal(info) {
  return (
    <div className='animal'>
      <img style={{ top: (info.top), left: (info.left) }} src={`${process.env.PUBLIC_URL}/animals-${info.type}.svg`} />
      <p></p>
      
    </div>
  );
}
