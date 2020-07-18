import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Food_list from './components/Food_list/Food_list'
import App1 from'./App.css'
import AddItem from './components/Add_Item/Add_Item'
import AddHeader from './components/Add_Item/Add_Header'
import { db } from "./firebasedb";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Menu from './components/Menu/Menu';

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
      storeNames:[],
    };
  }

  componentDidMount() {
    db.collection("Menus")
    .get()
    .then(querySnapshot => {
      const data = querySnapshot.docs.map(doc => doc.data());
      this.setState({ name: data[0].StoreName,
                      menu: data[0].menu,
                      storeNames: data.map(store => store.StoreName),
                      selectedStore: data[0].StoreName,
                    });
      console.log(this.state.storeNames)

    });

  }

    updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
      e.preventDefault();
     //TODO: read document from firestore and assign as a variable
     let menu = this.state.menu;

     //TODO: create a item (map)
     let item = {
       th: document.getElementById("thai").value,
       en:document.getElementById("english").value,
       price:document.getElementById("price").value,
       des:document.getElementById("description").value,
       addon: document.getElementById("addon").value

     };
     //TODO: append tot the menu array
     menu.push(item)
     //TODO: set new document
     this.state.menu = menu;

     console.log("Set new data");
     const userRef = db.collection("Menus").doc("one").set({
       menu: this.state.menu
   });
   document.getElementById("english").value = '';
   document.getElementById("thai").value = '';
   document.getElementById("price").value = '';
   document.getElementById("description").value = '';
   document.getElementById("addon").value = '';
  };

  changeStore = e => {
    e.preventDefault();
    //change state to value of selectStore
    this.setState ({
      selectedStore: document.getElementById("StoreSelect").value
    }, () => {
      console.log(this.state.selectedStore)
    });

  }

  Home(){
    return <h2>Home</h2>;
  }

  About(){
    return <h2> Add item</h2>;
  }

  render() {
    return (
      <div className="App">


        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about"> Add Item </Link>
              </li>
            </ul>
          </nav>

        <Switch>


          <Route path="/about">
            <AddHeader names = {this.state.storeNames} changeStore = {this.changeStore}/>
              <AddItem callback={this.addUser}/>
              <AddItem callback={this.addUser}/>
              <AddItem callback={this.addUser}/>
              <AddItem callback={this.addUser}/>
          </Route>

          <Route path="/">
            <Navbar name={this.state.name}/>
            <div>{this.state.menu.map(item => (
              <Food_list en={item.en} th={item.th} price={item.price} des={item.des} addon = {item.addon}/>
            ))}
            </div>
          </Route>


        </Switch>
       </div>
      </Router>

        <div className = "title">  </div>

        <main>
        </main>

      </div>
    );
  }
}

export default App;
