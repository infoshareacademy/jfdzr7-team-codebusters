import { sendPasswordResetEmail } from "@firebase/auth";
import { auth } from "../api/firebase";
import { AuthForm } from "./AuthForm";
import { firebaseErrors } from "../errors/firebaseErrors";

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
