import React from 'react';
import Card from './Card';

export default function Chosen({ name, image }) {
  return (
    <div
      id='chosen-one'
      className='max-w-sm rounded overflow-hidden shadow-lg p-4 bg-indigo-500 text-white mb-8'
    >
      <Card imgSrc={image} attrImg={'attrImg'} name={name} isSelected={false} />
    </div>
  );
}
