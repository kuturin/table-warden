import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
