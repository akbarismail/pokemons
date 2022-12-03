import React from 'react';
import Card from './Card';

export default function Chosen({ pokemonData }) {
  return (
    <div
      id='chosen-one'
      className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-indigo-500 text-white mb-8'
    >
      <Card
        imgSrc={
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'
        }
        attrImg={'attrImg'}
        name={'Pikachu'}
        isSelected={false}
      />
    </div>
  );
}
