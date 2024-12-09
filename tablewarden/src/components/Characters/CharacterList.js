import React from 'react';

const CharacterList = ({ characters, onDelete }) => {
  return (
    <div>
      <ul>
        {characters.map((character, index) => (
          <li key={index} className="item">
            {character}
            <button className="delete-button" onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
