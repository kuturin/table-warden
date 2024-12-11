import React from 'react';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters = [], onDelete }) => {
  console.log('Received characters:', characters);

  return (
    <div>
      <ul>
        {characters.map((character, index) => (
          <li key={index} className="item">
            <Link to={`/character/${character}`}><button>{character}</button></Link>
            <button className="delete-button" onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
