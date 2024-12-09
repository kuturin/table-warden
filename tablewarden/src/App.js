import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Sprawdź import komponentu Home
import WorldDetail from './WorldDetail'; // Sprawdź import komponentu WorldDetail

const App = () => {
  const [worlds, setWorlds] = useState(() => {
    const storedWorlds = JSON.parse(localStorage.getItem('worlds')) || [];
    return storedWorlds;
  });

  const [worldDescriptions, setWorldDescriptions] = useState(() => {
    const storedDescriptions = JSON.parse(localStorage.getItem('worldDescriptions')) || {};
    return storedDescriptions;
  });

  useEffect(() => {
    localStorage.setItem('worlds', JSON.stringify(worlds));
    localStorage.setItem('worldDescriptions', JSON.stringify(worldDescriptions));
  }, [worlds, worldDescriptions]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home worlds={worlds} setWorlds={setWorlds} />} />
        <Route path="/world/:worldName" element={<WorldDetail worlds={worlds} setWorlds={setWorlds} worldDescriptions={worldDescriptions} setWorldDescriptions={setWorldDescriptions} />} />
      </Routes>
    </Router>
  );
};

export default App;
