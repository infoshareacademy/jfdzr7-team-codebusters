import { sendPasswordResetEmail } from "@firebase/auth";

import { AuthForm } from "./AuthForm";
import { firebaseErrors } from "../../utils/firebaseErrors"
import { auth } from "../../api/firebase";


export const ForgotPassword = () => {
  const handlePasswordReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, e.target.email.value)
      .then(() => {
        e.target.reset();
      })
      .catch((e) => {
        alert(firebaseErrors[e.code]);
      });
  };

  return (
    <AuthForm
      submitText="Remind password"
      onSubmit={handlePasswordReset}
      isPasswordHidden
    />
  );
};
