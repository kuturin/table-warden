import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const CharacterList = ({ characters, removeCharacter }) => {
  const navigate = useNavigate();
  const [showPC, setShowPC] = useState(true);
  const [showNPC, setShowNPC] = useState(true);
  const [showCreature, setShowCreature] = useState(true);

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
      <div>
        <h2>PCs</h2>
        <button onClick={() => setShowPC(!showPC)}>
          {showPC ? 'Hide' : 'Show'} PC
        </button>
        {showPC && renderCharacterList('PC')}
      </div>
      <div>
        <h2>NPCs</h2>
        <button onClick={() => setShowNPC(!showNPC)}>
          {showNPC ? 'Hide' : 'Show'} NPC
        </button>
        {showNPC && renderCharacterList('NPC')}
      </div>
      <div>
        <h2>Creatures</h2>
        <button onClick={() => setShowCreature(!showCreature)}>
          {showCreature ? 'Hide' : 'Show'} Creature
        </button>
        {showCreature && renderCharacterList('Creature')}
      </div>
      <div>
        <button onClick={() => navigate('/create')}>Create Character</button>
      </div>
      <div>
        <button onClick={() => navigate('/groupsList')}>View Groups</button> {/* Dodano przycisk do przejścia do GroupList */}
      </div>
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default CharacterList;