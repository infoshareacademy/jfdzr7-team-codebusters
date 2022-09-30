import { AuthForm } from "./AuthForm";
import { handleRegister } from "./authHandlers";
export const Register = () => {
  return (
    <>
      <h2>Register:</h2>
      <AuthForm submitText="Register" onSubmit={(e) => handleRegister(e)} />
    </>
  );
};
