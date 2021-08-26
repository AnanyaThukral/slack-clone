import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBoDTkZGkqAcFzD7Gr58nDyFkBbUt8zRMM",
    authDomain: "slack-clone-fff69.firebaseapp.com",
    projectId: "slack-clone-fff69",
    storageBucket: "slack-clone-fff69.appspot.com",
    messagingSenderId: "1093857218329",
    appId: "1:1093857218329:web:8c153492d5bc8335afbf88",
    measurementId: "G-3KW8LD10MM"
  };

//initialize the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig)
//initialize the database
const db = firebaseApp.firestore();

//enable firebase config
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db