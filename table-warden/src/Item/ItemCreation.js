import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCreation = ({ addItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const newItem = {
      id: Date.now(),
      name,
      description
    };
    addItem(newItem);
    navigate('/itemsList');
  };

  return (
    <div>
      <h1>Create Item</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      </div>
      <div>
        <button onClick={handleSave}>Save</button>
      </div>
      <div>
        <button onClick={() => navigate('/itemsList')}>Cancel</button>
      </div>
    </div>
  );
};

export default ItemCreation;