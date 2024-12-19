import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CharacterDetail = ({ characters }) => {
  const navigate = useNavigate();
  const { characterId } = useParams();
  const [character, setCharacter] = useState(() => {
    return characters.find(char => char.id === characterId) || {};
  });
  const [newCharacterName, setNewCharacterName] = useState(character.name || '');
  const [description, setDescription] = useState(character.description || '');
  const [showInput, setShowInput] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);

  useEffect(() => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    const foundCharacter = storedCharacters.find(char => char.id === characterId);
    if (foundCharacter) {
      setCharacter(foundCharacter);
      setNewCharacterName(foundCharacter.name);
      setDescription(foundCharacter.description);
    }
  }, [characterId]);

  const handleSaveName = () => {
    if (newCharacterName.trim() !== "" && character) {
      const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
      const updatedCharacters = storedCharacters.map(char => 
        char.id === characterId ? { ...char, name: newCharacterName } : char
      );
      setCharacter({ ...character, name: newCharacterName });
      localStorage.setItem('characters', JSON.stringify(updatedCharacters));
      setShowInput(false);
    }
  };

  const handleSaveDescription = () => {
    if (character) {
      const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
      const updatedCharacters = storedCharacters.map(char => 
        char.id === characterId ? { ...char, description } : char
      );
      setCharacter({ ...character, description });
      localStorage.setItem('characters', JSON.stringify(updatedCharacters));
      setShowTextarea(false);
    }
  };

  if (!character) {
    return <p>Character not found</p>;
  }

  return (
    <div>
      {showInput ? (
        <>
          <input
            type="text"
            value={newCharacterName}
            onChange={(e) => setNewCharacterName(e.target.value)}
            placeholder="New character name"
          />
          <button onClick={handleSaveName}>Save Name</button>
        </>
      ) : (
        <h3 onClick={() => setShowInput(true)}>{character.name}</h3>
      )}
      {showTextarea ? (
        <>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Character description"
          />
          <button onClick={handleSaveDescription}>Save Description</button>
        </>
      ) : (
        <p onClick={() => setShowTextarea(true)}>{description || "Click to add description"}</p>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default CharacterDetail;