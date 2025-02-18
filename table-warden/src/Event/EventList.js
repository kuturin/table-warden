import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const EventList = ({ events, removeEvent }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/eventsEdit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/eventsView/${id}`);
  };

  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            {event.name} - Date: {event.date}
            {event.endDate && ` - ${event.endDate}`}
            <button onClick={() => handleView(event.id)}>View</button>
            <button onClick={() => handleEdit(event.id)}>Edit</button>
            <button onClick={() => removeEvent(event.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate('/eventsCreate')}>Create Event</button>
      </div>
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default EventList;