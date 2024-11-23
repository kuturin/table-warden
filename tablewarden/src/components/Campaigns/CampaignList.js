// src/components/Campaigns/CampaignList.js
import React from 'react';

const CampaignList = ({ campaigns }) => {
  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>{campaign}</li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
