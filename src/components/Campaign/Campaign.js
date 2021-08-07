import React from 'react';
import PropTypes from 'prop-types';
import './Campaign.css';
import Graph from '../Graph/Graph';

const Campaign = () => (
  <div className="Campaign" data-testid="Campaign">
    Campaign Component
    <Graph/>
  </div>
);

Campaign.propTypes = {};

Campaign.defaultProps = {};

export default Campaign;
