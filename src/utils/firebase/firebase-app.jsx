import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6vXhMD29XZBcMMXhXn-23fTDiRXYvxYM",
  authDomain: "crwn-clothing-db-7d85d.firebaseapp.com",
  projectId: "crwn-clothing-db-7d85d",
  storageBucket: "crwn-clothing-db-7d85d.appspot.com",
  messagingSenderId: "691531241316",
  appId: "1:691531241316:web:d7821e694635750c61cc71",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};