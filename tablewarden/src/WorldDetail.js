import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import CharacterForm from './components/Characters/CharacterForm';
import CharacterList from './components/Characters/CharacterList';
import CampaignForm from './components/Campaigns/CampaignForm';
import CampaignList from './components/Campaigns/CampaignList';

const WorldDetail = ({ worlds, setWorlds, worldDescriptions, setWorldDescriptions }) => {
  const { worldName } = useParams();
  const navigate = useNavigate();
  const [newWorldName, setNewWorldName] = useState(worldName);
  const [description, setDescription] = useState('');
  const [descriptions, setDescriptions] = useState(() => {
    const storedDescriptions = worldDescriptions[worldName];
    return Array.isArray(storedDescriptions) ? storedDescriptions : [];
  });
  const [characters, setCharacters] = useState(() => JSON.parse(localStorage.getItem(`characters-${worldName}`)) || []);
  const [campaigns, setCampaigns] = useState(() => JSON.parse(localStorage.getItem(`campaigns-${worldName}`)) || []);
  const [isEditingName, setIsEditingName] = useState(false);

  useEffect(() => {
    localStorage.setItem(`characters-${newWorldName}`, JSON.stringify(characters));
    localStorage.setItem(`campaigns-${newWorldName}`, JSON.stringify(campaigns));
    if (newWorldName !== worldName) {
      localStorage.removeItem(`characters-${worldName}`);
      localStorage.removeItem(`campaigns-${worldName}`);
    }
  }, [characters, campaigns, newWorldName]);

  useEffect(() => {
    setWorldDescriptions((prevDescriptions) => ({
      ...prevDescriptions,
      [newWorldName]: descriptions
    }));
    localStorage.setItem('worldDescriptions', JSON.stringify({
      ...worldDescriptions,
      [newWorldName]: descriptions
    }));
  }, [descriptions, newWorldName, setWorldDescriptions]);

  const handleAddCharacter = (characterName) => {
    setCharacters([...characters, characterName]);
  };

  const handleSaveCampaign = (campaignName) => {
    setCampaigns([...campaigns, campaignName]);
  };

  const handleAddDescription = () => {
    if (description.trim()) {
      setDescriptions([...descriptions, description]);
      setDescription('');
    }
  };

  const handleDeleteDescription = (index) => {
    const updatedDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(updatedDescriptions);
  };

  const handleChangeWorldName = () => {
    const updatedWorlds = worlds.map((world) => (world === worldName ? newWorldName : world));
    setWorlds(updatedWorlds);
    setIsEditingName(false); // Zakończ tryb edycji po zapisaniu
    navigate(`/world/${newWorldName}`, { replace: true });
  };

  const handleNameClick = () => {
    setIsEditingName(true);
  };

  const handleDeleteWorld = () => {
    const updatedWorlds = worlds.filter(world => world !== worldName);
    setWorlds(updatedWorlds);
    localStorage.setItem('worlds', JSON.stringify(updatedWorlds));
    localStorage.removeItem(`characters-${worldName}`);
    localStorage.removeItem(`campaigns-${worldName}`);
    localStorage.removeItem(`worldDescriptions`);
    navigate('/', { replace: true });
  };

  return (
    <div>
      <h2 onClick={handleNameClick} style={{ cursor: 'pointer' }}>{worldName}</h2>
      {isEditingName && (
        <div>
          <input 
            type="text" 
            value={newWorldName} 
            onChange={(e) => setNewWorldName(e.target.value)} 
            placeholder="Change World Name" 
          />
          <button onClick={handleChangeWorldName}>Save</button>
        </div>
      )}
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add Description"
      />
      <button onClick={handleAddDescription}>Add</button>
      <ul>
        {descriptions.map((desc, index) => (
          <li key={index}>
            {desc}
            <button onClick={() => handleDeleteDescription(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <CharacterForm onAddCharacter={handleAddCharacter} />
      <CharacterList characters={characters} onDelete={(index) => setCharacters(characters.filter((_, i) => i !== index))} />
      <CampaignForm onSave={handleSaveCampaign} />
      <CampaignList campaigns={campaigns} onDelete={(index) => setCampaigns(campaigns.filter((_, i) => i !== index))} />
      <div>
        <Link to="/">Back to Worlds</Link>
      </div>
      <button onClick={handleDeleteWorld}>Delete World</button>
    </div>
  );
};

export default WorldDetail;
