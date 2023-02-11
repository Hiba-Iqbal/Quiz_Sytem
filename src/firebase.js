import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAK5KbzsOBag1_OYGsKSLQ7QZBNcMKay1w",
  authDomain: "quiz-4bc1b.firebaseapp.com",
  databaseURL: "https://quiz-4bc1b-default-rtdb.firebaseio.com",
  projectId: "quiz-4bc1b",
  storageBucket: "quiz-4bc1b.appspot.com",
  messagingSenderId: "233327227929",
  appId: "1:233327227929:web:3becf6ebc53fafb94b6688",
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const quizRef = databaseRef.child("quiz");
export default firebase;
