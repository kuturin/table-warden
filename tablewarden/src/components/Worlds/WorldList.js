import React from 'react';
import { Link } from 'react-router-dom';

const WorldList = ({ worlds, onDelete }) => {
  return (
    <div>
      <h3>Worlds</h3>
      <ul>
        {worlds.map((world, index) => (
          <li key={index} className="item">
            <Link to={`/world/${world}`} className="world">{world}</Link>
            <button className="delete-button" onClick={() => {
              console.log('Usuwanie świata:', index);
              onDelete(index);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldList;
