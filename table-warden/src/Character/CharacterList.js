import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters, removeCharacter }) => {
  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name} - Age: {character.age} years old
            <Link to={`/edit/${character.id}`}>
            <button onClick={() => removeCharacter(character.id)}>Remove</button>
              <button>Edit</button>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link to="/create">Create Character</Link>
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default CharacterList;