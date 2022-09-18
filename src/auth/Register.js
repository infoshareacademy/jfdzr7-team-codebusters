import { auth } from "../api/firebase";
import { AuthForm } from "./AuthForm";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseErrors } from "../utils/firebaseErrors"
import { getFormData } from "../utils/getFormData";

export const Register = () => {
  const handleRegister = (e) => {
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

  return (
    <>
      <h2>Register:</h2>
      <AuthForm submitText="Register" onSubmit={handleRegister} />
    </>
  );
};
