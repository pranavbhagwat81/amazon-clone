import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAcLi79YB4jSqmOJ9vBhpx7h0p69Arzs50",
  authDomain: "clone-4e32e.firebaseapp.com",
  databaseURL: "https://clone-4e32e.firebaseio.com",
  projectId: "clone-4e32e",
  storageBucket: "clone-4e32e.appspot.com",
  messagingSenderId: "70787808035",
  appId: "1:70787808035:web:a8b2365736a5a6a8696a96",
  measurementId: "G-594B0CG2YT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
