import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAKY4zBuNLz3sIs3Vyk-5qPErKfKB0kRjs",
  authDomain: "vacay-vibes.firebaseapp.com",
  projectId: "vacay-vibes",
  storageBucket: "vacay-vibes.appspot.com",
  messagingSenderId: "1058704961080",
  appId: "1:1058704961080:web:d487bef99528e454b540cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;