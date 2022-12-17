import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

export default function DetailLocation() {
  const { id } = useParams();
  const [detailLoc, setDetailLoc] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadDetailLoc = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/location-area/${id}`
      );
      const dataResponse = await response.json();
      setDetailLoc(dataResponse);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDetailLoc(id);
  }, [id]);

  const getNameLoc = `${
    detailLoc?.name?.split('')[0].toUpperCase() + detailLoc?.name?.substring(1)
  }`;
  const nameLocation = getNameLoc?.split('-').join(' ');

  const handleClick = (name, chance) => {
    localStorage.setItem('pokemon-location', JSON.stringify({ name, chance }));
    navigate('/fight');
  };

  return (
    <div>
      {!loading ? (
        <>
          <div className='container'>
            <div className='p-6'>
              <h1 className='text-center text-xl font-bold pb-4'>
                {nameLocation}
              </h1>
              <div className='grid grid-cols-4 gap-4 my-4'>
                {detailLoc?.pokemon_encounters?.map((item, idx) => (
                  <Card
                    key={idx + 1}
                    name={item.pokemon.name}
                    onClick={() =>
                      handleClick(
                        item.pokemon.name,
                        item.version_details[0].max_chance
                      )
                    }
                    isLocation
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        'Loading...'
      )}
    </div>
  );
}
