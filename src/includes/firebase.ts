// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqPmSNrjVws0i59ta1id_6CY3M8wmprsk",
  authDomain: "manga-comparator.firebaseapp.com",
  projectId: "manga-comparator",
  storageBucket: "manga-comparator.appspot.com",
  messagingSenderId: "421865479828",
  appId: "1:421865479828:web:3656557d1d64fb395bde81",
  measurementId: "G-5V0Z2MRGD6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
