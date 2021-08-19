import React from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import { Link } from 'react-router-dom';
import { Nav, NavDropdown, Navbar, Container, Alert } from "react-bootstrap";
import Menuitems from '../../asset/static/menu.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
const Menu = () => (
  <React.Fragment>
    <div className="container Textcolour">
  <Navbar collapseOnSelect expand="lg">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={window.location.pathname} variant="pills">
              <Nav.Item href="/">
                  <Nav.Link as={Link} to="/" eventKey="/Campaign" title="Campaign">
                      Campaign
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link as={Link} to="/YourPlans" title="Your Plan">
                      YourPlans
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link as={Link} to="/Reports"  title="Reports">
                      Report
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link as={Link} to="/Invoice" title="Invoice">
                      Invoices
              </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link as={Link} to="/MyAccount" title="My Account">
                      MyAccount
              </Nav.Link>
              </Nav.Item>
              
          </Nav>
      </Navbar.Collapse>
  </Navbar>
  </div>
</React.Fragment>
);

Menu.propTypes = {};

Menu.defaultProps = {};

export default Menu;
