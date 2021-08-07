import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from'../../asset/Newson.io_logo_rgb_neg.png'
import jumptronlogo from '../../asset/jumptronlogo.png'
import Menu from '../Menu/Menu'

const Header = () => (
  <div className="container-fluid " data-testid="Header">
      <div class="row Header justify-content-center">
        <div class="position-relative">
          <div class="position-absolute pt-4 h3 top-2 start-2">
            Lead Generation Hub
          </div>
        </div>
        <div class="col-4 h3 pt-4">
          <img src={Logo} className="figure-img img-fluid rounded rounded mx-auto d-block Imagesize" alt="..."/>
        </div>
      </div>
     
      <div class="container-fluid Textcolour">
        <img src={jumptronlogo} class="rounded mx-auto d-block jumptronimg" alt="..."/>
        <h2>Oliver's Lead Generation Hub<br/></h2>
        <p class="text-muted">Manage your account and information</p>
      </div>
      <Menu/>
  </div>
  
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
