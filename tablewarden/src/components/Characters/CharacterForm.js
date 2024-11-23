import React, { useState } from 'react';

const CharacterForm = ({ onAddCharacter }) => {
  const [characterName, setCharacterName] = useState('');

  const handleAdd = () => {
    onAddCharacter(characterName);
    setCharacterName('');
  };

  return (
    <div>
      <h3>Add a Character</h3>
      <input
        type="text"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
        placeholder="Character name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default CharacterForm;
