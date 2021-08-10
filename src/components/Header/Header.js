import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Logo from'../../asset/Newson.io_logo_rgb_neg.png'
import jumptronlogo from '../../asset/jumptronlogo.png'
import Menu from '../Menu/Menu'

const Header = () => (
  <div className="container-fluid " data-testid="Header">
      <div className="row Header justify-content-center">
        <div className="position-relative">
          <div className="position-absolute pt-4 h3 top-2 start-2">
            Lead Generation Hub
          </div>
        </div>
        <div className="col-4 h3 pt-4">
          <img src={Logo} className="figure-img img-fluid rounded rounded mx-auto d-block Imagesize" alt="..."/>
        </div>
      </div>
     
      <div className="container-fluid Textcolour">
        <img src={jumptronlogo} class="text-center rounded mx-auto d-block jumptronimg" alt="..."/>
        <h2 className="text-center">Oliver's Lead Generation Hub<br/></h2>
        <p className="text-muted text-center">Manage your account and information</p>
      </div>
      <Menu/>
  </div>
  
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
