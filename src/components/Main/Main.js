import React from 'react';
import './Main.css';
import { animals } from '../../data.js';
import background from '../../background.png';
import Animal from '../Animal/Animal';

export default function Main() {
  return <main className='App' style={{ backgroundImage: `url(${background})` }} >
    {animals.map((animal) => (
      // <Animal key={animal.name} name={animal.name} type={animal.type} says={animal.says} top={animal.top} left={animal.left} />
      <Animal key={animal.name} animal={animal} />
    ))};
  </main>;
}
