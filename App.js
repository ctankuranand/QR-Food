import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Food_list from './components/Food_list/Food_list'
import App1 from'./App.css'
var x = [{en:"friendrice", th:  "dwadad", price:"45"},
        {en:"friene", th:  "2ad", price:"4222"},
        {en:"fre", th:  "dwa3d", price:"50"}];;
class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className = "ricetitle"> Rice </div>
        <div>
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
