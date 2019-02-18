import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyADClPt6FhSUZyXDPDWgSWZmGHsJ7ClM8U",
  authDomain: "resportclub.firebaseapp.com",
  databaseURL: "https://resportclub.firebaseio.com",
  projectId: "resportclub",
  storageBucket: "",
  messagingSenderId: "567062283448"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebaseTeams = firebaseDB.ref("teams");

const firebasePlayers = firebaseDB.ref("players");
const firebasePromotions = firebaseDB.ref("promotions");

export {
  firebase,
  firebaseDB,
  firebaseMatches,
  firebasePlayers,
  firebaseTeams,
  firebasePromotions
};
