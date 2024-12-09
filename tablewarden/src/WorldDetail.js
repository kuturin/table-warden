import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import CharacterForm from './components/Characters/CharacterForm';
import CampaignForm from './components/Campaigns/CampaignForm';
import CharacterList from './components/Characters/CharacterList';
import CampaignList from './components/Campaigns/CampaignList';

const WorldDetail = ({ worlds, setWorlds, worldDescriptions, setWorldDescriptions }) => {
  const { worldName } = useParams();
  const [newWorldName, setNewWorldName] = useState(worldName);
  const [description, setDescription] = useState(worldDescriptions[worldName] || "");
  const [showTextarea, setShowTextarea] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [showCharacterForm, setShowCharacterForm] = useState(false);
  const [characters, setCharacters] = useState(() => {
    const storedCharacters = JSON.parse(localStorage.getItem(`${worldName}-characters`)) || [];
    return storedCharacters;
  });
  const [campaigns, setCampaigns] = useState(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem(`${worldName}-campaigns`)) || [];
    return storedCampaigns;
  });
  const navigate = useNavigate();

  useEffect(() => {
    setNewWorldName(worldName);
    setDescription(worldDescriptions[worldName] || "");
  }, [worldName, worldDescriptions]);

  const handleSaveName = () => {
    if (newWorldName.trim() !== "" && newWorldName !== worldName) {
      const updatedWorlds = worlds.map(world => world === worldName ? newWorldName : world);
      setWorlds(updatedWorlds);

      const updatedDescriptions = {
        ...worldDescriptions,
        [newWorldName]: worldDescriptions[worldName]
      };
      delete updatedDescriptions[worldName];
      setWorldDescriptions(updatedDescriptions);

      localStorage.setItem('worlds', JSON.stringify(updatedWorlds));
      localStorage.setItem('worldDescriptions', JSON.stringify(updatedDescriptions));

      navigate(`/world/${newWorldName}`);
    }
    setShowInput(false); // Ukryj pole tekstowe i przycisk po zapisaniu nazwy
  };

  const handleSaveDescription = () => {
    const updatedDescriptions = {
      ...worldDescriptions,
      [worldName]: description
    };
    setWorldDescriptions(updatedDescriptions);
    localStorage.setItem('worldDescriptions', JSON.stringify(updatedDescriptions));
    setShowTextarea(false); // Ukryj pole tekstowe i przycisk po zapisaniu opisu
  };

  const handleDeleteWorld = () => {
    const updatedWorlds = worlds.filter(world => world !== worldName);
    setWorlds(updatedWorlds);

    const updatedDescriptions = { ...worldDescriptions };
    delete updatedDescriptions[worldName];
    setWorldDescriptions(updatedDescriptions);

    localStorage.setItem('worlds', JSON.stringify(updatedWorlds));
    localStorage.setItem('worldDescriptions', JSON.stringify(updatedDescriptions));

    navigate('/');
  };

  const handleAddCharacter = (characterName) => {
    const updatedCharacters = [...characters, characterName];
    setCharacters(updatedCharacters);
    localStorage.setItem(`${worldName}-characters`, JSON.stringify(updatedCharacters));
  };

  const handleDeleteCharacter = (index) => {
    const updatedCharacters = characters.filter((_, i) => i !== index);
    setCharacters(updatedCharacters);
    localStorage.setItem(`${worldName}-characters`, JSON.stringify(updatedCharacters));
  };

  const handleAddCampaign = (campaignName) => {
    const updatedCampaigns = [...campaigns, campaignName];
    setCampaigns(updatedCampaigns);
    localStorage.setItem(`${worldName}-campaigns`, JSON.stringify(updatedCampaigns));
  };

  const handleDeleteCampaign = (index) => {
    const updatedCampaigns = campaigns.filter((_, i) => i !== index);
    setCampaigns(updatedCampaigns);
    localStorage.setItem(`${worldName}-campaigns`, JSON.stringify(updatedCampaigns));
  };

  return (
    <div>
      {showInput ? (
        <>
          <input
            type="text"
            value={newWorldName}
            onChange={(e) => setNewWorldName(e.target.value)}
            placeholder="New world name"
          />
          <button onClick={handleSaveName}>Save Name</button>
        </>
      ) : (
        <h3 onClick={() => setShowInput(true)}>{worldName}</h3>
      )}
      {showTextarea ? (
        <>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="World description"
          />
          <button onClick={handleSaveDescription}>Save Description</button>
        </>
      ) : (
        <p onClick={() => setShowTextarea(true)}>{description || "Click to add description"}</p>
      )}
      <h2 onClick={() => setShowCharacterForm(!showCharacterForm)}>Characters</h2>
      {showCharacterForm && <CharacterForm onAddCharacter={handleAddCharacter} />}
      <CharacterList characters={characters} onDelete={handleDeleteCharacter} />
      <CampaignForm onSave={handleAddCampaign} />
      <CampaignList campaigns={campaigns} onDelete={handleDeleteCampaign} />
      <button onClick={handleDeleteWorld}>Delete World</button>
      <br></br>
      <Link to="/"><button>Back to World List</button></Link>
    </div>
  );
};

export default WorldDetail;