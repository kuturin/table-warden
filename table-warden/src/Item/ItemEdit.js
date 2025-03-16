import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemEdit = ({ items, updateItem }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find(item => item.id === parseInt(id));

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setDescription(item.description);
    }
  }, [item]);

  const handleSave = () => {
    const updatedItem = {
      id: item.id,
      name,
      description
    };
    updateItem(updatedItem);
    navigate('/itemsList');
  };

  return (
    <div>
      <h1>Edit Item</h1>
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

export default ItemEdit;