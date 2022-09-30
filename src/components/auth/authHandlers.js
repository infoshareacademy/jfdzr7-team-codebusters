import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { auth } from "../../api/firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { sendPasswordResetEmail } from "@firebase/auth";

export const handleLogin = (e) => {
  e.preventDefault();
  const { email, password } = getFormData(e);
  signInWithEmailAndPassword(auth, email, password)
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
    .then(() => {
      e.target.reset();
      signOut(auth);
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