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
/*  // Add a new document in collection "cities"
  db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
  .then(function() {
    console.log("Document successfully written!");
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
  });

  // get the whole collection
  db.collection("cities")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
  });

  // or get the single doc from the collection
  db.collection("cities")
  .doc('LA')
  .get()
  .then(doc => {
    const data = doc.data();
    console.log(data); // LA city object with key-value pair
  });

  // or get all docs matching the query
  db.collection("cities")
  .where("country", "==", "USA")
  .get()
  .then(querySnapshot => {
    const data = querySnapshot.docs.map(doc => doc.data());
    console.log(data); // array of cities objects
  });
*/
export { db };
