import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const CharacterList = ({ characters, removeCharacter }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/view/${id}`);
  };

  const renderCharacterList = (category) => {
    return (
      <ul>
        {characters
          .filter(character => character.category === category)
          .map(character => (
            <li key={character.id}>
              {character.name} - Age: {character.age} years old
              <button onClick={() => handleView(character.id)}>View</button>
              <button onClick={() => handleEdit(character.id)}>Edit</button>
              <button onClick={() => removeCharacter(character.id)}>Remove</button>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Character List</h1>
      <h2>PC</h2>
      {renderCharacterList('PC')}
      <h2>NPC</h2>
      {renderCharacterList('NPC')}
      <h2>Creature</h2>
      {renderCharacterList('Creature')}
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