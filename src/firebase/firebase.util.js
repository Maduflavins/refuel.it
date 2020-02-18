import firebase, { initializeApp } from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDssT8UMWDvsU7p5YtX38ezN5D7h6SiSbw",
    authDomain: "refuel-it.firebaseapp.com",
    databaseURL: "https://refuel-it.firebaseio.com",
    projectId: "refuel-it",
    storageBucket: "refuel-it.appspot.com",
    messagingSenderId: "384966895834",
    appId: "1:384966895834:web:58f71dba96eb3c27a35de3",
    measurementId: "G-JHFBBX47KL"
  };

//   const firebaseConfig = {
//     apiKey: "AIzaSyDssT8UMWDvsU7p5YtX38ezN5D7h6SiSbw",
//     authDomain: "refuel-it.firebaseapp.com",
//     databaseURL: "https://refuel-it.firebaseio.com",
//     projectId: "refuel-it",
//     storageBucket: "refuel-it.appspot.com",
//     messagingSenderId: "384966895834",
//     appId: "1:384966895834:web:58f71dba96eb3c27a35de3",
//     measurementId: "G-JHFBBX47KL"
//   };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;