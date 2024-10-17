import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_sxXjprss8cp4le0h158ch_sSZyBIqxA",
    authDomain: "fir-auth-47851.firebaseapp.com",
    projectId: "fir-auth-47851",
    storageBucket: "fir-auth-47851.appspot.com",
    messagingSenderId: "756196929960",
    appId: "1:756196929960:web:4560020c02ce0e5896ed9d"
};

const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;