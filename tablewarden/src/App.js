import React, { useState, useEffect } from 'react';
import CampaignForm from './components/Campaigns/CampaignForm';
import CampaignList from './components/Campaigns/CampaignList';
import CharacterForm from './components/Characters/CharacterForm';
import CharacterList from './components/Characters/CharacterList';

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [characters, setCharacters] = useState([]);

  // Odczyt kampanii z Local Storage
  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    console.log('Odczytane kampanie z Local Storage:', storedCampaigns);
    setCampaigns(storedCampaigns);

    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    console.log('Odczytane postacie z Local Storage:', storedCharacters);
    setCharacters(storedCharacters);
  }, []);

  // Zapis kampanii do Local Storage
  useEffect(() => {
    if (campaigns.length > 0) {
      localStorage.setItem('campaigns', JSON.stringify(campaigns));
      console.log('Zapisane kampanie do Local Storage:', campaigns);
    }
  }, [campaigns]);

  // Zapis postaci do Local Storage
  useEffect(() => {
    if (characters.length > 0) {
      localStorage.setItem('characters', JSON.stringify(characters));
      console.log('Zapisane postacie do Local Storage:', characters);
    }
  }, [characters]);

  const handleSaveCampaign = (campaignName) => {
  const newCampaign = {
    id: Date.now(), // Unikalny identyfikator (timestamp)
    name: campaignName,
  };
  setCampaigns([...campaigns, newCampaign]);
};


  const handleAddCharacter = (characterName) => {
    if (characterName.trim() !== "") {
      const updatedCharacters = [...characters, characterName];
      setCharacters(updatedCharacters);
      console.log('Dodano postać:', characterName);
    } else {
      console.error('Nazwa postaci nie może być pusta.');
    }
  };

  return (
    <div>
      <h1>Table Warden</h1>
      <CampaignForm onSave={handleSaveCampaign} />
      <CampaignList campaigns={campaigns} />
      <CharacterForm onAddCharacter={handleAddCharacter} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
