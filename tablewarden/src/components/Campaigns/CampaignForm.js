import React, { useState } from 'react';

const CampaignForm = ({ onSave }) => {
  const [campaignName, setCampaignName] = useState('');

  const handleSave = () => {
    onSave(campaignName);
    setCampaignName('');
  };

  return (
    <div>
      <input
        type="text"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        placeholder="Campaign name"
      />
      <button onClick={handleSave}>Add</button> {/* Dodany przycisk "Save" */}
    </div>
  );
};

export default CampaignForm;
