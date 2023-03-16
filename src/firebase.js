import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQn6L_lo2ksZz4LnwmR8gYL2c8NZ5dJg8",
  authDomain: "linkedin-clone-mk-99af8.firebaseapp.com",
  projectId: "linkedin-clone-mk-99af8",
  storageBucket: "linkedin-clone-mk-99af8.appspot.com",
  messagingSenderId: "608476097107",
  appId: "1:608476097107:web:1224cebfd7ddcb78deb4a6",
};

const app = initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
