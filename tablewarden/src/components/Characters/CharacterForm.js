import React, { useState } from 'react';

const CharacterForm = ({ onAddCharacter }) => {
  const [characterName, setCharacterName] = useState('');

  const handleAdd = () => {
    onAddCharacter(characterName);
    setCharacterName('');
  };

  return (
    <div>
      <input
        type="text"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        placeholder="Character name"
      />
      <button onClick={handleAdd}>Add</button> {/* Dodany przycisk "Add" */}
    </div>
  );
};

export default CharacterForm;
