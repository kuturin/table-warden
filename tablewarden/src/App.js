import React, { useState, useEffect } from 'react';
import CampaignForm from './components/Campaigns/CampaignForm';
import CampaignList from './components/Campaigns/CampaignList';
import CharacterForm from './components/Characters/CharacterForm';
import CharacterList from './components/Characters/CharacterList';
import WorldForm from './components/Worlds/WorldForm';
import WorldList from './components/Worlds/WorldList';

const App = () => {
  const [campaigns, setCampaigns] = useState(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    console.log('Inicjalizacja kampanii z Local Storage:', storedCampaigns);
    return storedCampaigns;
  });
  const [characters, setCharacters] = useState(() => {
    const storedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
    console.log('Inicjalizacja postaci z Local Storage:', storedCharacters);
    return storedCharacters;
  });
  const [worlds, setWorlds] = useState(() => {
    const storedWorlds = JSON.parse(localStorage.getItem('worlds')) || [];
    console.log('Inicjalizacja światów z Local Storage:', storedWorlds);
    return storedWorlds;
  });

  // Zapis danych do Local Storage
  useEffect(() => {
    console.log('Zapisywanie danych do Local Storage');
    console.log('Kampanie:', campaigns);
    console.log('Postacie:', characters);
    console.log('Światy:', worlds);

    localStorage.setItem('campaigns', JSON.stringify(campaigns));
    localStorage.setItem('characters', JSON.stringify(characters));
    localStorage.setItem('worlds', JSON.stringify(worlds));
  }, [campaigns, characters, worlds]);

  const handleSaveCampaign = (campaignName) => {
    if (campaignName.trim() !== "") {
      const updatedCampaigns = [...campaigns, campaignName];
      setCampaigns(updatedCampaigns);
      console.log('Kampanie po dodaniu:', updatedCampaigns);
    } else {
      console.error('Nazwa kampanii nie może być pusta.');
    }
  };

  const handleAddCharacter = (characterName) => {
    if (characterName.trim() !== "") {
      const updatedCharacters = [...characters, characterName];
      setCharacters(updatedCharacters);
      console.log('Postacie po dodaniu:', updatedCharacters);
    } else {
      console.error('Nazwa postaci nie może być pusta.');
    }
  };

  const handleAddWorld = (worldName) => {
    if (worldName.trim() !== "") {
      const updatedWorlds = [...worlds, worldName];
      setWorlds(updatedWorlds);
      console.log('Światy po dodaniu:', updatedWorlds);
    } else {
      console.error('Nazwa świata nie może być pusta.');
    }
  };

  const handleDeleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
    console.log('Kampanie po usunięciu:', updatedCampaigns);
  };

  const handleDeleteCharacter = (index) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
    console.log('Postacie po usunięciu:', updatedCharacters);
  };

  const handleDeleteWorld = (index) => {
    const updatedWorlds = worlds.filter((_, i) => i !== index);
    setWorlds(updatedWorlds);
    console.log('Światy po usunięciu:', updatedWorlds);
  };

  return (
    <div>
      <h1>Table Warden</h1>
      <CampaignForm onSave={handleSaveCampaign} />
      <CampaignList campaigns={campaigns} onDelete={handleDeleteCampaign} />
      <CharacterForm onAddCharacter={handleAddCharacter} />
      <CharacterList characters={characters} onDelete={handleDeleteCharacter} />
      <WorldForm onAddWorld={handleAddWorld} />
      <WorldList worlds={worlds} onDelete={handleDeleteWorld} />
    </div>
  );
};

export default App;
