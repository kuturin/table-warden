import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CampaignDetail = ({ campaigns, setCampaigns }) => {
  const navigate = useNavigate();
  const { campaignId } = useParams();
  const [campaign, setCampaign] = useState(() => {
    return campaigns.find(camp => camp.id === campaignId) || {};
  });
  const [newCampaignName, setNewCampaignName] = useState(campaign.name || '');
  const [description, setDescription] = useState(campaign.description || '');
  const [showInput, setShowInput] = useState(false);
  const [showTextarea, setShowTextarea] = useState(false);

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
    const foundCampaign = storedCampaigns.find(camp => camp.id === campaignId);
    if (foundCampaign) {
      setCampaign(foundCampaign);
      setNewCampaignName(foundCampaign.name);
      setDescription(foundCampaign.description);
    }
  }, [campaignId]);

  const handleSaveName = () => {
    if (newCampaignName.trim() !== "" && campaign) {
      const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
      const updatedCampaigns = storedCampaigns.map(camp => 
        camp.id === campaignId ? { ...camp, name: newCampaignName } : camp
      );
      setCampaign({ ...campaign, name: newCampaignName });
      setCampaigns(updatedCampaigns);
      localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
      setShowInput(false);
    }
  };

  const handleSaveDescription = () => {
    if (campaign) {
      const storedCampaigns = JSON.parse(localStorage.getItem('campaigns')) || [];
      const updatedCampaigns = storedCampaigns.map(camp => 
        camp.id === campaignId ? { ...camp, description } : camp
      );
      setCampaign({ ...campaign, description });
      setCampaigns(updatedCampaigns);
      localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));
      setShowTextarea(false);
    }
  };

  if (!campaign) {
    return <p>Campaign not found</p>;
  }

  return (
    <div>
      {showInput ? (
        <>
          <input
            type="text"
            value={newCampaignName}
            onChange={(e) => setNewCampaignName(e.target.value)}
            placeholder="New campaign name"
          />
          <button onClick={handleSaveName}>Save Name</button>
        </>
      ) : (
        <h3 onClick={() => setShowInput(true)}>{campaign.name}</h3>
      )}
      {showTextarea ? (
        <>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Campaign description"
          />
          <button onClick={handleSaveDescription}>Save Description</button>
        </>
      ) : (
        <p onClick={() => setShowTextarea(true)}>{description || "Click to add description"}</p>
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default CampaignDetail;