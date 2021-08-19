import React from 'react';
import PropTypes from 'prop-types';
import './Invoices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faDownload } from '@fortawesome/free-solid-svg-icons'

const Invoices = () => (
  <div className="Invoices" data-testid="Invoices">
    <div className="h3 border-bottom border-grey m-4 p-10">Your Invoices</div>
    <div className="container m-8 text-center p-2 Invoices">
    <div className="row p-1">
      <div className="col h5">Description</div>
      <div className="col h5">Amount</div>
      <div className="col h5">Status</div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
    <div className="row p-2">
      <div className="col">July 2021 Activity</div>
      <div className="col">GBP 495</div>
      <div className="col">Approved</div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Review Invoice</a></div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>Download PDF</a></div>
    </div>
    <div className="row p-2">
      <div className="col">June 2021 Activity</div>
      <div className="col">GBP 495</div>
      <div className="col">Approved</div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Review Invoice</a></div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>Download PDF</a></div>
    </div>
    <div className="row p-2">
      <div className="col">May 2021 Activity</div>
      <div className="col">GBP 495</div>
      <div className="col">Approved</div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>Review Invoice</a></div>
      <div className="col"><a href="" className="primary-link"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>Download PDF</a></div>
    </div>
  </div>
  </div>
);

Invoices.propTypes = {};

Invoices.defaultProps = {};

export default Invoices;
