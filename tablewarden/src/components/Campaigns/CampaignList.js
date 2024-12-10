import React from 'react';
import { Link } from 'react-router-dom';

const CampaignList = ({ campaigns = [], onDelete }) => {
  console.log('Received campaigns:', campaigns);

  return (
    <div>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index} className="item">
            <Link to={`/campaign/${campaign}`}><button>{campaign}</button></Link>
            <button className="delete-button" onClick={() => onDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
