import React, { useEffect, useState } from 'react';
import PokemonList from '../components/PokemonList';

export default function Page() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemos = async () => {
    try {
      const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await fetchData.json();
      const pokemonList = data?.results.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      });
      setPokemons(await Promise.all(pokemonList));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemos();
  }, []);

  return (
    <div className='p-6'>
      <PokemonList data={pokemons} />
    </div>
  );
}
