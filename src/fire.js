import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFO3e2M87MRqh6bFt11_23f4aaHlZ_lZ0",
  authDomain: "my-final-project-83a08.firebaseapp.com",
  projectId: "my-final-project-83a08",
  storageBucket: "my-final-project-83a08.appspot.com",
  messagingSenderId: "497926276468",
  appId: "1:497926276468:web:4117fe5888573ad1ca9821",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
