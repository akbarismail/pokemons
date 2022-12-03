import React from 'react';
import Card from './Card';
import { array } from 'prop-types';
import Chosen from './Chosen';

export default function PokemonList({ data }) {
  return (
    <>
      <Chosen />
      <div id='pokemon-list' className='grid grid-cols-4 gap-4'>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              attrImg='imgBulbasaur'
              imgSrc={item.sprites.other.dream_world.front_default}
              title={item.name}
              onClick={() => {
                const chosenOne = document.getElementById('chosen-one');
                chosenOne.innerHTML = `
                <h2 class='font-bold text-xl mb-2 text-center'>Sang Terpilih</h2>
                <img src=${item.sprites.other.dream_world.front_default} alt="image-pokemons" class='my-4 mx-auto h-64' />
                <p class='font-bold text-xl mb-2 text-center'>${item.name}</p>`;
              }}
              isSelected={true}
            />
          );
        })}
      </div>
    </>
  );
}

PokemonList.propTypes = {
  data: array.isRequired,
};
