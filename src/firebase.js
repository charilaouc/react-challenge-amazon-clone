import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdRdSF0wAa7O4KciOvS_UpHOPvZwlbZOw",
  authDomain: "cosmosplatform-5ea79.firebaseapp.com",
  databaseURL: "https://cosmosplatform-5ea79.firebaseio.com",
  projectId: "cosmosplatform-5ea79",
  storageBucket: "cosmosplatform-5ea79.appspot.com",
  messagingSenderId: "709729139126",
  appId: "1:709729139126:web:beb252990d999f14d42917",
  measurementId: "G-4RZ41GY954"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
