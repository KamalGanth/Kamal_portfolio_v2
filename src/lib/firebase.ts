// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "api",
  authDomain: "kamalganth-portfolio.firebaseapp.com",
  projectId: "kamalganth-portfolio",
  storageBucket: "kamalganth-portfolio.firebasestorage.app",
  messagingSenderId: "872372500489",
  appId: "1:872372500489:web:64543ce89682c4eee860d8",
  measurementId: "G-74B5HWJQ8R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
