import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create">Create Character</Link>
        </li>
        <li>
          <Link to="/list">Go to characters' list</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;