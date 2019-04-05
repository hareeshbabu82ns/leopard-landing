import React from 'react';
import { Navbar } from 'react-bulma-components';

import logo from '../images/leopard_logo_with_text.svg';

const navbar = () => {
  return (
    // <nav class="navbar is-fixed-top has-shadow" role="navigation"
    //   style={{ 'height': "5rem", transition: 'top 0.3s' }}
    //   aria-label="main navigation" id="navbar">
    //   <div className="container">
    //     <div class="navbar-brand">
    //       <img
    //         src={logo}
    //         alt="Leopard Transport"
    //         width="250"
    //         height="4"
    //         style={{ 'max-height': "15rem" }}
    //       />

    //       <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //         <span aria-hidden="true"></span>
    //       </a>
    //     </div>
    //     <div class="navbar-menu" id="navMenu">
    //       <div class="navbar-end">
    //         <a class="navbar-item" href="/">Home</a>
    //         <a class="navbar-item" href="/about">About</a>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <Navbar style={{ 'height': "5rem", transition: 'top 0.3s' }} fixed='top'
      className="has-shadow" id="navbar">
      <div className="container">
        <Navbar.Brand >
          <Navbar.Item renderAs="a" href="/">
            <img
              src={logo}
              alt="Leopard Transport"
              width="250"
              height="4"
              style={{ maxHeight: "15rem" }}
            />
          </Navbar.Item>
          <Navbar.Burger data-target="navMenu" />
        </Navbar.Brand>
        <Navbar.Menu id="navMenu">
          <Navbar.Container position="end">
            <Navbar.Item href="/">Home</Navbar.Item>
            <Navbar.Item href="/about">About</Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </div>
    </Navbar>
  );
};

export default navbar;
