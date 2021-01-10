import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLHQrqgqzGPOUDZAgb7TNfS43uu616AXg",
  authDomain: "fir-539ff.firebaseapp.com",
  projectId: "fir-539ff",
  storageBucket: "fir-539ff.appspot.com",
  messagingSenderId: "308887288210",
  appId: "1:308887288210:web:badc08f0b336a8b412e94b",
  measurementId: "G-CQVJTVYK78",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
