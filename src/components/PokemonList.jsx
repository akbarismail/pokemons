import React, { useState } from 'react';
import Card from './Card';
import Chosen from './Chosen';
// import { array } from 'prop-types';

export default function PokemonList({ data }) {
  const [chosen, setChosen] = useState({
    name: 'Pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
  });

  const handleClick = (name, image) => {
    setChosen({ name, image });
    localStorage.setItem('my-pokemons', JSON.stringify({ name, image }));
  };

  return (
    <>
      <Chosen name={chosen.name} image={chosen.image} />
      <div id='pokemon-list' className='grid grid-cols-4 gap-4'>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              attrImg='imgBulbasaur'
              imgSrc={item.sprites.other.dream_world.front_default}
              title={item.name}
              onClick={() =>
                handleClick(
                  item.name,
                  item.sprites.other.dream_world.front_default
                )
              }
              isSelected={true}
            />
          );
        })}
      </div>
    </>
  );
}

// PokemonList.propTypes = {
//   data: array.isRequired,
// };
