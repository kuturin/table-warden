import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <div>
          <button onClick={() => navigate('/list')}>Go to characters' list</button>
      </div>
      <div>
          <button onClick={() => navigate('/placesList')}>Go to places</button>
      </div>
      
    </nav>
  );
};

export default Menu;