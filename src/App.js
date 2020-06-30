import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Food_list from './components/Food_list/Food_list'
import App1 from'./App.css'
import AddItem from './components/Add_Item/Add_Item'
import AddHeader from './components/Add_Item/Add_Header'
import { db } from "./firebasedb";

/**
 var y = [{name:"restaurant name"}]
 var x = [{en:"fried rice", th:"ข้าวผัด", price:"45"},
         {en:"fried rice", th:  "ข้าวผัด", price:"42"},
           {en:"fried rice", th:  "ข้าวผัด", price:"50"}] */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      menu:[],
      dogtest: ""
    };
  }

  componentDidMount() {
    db.collection("Menus")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      console.log(data[0].StoreName);
      console.log(data[0].Menu[0]);
      this.setState({ name: data[0].StoreName,
                      menu: data[0].Menu});
    });
  }

  updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

addUser = e => {
  e.preventDefault();
  db.settings({
   timestampsInSnapshots: true
 });
 const userRef = db.collection("Menus").add({
   dogtest22: document.getElementById("idone").value
 });
  this.setState({
    dogtest: ""
  });
};



  render() {
    return (
      <div className="App">
        <Navbar name={this.state.name}/>

        <div className = "title">  </div>
        <div>
        {this.state.menu.map(item => (
          <Food_list en={item.en} th={item.th} price={item.price} des = {item.des}/>
        ))}
        <AddHeader/>
        <AddItem/>
        <AddItem/>
        <AddItem/>
        <AddItem/>
        <AddItem/>

        <form onSubmit={this.addUser}>
         <input
           type="text"
           placeholder="placeholder"
           onChange ={this.updateInput}
           defaultValue = {this.state.dogtest}
           id = "idone"
         />
         <button type="submit">Submit</button>
       </form>

        </div>


        <main>
        </main>

      </div>
    );
  }
}

export default App;
