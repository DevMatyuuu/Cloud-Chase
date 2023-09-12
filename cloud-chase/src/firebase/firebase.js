import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATosUJ7UsCIwgl2Js2bcBVaI1XrKJEeIE",
  authDomain: "cloud-chase-be84a.firebaseapp.com",
  projectId: "cloud-chase-be84a",
  storageBucket: "cloud-chase-be84a.appspot.com",
  messagingSenderId: "466641000715",
  appId: "1:466641000715:web:2e0032e740bdde5a25aa0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);