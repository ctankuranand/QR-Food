import React from 'react';

import Navbar from './Navbar.css'

const navbar = props => (
  <header className = "navbar">
    <nav>
      <div className = "navbar_logo"><a href="/"> THE LOGO </a></div>
      <div className = "navbar-items">
        <ul>
          <li><a href="/"> Products</a> </li>
          <li><a href="/">Users </a></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
