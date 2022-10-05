import { AuthForm } from "./AuthForm";
import { handleLogin } from "./authHandlers";
import { useContext } from "react"
import { AuthContext } from "./../../providers/AuthProvider"

export const Login = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <>
      <h2>Log in:</h2>
      <AuthForm submitText="Log in" onSubmit={(e) => handleLogin(e, setUser)} />
    </>
  );
};
