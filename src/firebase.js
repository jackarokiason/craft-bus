import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   
    authDomain: "clone-6a5f0.firebaseapp.com",
    databaseURL: "https://clone-6a5f0.firebaseio.com",
    projectId: "clone-6a5f0",
    storageBucket: "clone-6a5f0.appspot.com",
    messagingSenderId: "133790532064",
    appId: "1:133790532064:web:83b9bcae2e319577dd2b85",
    measurementId: "G-L7YPR50WWH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebaseApp.auth();

  export{db,auth};
