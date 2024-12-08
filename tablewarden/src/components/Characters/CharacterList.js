import React from 'react';

const CharacterList = ({ characters, onDelete }) => {
  return (
    <div>
      <h3>Characters</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            {character}
            <button onClick={() => {
              console.log('Usuwanie postaci:', index);
              onDelete(index);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
