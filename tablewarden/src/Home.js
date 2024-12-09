import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ worlds, setWorlds }) => {
  const handleAddWorld = (worldName) => {
    if (worldName.trim() !== "") {
      setWorlds([...worlds, worldName]);
    }
  };

  const handleDeleteWorld = (worldName) => {
    const updatedWorlds = worlds.filter(world => world !== worldName);
    setWorlds(updatedWorlds);
    localStorage.setItem('worlds', JSON.stringify(updatedWorlds));
  };

  return (
    <div>
      <h3>Worlds</h3>
      <ul>
        {worlds.map((world, index) => (
          <li key={index}>
            <Link to={`/world/${world}`}>{world}</Link>
            <button onClick={() => handleDeleteWorld(world)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New World"
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleAddWorld(e.target.value);
        }}
      />
    </div>
  );
};

export default Home;
