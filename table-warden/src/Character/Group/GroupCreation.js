import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GroupCreation = ({ addGroup, characters }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const navigate = useNavigate();

  const handleSave = () => {
    const newGroup = {
      id: Date.now(),
      name,
      description,
      characters: selectedCharacters
    };
    addGroup(newGroup);
    navigate('/groupsList');
  };

  const handleCharacterSelection = (characterId) => {
    setSelectedCharacters((prev) =>
      prev.includes(characterId)
        ? prev.filter((id) => id !== characterId)
        : [...prev, characterId]
    );
  };

  return (
    <div>
      <h1>Create Group</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Group Name"
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Group Description"
          required
        />
      </div>
      <div>
        <h3>Select Characters:</h3>
        {characters.map((character) => (
          <div key={character.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedCharacters.includes(character.id)}
                onChange={() => handleCharacterSelection(character.id)}
              />
              {character.name}
            </label>
          </div>
        ))}
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => navigate('/groupsList')}>Cancel</button>
      </div>
    </div>
  );
};

export default GroupCreation;