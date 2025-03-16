import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList = ({ items, removeItem }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <button onClick={() => navigate(`/itemsEdit/${item.id}`)}>Edit</button>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => navigate('/itemsCreate')}>Create New Item</button>
      </div>
    </div>
  );
};

export default ItemList;