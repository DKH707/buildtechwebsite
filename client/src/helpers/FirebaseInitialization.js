// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACuo9ymQIUvw0S7zRPyYdLFA1BDOwKFI8",
  authDomain: "buildtechwebsite-api.firebaseapp.com",
  projectId: "buildtechwebsite-api",
  storageBucket: "buildtechwebsite-api.firebasestorage.app",
  messagingSenderId: "714908085305",
  appId: "1:714908085305:web:4895e76fe3e10b25b7b1e8",
  measurementId: "G-H8FHHPRBTX"
};

let firebaseApp; // Declare a variable to hold the initialized app
let storage;

export const initializeFirebase = () => {
  if (!firebaseApp) { // Only initialize if it hasn't been done yet
    firebaseApp = initializeApp(firebaseConfig);
    storage = getStorage(firebaseApp); // Initialize storage
    console.log("Firebase initialized!");
  }
  return { firebaseApp, storage }; // Return the initialized app and storage
};

export { storage }; // Export storage