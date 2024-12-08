import React from 'react';

const WorldList = ({ worlds, onDelete }) => {
  return (
    <div>
      <h3>Worlds</h3>
      <ul>
        {worlds.map((world, index) => (
          <li key={index}>
            {world}
            <button onClick={() => {
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
