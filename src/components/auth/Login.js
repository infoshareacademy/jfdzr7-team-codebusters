import { AuthForm } from "./AuthForm";
import { handleLogin } from "./authHandlers";

export const Login = () => {
  return (
    <>
      <h2>Log in:</h2>
      <AuthForm submitText="Log in" onSubmit={(e) => handleLogin(e)} />
    </>
  );
};
