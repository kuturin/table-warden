import React from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetail = () => {
  const { characterName } = useParams();

  return (
    <div>
      <h2>Character: {characterName}</h2>
      {/* Dodaj szczegóły postaci tutaj */}
      
    </div>
  );
};

export default CharacterDetail;
