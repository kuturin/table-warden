import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceCreation = ({ addPlace, addEvent, characters }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState(null);
  const [description, setDescription] = useState('');
  const [creation, setCreation] = useState('');
  const [isDestroyed, setIsDestroyed] = useState(false);
  const [dateOfDestruction, setDateOfDestruction] = useState('');
  const [isRuled, setIsRuled] = useState(false);
  const [ruler, setRuler] = useState('');
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsDestroyed(event.target.checked);
  };

  const handleRulerCheckboxChange = (event) => {
    setIsRuled(event.target.checked);
  };

  const handleSave = () => {
    const newPlace = {
      id: Date.now(),
      name,
      age,
      photo,
      description,
      creation,
      isDestroyed,
      dateOfDestruction,
      isRuled,
      ruler,
    };
    addPlace(newPlace);

    const eventIdBase = Date.now();

    // Create creation event
    if (creation) {
      addEvent({
        id: eventIdBase + 1,
        name: `Creation of ${name}`,
        date: creation,
        description: `Creation of ${name}`,
        placeId: newPlace.id,
      });
    }

    // Create destruction event
    if (isDestroyed && dateOfDestruction) {
      addEvent({
        id: eventIdBase + 2,
        name: `Destruction of ${name}`,
        date: dateOfDestruction,
        description: `Destruction of ${name}`,
        placeId: newPlace.id,
      });
    }

    navigate('/placesList');
  };

  return (
    <div>
      <h1>Create Place</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <div>
        <label>Creation Date:</label>
        <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)} required />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isDestroyed} onChange={handleCheckboxChange} />
          Is Destroyed
        </label>
      </div>
      {isDestroyed && (
        <div>
          <label>Destruction Date:</label>
          <input type="date" value={dateOfDestruction} onChange={(e) => setDateOfDestruction(e.target.value)} required />
        </div>
      )}
      <div>
        <label>
          <input type="checkbox" checked={isRuled} onChange={handleRulerCheckboxChange} />
          Is Ruled
        </label>
      </div>
      {isRuled && (
        <div>
          <label>Ruler:</label>
          <select value={ruler} onChange={(e) => setRuler(e.target.value)} required>
            {characters.map(character => (
              <option key={character.id} value={character.name}>
                {character.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <button onClick={() => navigate('/placesList')}>Cancel</button>
      </div>
    </div>
  );
};

export default PlaceCreation;