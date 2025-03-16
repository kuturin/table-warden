import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemView = ({ items }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <div>
        <button onClick={() => navigate(`/itemsEdit/${item.id}`)}>Edit</button>
        <button onClick={() => navigate('/itemsList')}>Back to List</button>
      </div>
    </div>
  );
};

export default ItemView;