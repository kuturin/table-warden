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
      <div>
        <button onClick={() => navigate('/eventsList')}>Go to events</button>
      </div>
      <div>
          <button onClick={() => navigate('/itemsList')}>Go to items</button>
      </div>
      
    </nav>
  );
};

export default Menu;