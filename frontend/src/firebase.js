import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAKBt4t49s-0_XjFgruaAhDQjLfJqlP4To",
    authDomain: "market-scope-a50ef.firebaseapp.com",
    projectId: "market-scope-a50ef",
    storageBucket: "market-scope-a50ef.firebasestorage.app",
    messagingSenderId: "543956486116",
    appId: "1:543956486116:web:27522853ac25215f77a9f1",
    measurementId: "G-RKYR27JFE1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);