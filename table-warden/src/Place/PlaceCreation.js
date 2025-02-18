import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PlaceCreation = ({ addPlace, addEvent, characters }) => { // Dodano addEvent
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
      });
    }

     // Create destruction event
     if (isDestroyed && dateOfDestruction) {
      addEvent({
        id: eventIdBase + 2,
        name: `Destruction of ${name}`,
        date: dateOfDestruction,
        description: `Destruction of ${name}`,
      });
    }
    navigate('/placesList');
  };

  return (
    <div>
      <div>
        Place's Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        Place's Age: <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
        Place's picture: <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
      </div>
      <div>
        Place's Description: <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        Creation Date: <input type="date" value={creation} onChange={(e) => setCreation(e.target.value)} />
      </div>
      <div>
        <input type="checkbox" onChange={handleCheckboxChange} /> Destroyed
      </div>
      {isDestroyed && (
        <div>
          Destruction Date: <input type="date" value={dateOfDestruction} onChange={(e) => setDateOfDestruction(e.target.value)} />
        </div>
      )}
      <div>
        <input type="checkbox" onChange={handleRulerCheckboxChange} /> Is this place ruled by someone?
      </div>
      {isRuled && (
        <div>
          Ruler: 
          <select value={ruler} onChange={(e) => setRuler(e.target.value)}>
            <option value="">Select a character</option>
            {characters.map(character => (
              <option key={character.id} value={character.name}>{character.name}</option>
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