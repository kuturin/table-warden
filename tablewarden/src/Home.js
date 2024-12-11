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
          <li key={index} className="item">
            <Link to={`/world/${world}`}><button>{world}</button></Link>
            <button className="delete-button" onClick={() => handleDeleteWorld(world)}>X</button>
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
