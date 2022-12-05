import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

export default function Location() {
  const [dataLocation, setDataLocation] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadDataLocation = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://pokeapi.co/api/v2/location-area');
      const data = await response.json();

      const getUrlLoc = data?.results?.map(async (item) => {
        const responseUrlLoc = await fetch(item.url);
        const dataUrlLoc = await responseUrlLoc.json();
        return dataUrlLoc;
      });

      setDataLocation(await Promise.all(getUrlLoc));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadDataLocation();
  }, []);

  const handleClick = (url) => {
    const splitUrl = url.split('/');
    const idLocUrl = splitUrl[splitUrl.length - 2];

    navigate(`/location/${idLocUrl}`);
  };

  return (
    <div className='container'>
      <div className='p-6'>
        <div className='grid grid-cols-4 gap-4'>
          {!loading ? (
            <>
              {dataLocation?.map((data) => (
                <Card
                  key={data.id}
                  title={data.location.name}
                  onClick={() => handleClick(data.location.url)}
                  isLocation
                  isSelected
                />
              ))}
            </>
          ) : (
            'Loading...'
          )}
        </div>
      </div>
    </div>
  );
}
