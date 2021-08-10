import React from 'react';
import PropTypes from 'prop-types';
import './Campaign.css';
import Graph from '../Graph/Graph';
import CampaignName from '../CampaignName/CampaignName'

const Campaign = () => (
  <div className="Campaign" data-testid="Campaign">
    <Graph/>
    <div className="container">
      <div className="row">
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 1 Name" campaignHeading="Invite to Connect"/>
        </div>
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 2 Name" campaignHeading="Invite to Connect"/>
        </div>
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 1 Name" campaignHeading="InMail"/>
        </div>
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 2 Name" campaignHeading="InMail"/>
        </div>
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 1 Name" campaignHeading="EMail"/>
        </div>
        <div className="Width m-3">
          <CampaignName campaignName="Campaign 2 Name" campaignHeading="EMail"/>
        </div>
      </div>
    </div>
  </div>
);

Campaign.propTypes = {};

Campaign.defaultProps = {};

export default Campaign;
