import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Food_list from './components/Food_list/Food_list'
import App1 from'./App.css'


 var y = [{name:"restaurant name"}]
 var x = [{en:"fried rice", th:"ข้าวผัด", price:"45"},
         {en:"fried rice", th:  "ข้าวผัด", price:"42"},
         {en:"fried rice", th:  "ข้าวผัด", price:"50"}]

class App extends Component {

  render() {
    return (
      <div className="App">
        {y.map(item => (<Navbar name={item.name}/>))}

        <div className = "title"> Rice </div>
        <div>
        {x.map(item => (
          <Food_list en={item.en} th={item.th} price={item.price}/>
        ))}

        <div className = "title"> Noodles </div>

        {x.map(item => (
          <Food_list en={item.en} th={item.th} price={item.price}/>
        ))}

        <div className = "title"> Noodles </div>

        {x.map(item => (
          <Food_list en={item.en} th={item.th} price={item.price}/>
        ))}


        </div>


        <main>
        </main>

      </div>
    );
  }
}

export default App;
