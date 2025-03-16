import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CharacterCreation = ({ addCharacter, addEvent }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('PC');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isDead, setIsDead] = useState(false);
  const [dateOfDeath, setDateOfDeath] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsDead(event.target.checked);
  };

  const handleSave = () => {
    const newCharacter = {
      id: Date.now(),
      name,
      age,
      photo,
      description,
      birthday,
      isDead,
      dateOfDeath,
      category,
    };
    addCharacter(newCharacter);

    const eventIdBase = Date.now();

    // Create birthday event
    if (birthday) {
      addEvent({
        id: eventIdBase + 1,
        name: `Birthday of ${name}`,
        date: birthday,
        description: `Birthday of ${name}`,
        characterId: newCharacter.id,
      });
    }

    // Create death event
    if (isDead && dateOfDeath) {
      addEvent({
        id: eventIdBase + 2,
        name: `Death of ${name}`,
        date: dateOfDeath,
        description: `Death of ${name}`,
        characterId: newCharacter.id,
      });
    }

    navigate('/list');
  };

  return (
    <div>
      <div>
        Character's Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="PC">PC</option>
          <option value="NPC">NPC</option>
          <option value="Creature">Creature</option>
        </select>
      </div>
      <div>
        Character's Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        Character's Picture: <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </div>
      <div>
        Character's Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        Birthday: <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" onChange={handleCheckboxChange} /> Dead
      </div>
      {isDead && (
        <div>
          Date of Death: <input type="date" value={dateOfDeath} onChange={(e) => setDateOfDeath(e.target.value)} />
        </div>
      )}
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <button onClick={() => navigate('/list')}>Cancel</button>
      </div>
    </div>
  );
};

export default CharacterCreation;