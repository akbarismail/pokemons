import React from 'react';
// import { string, bool, func } from 'prop-types';

export default function Card({
  title,
  imgSrc,
  attrImg,
  name,
  onClick,
  isSelected,
  isLocation,
}) {
  return (
    <>
      {isSelected ? (
        <div className='max-w-sm rounded overflow-hidden shadow-lg p-4'>
          <p className='font-bold text-xl mb-2 text-center'>{title}</p>
          {!isLocation && (
            <img src={imgSrc} alt={attrImg} className='my-4 mx-auto h-32' />
          )}

          <button
            onClick={onClick}
            className='rounded bg-indigo-500 p-4 text-white w-full'
          >
            {isLocation ? 'Move on' : 'Pilih pokemon'}
          </button>
        </div>
      ) : (
        <>
          {!isLocation ? (
            <>
              <h2 className='font-bold text-xl mb-2 text-center'>
                Sang Terpilih
              </h2>
              <img src={imgSrc} alt={attrImg} className='my-4 mx-auto h-64' />
              <p className='font-bold text-xl mb-2 text-center'>{name}</p>
            </>
          ) : (
            <p className='font-bold text-xl mb-2 text-center'>{name}</p>
          )}
        </>
      )}
    </>
  );
}

// Card.propTypes = {
//   title: string,
//   imgSrc: string.isRequired,
//   attrImg: string.isRequired,
//   name: string,
//   onClick: func,
//   isSelected: bool.isRequired,
// };
