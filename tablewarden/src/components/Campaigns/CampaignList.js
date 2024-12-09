import React from 'react';

const CampaignList = ({ campaigns, onDelete }) => {
  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index} className="item">
            {campaign}
            <button className="delete-button" onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
