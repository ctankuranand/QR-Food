import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyArKCx_BSl0uTpMAVc5A6M8dhEiEcjAthM",
  authDomain: "food-qr.firebaseapp.com",
  databaseURL: "https://food-qr.firebaseio.com",
  projectId: "food-qr",
  storageBucket: "food-qr.appspot.com",
  messagingSenderId: "309343157361",
  appId: "1:309343157361:web:159bd2bd7f9fc521baafd0",
  measurementId: "G-4Z5XSTRC76"
});
const db = firebaseApp.firestore();

  /**function writeData(){
    firebase.database().ref("Menu").set({
      en:document.getElementById("english"),
      th:document.getElementById("thai"),
      price:document.getElementById("price"),
      description:document.getElementById("description"),
    })
  }**/


export { db };
