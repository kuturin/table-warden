import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const EventCreation = ({ addEvent }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [isMultiDay, setIsMultiDay] = useState(false);
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newEvent = {
      id: Date.now(),
      name,
      date,
      endDate: isMultiDay ? endDate : null,
      description,
    };
    addEvent(newEvent);
    navigate('/eventsList');
  };

  return (
    <div>
      <h1>Create Event</h1>
      <form onSubmit={handleSave}>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EventCreation;