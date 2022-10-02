import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { firebaseErrors } from "../../utils/firebaseErrors";
import { getFormData } from "../../utils/getFormData";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
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
    .then(() => {
      e.target.reset();
      signOut(auth);
    })
    .catch((e) => {
      alert(firebaseErrors[e.code]);
    });
};
