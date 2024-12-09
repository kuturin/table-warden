import React, { useState } from 'react';

const WorldForm = ({ onAddWorld }) => {
  const [worldName, setWorldName] = useState('');

  const handleAdd = () => {
    console.log('Dodano świat:', worldName);
    onAddWorld(worldName);
    setWorldName('');
  };

  return (
    <div>
      <h3>Create World</h3>
      <input
        type="text"
        value={worldName}
        onChange={(e) => setWorldName(e.target.value)}
        placeholder="World name"
      />
      <button onClick={handleAdd}>Add</button> {/* Dodany przycisk "Add" */}
    </div>
  );
};

export default WorldForm;
