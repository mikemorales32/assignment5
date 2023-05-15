import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDoWLnj7OQrFQW3Pgxc7DwVXKFGE5l-v6k",

  authDomain: "quitter2-1c4c9.firebaseapp.com",

  projectId: "quitter2-1c4c9",

  storageBucket: "quitter2-1c4c9.appspot.com",

  messagingSenderId: "796346195761",

  appId: "1:796346195761:web:9c6d8336ab97256ec31a10"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
