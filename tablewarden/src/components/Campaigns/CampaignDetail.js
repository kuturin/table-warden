import React from 'react';
import { useParams } from 'react-router-dom';

const CampaignDetail = () => {
  const { campaignName } = useParams();

  return (
    <div>
      <h2>Campaign: {campaignName}</h2>
      {/* Dodaj szczegóły kampanii tutaj */}
    </div>
  );
};

export default CampaignDetail;
