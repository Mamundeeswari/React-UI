import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CampaignName.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faEye,faNetworkWired, faEnvelopeOpen, faEnvelopeOpenText, faPeopleArrows, faComment} from '@fortawesome/free-solid-svg-icons'
const eyeCount=5;
const networkCount=10;
const envelopeCount=15;
const envelopeOpenCount=20;
const peopleCount=25;
const envelopeOpenTextCount=30;
const commentCount=35;

class CampaignName extends Component {
  render() {
          return (
        <div data-testid="CampaignName">
          <div className="Campaignclr text-left px-3">{this.props.campaignHeading}</div>
          <div className="Textclr text-left mb-3 px-3">{this.props.campaignName}</div>
          <div className="container">
            <div className="row CampaignName">
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faEye}  /></div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faNetworkWired}/> </div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faEnvelope}  /></div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faEnvelopeOpen}  /></div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faPeopleArrows}  /></div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faEnvelopeOpenText}  /></div>
              <div  className="col-1 m-1"><FontAwesomeIcon icon={faComment}  /></div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div  className="col-1 m-1"> {eyeCount}</div>
              <div  className="col-1 m-1"> {networkCount}</div>
              <div  className="col-1 m-1">{envelopeCount}</div>
              <div  className="col-1 m-1">{envelopeOpenCount}</div>
              <div  className="col-1 m-1">{peopleCount}</div>
              <div  className="col-1 m-1">{envelopeOpenTextCount}</div>
              <div  className="col-1 m-1">{commentCount}</div>
            </div>
          </div>
        </div>
      )
    }
  };

CampaignName.propTypes = {
};

CampaignName.defaultProps = {
  campaignName : "CampaignName",
  campaignHeading: "CampaignHeading"
};

export default CampaignName;
