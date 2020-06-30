
import React from 'react';

import Add_Item from './Add_Item.css'

import firebase from "firebase";

const AddItem = props => (
  <header>
    <div float = "left" className = "overall1">
      <input type = "text" placeholder ="English Name" id = "english"></input>
      <input type = "text" placeholder ="Thai Name" id = "thai"></input>
      <input type = "number" placeholder ="Price" id = "price"></input>
      <input type = "text" placeholder ="Description" id = "description" ></input>
      <button onclick = "writeData()"> Submit </button>
  </div>

  </header>

);

export default AddItem;
