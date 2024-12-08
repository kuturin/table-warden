import React from 'react';

const CampaignList = ({ campaigns, onDelete }) => {
  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>
            {campaign}
            <button onClick={() => {
              console.log('Usuwanie kampanii:', index);
              onDelete(index);
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
