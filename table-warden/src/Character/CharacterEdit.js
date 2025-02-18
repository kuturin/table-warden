import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const CharacterEdit = ({ characters, updateCharacter }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find(character => character.id === parseInt(id));

  const [name, setName] = useState('');
  const [category, setCategory] = useState('PC');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [birthday, setBirthday] = useState('');
  const [isDead, setIsDead] = useState(false);
  const [dateOfDeath, setDateOfDeath] = useState('');

  useEffect(() => {
    if (character) {
      setName(character.name);
      setCategory(character.category);
      setAge(character.age);
      setPhoto(character.photo);
      setDescription(character.description);
      setBirthday(character.birthday);
      setIsDead(character.isDead);
      setDateOfDeath(character.dateOfDeath);
    }
  }, [character]);

  const handleCheckboxChange = (event) => {
    setIsDead(event.target.checked);
  };

  const handleSave = () => {
    const updatedCharacter = {
      id: character.id,
      name,
      category,
      age,
      photo,
      description,
      birthday,
      isDead,
      dateOfDeath,
    };
    updateCharacter(updatedCharacter);
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
        <input type="checkbox" checked={isDead} onChange={handleCheckboxChange} /> Dead
      </div>
      {isDead && (
        <div>
          Date of Death: <input type="date" value={dateOfDeath} onChange={(e) => setDateOfDeath(e.target.value)} />
        </div>
      )}
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default CharacterEdit;