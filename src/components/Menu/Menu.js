import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import Menuitems from '../../asset/static/menu.json'
const Menu = () => (
  <div className="Menu" data-testid="Menu">
    <nav class="navbar navbar-expand-lg border-bottom border-grey border-top ">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> 
  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Campaigns</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">Your plan</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Reports</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Invoice</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My account</a>
      </li>
    </ul>
  </div>
</nav>
  </div>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
