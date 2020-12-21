import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCBd-8QueYqOe5iGRNU90MP5svegkgqzdE",
    authDomain: "challenge-af35c.firebaseapp.com",
    databaseURL: "https://challenge-af35c.firebaseio.com",
    projectId: "challenge-af35c",
    storageBucket: "challenge-af35c.appspot.com",
    messagingSenderId: "256225070447",
    appId: "1:256225070447:web:4dec1dbe578bd0af8eec9a",
    measurementId: "G-VTQMDNTFY3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

 export const provider = new firebase.auth.GoogleAuthProvider();
 
export const firestore = firebase.firestore();

export default firebase;