// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZiGwFFUMF7Dpdv-EpHucHCD-F1GxWCvA",
    authDomain: "planhead.firebaseapp.com",
    projectId: "planhead",
    storageBucket: "planhead.appspot.com",
    messagingSenderId: "544020083075",
    appId: "1:544020083075:web:c839bacbc74a9b22db86b6",
    measurementId: "G-Z1EDVQYJKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);