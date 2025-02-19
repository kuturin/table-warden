import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const EventEdit = ({ events, updateEvent, characters, places }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(event => event.id === parseInt(id));

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [endDate, setEndDate] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  const [color, setColor] = useState('#000000'); // Dodaj pole koloru

  useEffect(() => {
    if (event) {
      setName(event.name);
      setDate(event.date);
      setDescription(event.description);
      setIsMultiDay(event.endDate !== null);
      setEndDate(event.endDate || '');
      setSelectedCharacter(event.characterId || '');
      setSelectedPlace(event.placeId || '');
      setColor(event.color || '#000000'); // Ustaw kolor
    }
  }, [event]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedEvent = {
      id: event.id,
      name,
      date,
      endDate: isMultiDay ? endDate : null,
      description,
      characterId: selectedCharacter || null,
      placeId: selectedPlace || null,
      color // Dodaj kolor do zaktualizowanego wydarzenia
    };
    updateEvent(updatedEvent);
    navigate('/eventsList');
  };

  return (
    <div>
      <h1>Edit Event</h1>
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
        <label>Color:</label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} /> {/* Dodaj pole wyboru koloru */}
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

export default EventEdit;