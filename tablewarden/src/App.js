import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import WorldDetail from './components/Worlds/WorldDetail';
import CharacterDetail from './components/Characters/CharacterDetail';
import CampaignDetail from './components/Campaigns/CampaignDetail';
import './App.css';

const App = () => {
  const [worlds, setWorlds] = useState(() => {
    const storedWorlds = JSON.parse(localStorage.getItem('worlds')) || [];
    return storedWorlds;
  });

  const [worldDescriptions, setWorldDescriptions] = useState(() => {
    const storedDescriptions = JSON.parse(localStorage.getItem('worldDescriptions')) || {};
    return storedDescriptions;
  });

  const [characters, setCharacters] = useState(() => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    return storedCharacters;
  });

  const [campaigns, setCampaigns] = useState(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    return storedCampaigns;
  });

  useEffect(() => {
    localStorage.setItem('worlds', JSON.stringify(worlds));
    localStorage.setItem('worldDescriptions', JSON.stringify(worldDescriptions));
    localStorage.setItem('characters', JSON.stringify(characters));
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [worlds, worldDescriptions, characters, campaigns]);

  return (
    <Router>
      <div className="grid-container">
        <div className="sidebar"></div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home worlds={worlds} setWorlds={setWorlds} />} />
            <Route path="/world/:worldName" element={<WorldDetail worlds={worlds} setWorlds={setWorlds} worldDescriptions={worldDescriptions} setWorldDescriptions={setWorldDescriptions} />} />
            <Route path="/character/:characterId" element={<CharacterDetail characters={characters} />} />
            <Route path="/campaign/:campaignId" element={<CampaignDetail campaigns={campaigns} setCampaigns={setCampaigns} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;