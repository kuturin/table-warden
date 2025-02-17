import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';

const PlaceEdit = ({ places, updatePlace, characters }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const placeToEdit = places.find(place => place.id === parseInt(id));
    if (placeToEdit) {
      setPlace(placeToEdit);
    }
  }, [id, places]);

  const handleSave = () => {
    updatePlace(place);
    navigate('/placesList');
  };

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <h1>Edit Place</h1>
      <div>
        Name: <input type="text" value={place.name} onChange={(e) => setPlace({ ...place, name: e.target.value })} />
      </div>
      <div>
        Age: <input type="number" value={place.age} onChange={(e) => setPlace({ ...place, age: e.target.value })} />
      </div>
      <div>
        Description: <textarea value={place.description} onChange={(e) => setPlace({ ...place, description: e.target.value })} />
      </div>
      <div>
        Creation Date: <input type="date" value={place.creation} onChange={(e) => setPlace({ ...place, creation: e.target.value })} />
      </div>
      <div>
        <input type="checkbox" checked={place.isDestroyed} onChange={(e) => setPlace({ ...place, isDestroyed: e.target.checked })} /> Destroyed
      </div>
      {place.isDestroyed && (
        <div>
          Destruction Date: <input type="date" value={place.dateOfDestruction} onChange={(e) => setPlace({ ...place, dateOfDestruction: e.target.value })} />
        </div>
      )}
      <div>
        <input type="checkbox" checked={place.isRuled} onChange={(e) => setPlace({ ...place, isRuled: e.target.checked })} /> Is this place ruled by someone?
      </div>
      {place.isRuled && (
        <div>
          Ruler: 
          <select value={place.ruler} onChange={(e) => setPlace({ ...place, ruler: e.target.value })}>
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

export default PlaceEdit;