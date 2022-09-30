import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

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
