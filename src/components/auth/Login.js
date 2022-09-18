import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { AuthForm } from "./AuthForm";
import { firebaseErrors } from "../../utils/firebaseErrors"
import { getFormData } from "../../utils/getFormData";

export const Login = () => {
  const handleLogin = (e) => {
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

  return (
    <>
      <h2>Log in:</h2>
      <AuthForm submitText="Log in" onSubmit={handleLogin} />
    </>
  );
};
