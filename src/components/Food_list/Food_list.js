import React from 'react';

import Food_list from './Food_list.css'

const Foodlist = props => (
  <header className = "overall">
    <hr className="topline" width="55%"/>
    <div className = "overall2">
      <div className="food_name"> {props.en} </div>
      <div className="thai_name"> {props.th} </div>
      <div className="price"> ฿ {props.price} </div>
    </div>
      <div className="food_des"> {props.des} </div>
      <div className ="add_ons"> {props.addon} </div>

  </header>

);

export default Foodlist;
