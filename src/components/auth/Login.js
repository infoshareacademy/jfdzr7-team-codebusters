import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { AuthForm } from "./AuthForm";
import { firebaseErrors } from "../../utils/firebaseErrors"
import { getFormData } from "../../utils/getFormData";
import { useContext } from "react"
import { AuthContext } from "./../../providers/AuthProvider"
import { getUser } from "./../../utils/getUser"

export const Login = () => {
  const { setUser } = useContext(AuthContext)
  const handleLogin = (e) => {
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

  return (
    <>
      <h2>Log in:</h2>
      <AuthForm submitText="Log in" onSubmit={handleLogin} />
    </>
  );
};
