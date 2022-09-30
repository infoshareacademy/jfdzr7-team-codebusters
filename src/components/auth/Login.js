import { AuthForm } from "./AuthForm";
import { ForgotPassword } from "./ForgotPassword";
import { handleLogin } from "./authHandlers";
import { useState } from "react";
import { StyledAuthPanel, StyledAuthHeader, StyledLink } from "./StyledAuth";

export const Login = () => {
  const [isShown, setIsShown] = useState(false);
  const showPasswordRemider = (e) => {
    e.preventDefault()
    setIsShown(current => !current);
  }

  return (
    <StyledAuthPanel>
      <StyledAuthHeader>Log in:</StyledAuthHeader>
      <AuthForm submitText="Log in" onSubmit={(e) => handleLogin(e)} />
      <StyledLink href="" onClick={(e) =>showPasswordRemider(e)}>Forgot password?</StyledLink>
      {isShown && <ForgotPassword/>}
    </StyledAuthPanel>
  );
};
