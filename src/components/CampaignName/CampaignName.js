import React from 'react';
import PropTypes from 'prop-types';
import './CampaignName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {faEye,faNetworkWired, faMailBulk} from '@fortawesome/free-solid-svg-icons'

const CampaignName = () => (
  <div className="CampaignName" data-testid="CampaignName">
    CampaignName Component 
    <FontAwesomeIcon icon={faEye}  />
    <FontAwesomeIcon icon={faNetworkWired}  />
    <FontAwesomeIcon icon={faMailBulk}  />
  </div>
);

CampaignName.propTypes = {};

CampaignName.defaultProps = {};

export default CampaignName;
