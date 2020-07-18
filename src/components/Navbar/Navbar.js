import React from 'react';
import Navbar from './Navbar.css'
import { Link } from 'react-router'

var x = ["restuarant name"]

const navbar = props => (
  <header className = "navbar">
    <nav>
      <div className = "navbar_logo"><a href="/"> {props.name} </a></div>
    </nav>
  </header>
);

export default navbar;
