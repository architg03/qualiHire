import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD8aeTnLHW_WnRrR90eiYzI9HzDkO0NGuo",
  authDomain: "qualihire-80452.firebaseapp.com",
  projectId: "qualihire-80452",
  storageBucket: "qualihire-80452.appspot.com",
  messagingSenderId: "66570110620",
  appId: "1:66570110620:web:12e76120950dffe43b8f59",
  measurementId: "G-4G92BH4L22"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firebase modules we need
export const auth = firebase.auth();
