import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const CharacterList = ({ characters, removeCharacter }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h1>Character List</h1>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            {character.name} - Age: {character.age} years old
            <button onClick={() => handleEdit(character.id)}>Edit</button>
            <button onClick={() => removeCharacter(character.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate('/create')}>Create Character</button>
      </div>
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default CharacterList;