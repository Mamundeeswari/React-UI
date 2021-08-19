import React from 'react';
import PropTypes from 'prop-types';
import './MyAccount.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGreaterThan, faCreditCard, faCalendar} from '@fortawesome/free-solid-svg-icons'

const MyAccount = () => (
  <div className="MyAccount" data-testid="MyAccount">
    <div className="container MyAccount">
      <div className="h3 mt-5 border-bottom border-grey">
        Your Personal Details
        </div>
      <div className="row">
        <div className="col fw-bold">Title</div>
        <div className="col">Mr</div>
        <div className="col"><a href="#"><FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>Edit Personal Details</a></div>
      </div>
      <div className="row">
        <div className="col fw-bold">First Name</div>
        <div className="col">Oliver</div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col fw-bold">Last Name</div>
        <div className="col">McVey</div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col fw-bold">Date of Birth</div>
        <div className="col">03/03/1999</div>
        <div className="col"></div>
      </div>
      </div>
      <div className="container p-2">
      <div className="h3 mt-3 border-bottom border-grey">
        Your Newson ID Details
        </div>
        <div>These are the details you use to login to your Newson Account. Your Newson ID is also the contact email we will use to tell you your bill is ready</div>
      <div className="row">
        <div className="col fw-bold">Newson ID</div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col fw-bold">User Name</div>
        <div className="col">oliver@newson.io</div>
        <div className="col"></div>
        <div className="col"><a href="#"><FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>Edit Username</a></div>
      </div>
      <div className="row">
        <div className="col fw-bold">Password</div>
        <div className="col">*******</div>
        <div className="col"></div>
        <div className="col"><a href="#"><FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>Edit Password</a></div>
      </div>
      </div>
      <div className="container p-2">
      <div className="h3 mt-3 border-bottom border-grey">
        Billing
        </div>
      <div className="row">
        <div className="col fw-bold"><FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon> Payment Details</div>
        <div className="col">Account Holder Name</div>
        <div className="col">MR O D MCVEY</div>
        <div className="col"><a href="#"><FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>Change Bank Details</a></div>
      </div>
      <div className="row">
      <div className="col"></div>
        <div className="col">Bank Account Number</div>
        <div className="col">12345678</div>
        <div className="col"></div>
      </div>
      <div className="row">
      <div className="col"></div>
        <div className="col">Sort Code</div>
        <div className="col">01-02-03</div>
        <div className="col"></div>
      </div>
      <div className="row mt-3">
        <div className="col fw-bold"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> Payment Date</div>
        <div className="col">18th of each month(or just after that)</div>
        <div className="col"></div>
        <div className="col"><a href="#"><FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>Change Payment Date</a></div>
      </div>
    </div>
  </div>
);

MyAccount.propTypes = {};

MyAccount.defaultProps = {};

export default MyAccount;
