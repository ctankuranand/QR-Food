import React from 'react';

import Add_Header from './Add_Header.css'

const AddHeader = props => (
  <header className = "overall">
      <h1> Add items to menu </h1>
      <div class="topnav">
          <a class="active" id = "a1">English</a>
          <a id = "a2"> Thai  </a>
          <a id = "a3"> Price </a>
          <a id = "a4"> Description </a>
      </div>

  </header>

);

export default AddHeader;
