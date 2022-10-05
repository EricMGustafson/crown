import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxeTOs2lvmwbREgn6WFhglhetg0Mj3kEc",
  authDomain: "crown-db-f25ca.firebaseapp.com",
  projectId: "crown-db-f25ca",
  storageBucket: "crown-db-f25ca.appspot.com",
  messagingSenderId: "611745835280",
  appId: "1:611745835280:web:dccc1eba92948e834a9d95",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
