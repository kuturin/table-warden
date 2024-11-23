import React, { useState } from 'react';

const CampaignForm = ({ onSave }) => {
  const [campaignName, setCampaignName] = useState('');

  const handleSave = () => {
    onSave(campaignName);
    setCampaignName('');
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <input
        type="text"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        placeholder="Campaign name"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default CampaignForm;