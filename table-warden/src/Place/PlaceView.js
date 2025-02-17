import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const PlaceView = ({ places }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find(place => place.id === parseInt(id));

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <h1>Place Details</h1>
      <p>Name: {place.name}</p>
      <p>Age: {place.age}</p>
      <p>Description: {place.description}</p>
      <p>Creation Date: {place.creation}</p>
      <p>Status: {place.isDestroyed ? 'Destroyed' : 'Safe'}</p>
      {place.isDestroyed && <p>Destruction Date: {place.dateOfDestruction}</p>}
      <p>Ruled by: {place.isRuled ? place.ruler : 'No one'}</p>
      <div>
        <button onClick={() => navigate('/placesList')}>Back to List</button>
      </div>
    </div>
  );
};

export default PlaceView;