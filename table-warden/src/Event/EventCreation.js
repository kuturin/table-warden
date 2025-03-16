import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EventCreation = ({ addEvent, characters = [], places = [] }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newEvent = {
      id: Date.now(),
      name,
      date,
      endDate: isMultiDay ? endDate : null,
      description,
      characterId: selectedCharacter || null,
      placeId: selectedPlace || null,
    };
    addEvent(newEvent);
    navigate('/eventsList');
  };

  return (
    <div>
      <h1>Create Event</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>
          <input type="checkbox" checked={isMultiDay} onChange={(e) => setIsMultiDay(e.target.checked)} />
          Multi-day Event
        </label>
      </div>
      {isMultiDay && (
        <div>
          <label>Ending Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
      )}
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <div>
        <label>Character:</label>
        <select value={selectedCharacter} onChange={(e) => setSelectedCharacter(e.target.value)}>
          <option value="">None</option>
          {characters.map(character => (
            <option key={character.id} value={character.id}>{character.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Place:</label>
        <select value={selectedPlace} onChange={(e) => setSelectedPlace(e.target.value)}>
          <option value="">None</option>
          {places.map(place => (
            <option key={place.id} value={place.id}>{place.name}</option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <button onClick={() => navigate('/eventsList')}>Cancel</button>
      </div>
    </div>
  );
};

export default EventCreation;