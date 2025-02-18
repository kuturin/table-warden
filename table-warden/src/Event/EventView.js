import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const EventView = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>Event Details</h1>
      <p>Name: {event.name}</p>
      <p>Date: {event.date}</p>
      {event.endDate && <p>Ending Date: {event.endDate}</p>}
      <p>Description: {event.description}</p>
      <div>
        <button onClick={() => navigate('/eventsList')}>Back to List</button>
      </div>
    </div>
  );
};

export default EventView;