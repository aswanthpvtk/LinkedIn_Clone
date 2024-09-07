
import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIPGcWG2Q-OfqF2iuNU3W9sWQoe_aZVsU",
    authDomain: "linkedin-clone-74ae7.firebaseapp.com",
    projectId: "linkedin-clone-74ae7",
    storageBucket: "linkedin-clone-74ae7.appspot.com",
    messagingSenderId: "775322641080",
    appId: "1:775322641080:web:6512449e77744e50d68a4d",
    measurementId: "G-7J6BCBG71E"
  };

  const firebaseapp=firebase.intializeApp(firebaseConfig);
  const db=firebaseapp.firestore();
  const auth=firebase.auth();

  export{ db,auth};
