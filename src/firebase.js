import firebase from 'firebase/app ';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyC0gM5TNb9LjpKxRwFCr2QBQV4e09AfiLQ",
    authDomain: "menuacapulco-bcdba.firebaseapp.com",
    projectId: "menuacapulco-bcdba",
    storageBucket: "menuacapulco-bcdba.appspot.com",
    messagingSenderId: "242696985672",
    appId: "1:242696985672:web:3906ddf781244594e34c7d",
    measurementId: "G-4649NMS6EQ"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = fb.firestore();