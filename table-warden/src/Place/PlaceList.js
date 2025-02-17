import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const PlaceList = ({ places, removePlace }) => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/placesEdit/${id}`);
  };

  const handleView = (id) => {
    navigate(`/placesView/${id}`);
  };

  return (
    <div>
      <h1>Place List</h1>
      <ul>
        {places.map(place => (
          <li key={place.id}>
            {place.name} - Location: {place.location}
            <button onClick={() => handleView(place.id)}>View</button>
            <button onClick={() => handleEdit(place.id)}>Edit</button>
            <button onClick={() => removePlace(place.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate('/placesCreate')}>Create your place</button>
      </div>
      <div>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    </div>
  );
};

export default PlaceList;