import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

import { auth, db } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { getUser } from "./../../utils/getUser";
import { sendPasswordResetEmail } from "@firebase/auth";

export const handleLogin = (e, setUser, setIsAuth) => {
  e.preventDefault();

  const { email, password } = getFormData(e);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      e.target.reset();
      getUser(setUser, userCredential.user.uid, setIsAuth);
    })
    .catch((e) => {
      alert(firebaseErrors[e.code]);
    });
};

export const handlePasswordReset = (e) => {
  e.preventDefault();
  sendPasswordResetEmail(auth, e.target.email.value)
    .then(() => {
      e.target.reset();
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
      createUserInFirebase(userCredential.user, auth);
    })
    .catch((e) => {
      alert(firebaseErrors[e.code]);
    });

  const collectionRef = collection(db, "users");

  const data = {
    email: { email },
    isAdmin: false,
  };

  addDoc(collectionRef, data);
};

const createUserInFirebase = (user, auth) => {
  const docRef = doc(db, "users", user.uid);
  const newUser = {
    email: user.email,
    unreadMessages: 0,
    isAdmin: false,
    address: {
      city: '',
      street: ''
    },
    name: '',
    surname: '',
    phone: ''
  }
  setDoc(docRef, newUser)
    .finally(() => signOut(auth))
}