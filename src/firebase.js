// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDLsGlBY-1NlD7yzXMtdP7siaN3H1Firg4",
  authDomain: "tic-tok-clone-b5fce.firebaseapp.com",
  databaseURL: "https://tic-tok-clone-b5fce.firebaseio.com",
  projectId: "tic-tok-clone-b5fce",
  storageBucket: "tic-tok-clone-b5fce.appspot.com",
  messagingSenderId: "298154702956",
  appId: "1:298154702956:web:c10a394dd5669fd0b24049",
  measurementId: "G-YNJNJJ1X5R"
};

const firebaseApp = firebase.initializeApp
(firebaseConfig);

const db = firebaseApp.firestore();



export default db;