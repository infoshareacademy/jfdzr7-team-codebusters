import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "@firebase/auth";
import { doc, setDoc } from 'firebase/firestore'

import { auth, db } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { getUser } from "./../../utils/getUser"

export const handleLogin = (e, setUser) => {
  e.preventDefault();
  const { email, password } = getFormData(e);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      e.target.reset();
      getUser(setUser, userCredential.user.uid)
    })
    .catch((e) => {
      alert(firebaseErrors[e.code]);
    });
};

export const handleRegister = (e) => {
  e.preventDefault();
  const { email, password } = getFormData(e);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      e.target.reset();
      createUserInFirebase(userCredential.user, auth)
    })
    .catch((e) => {
      alert(firebaseErrors[e.code]);
    });
};

const createUserInFirebase = (user, auth) => {
  const docRef = doc(db, 'users', user.uid)
  const newUser = {
    email: user.email,
    unreadMessages: 0,
    isAdmin: false
  }
  setDoc(docRef, newUser)
    .finally(() => signOut(auth))
}