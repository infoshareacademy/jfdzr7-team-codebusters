import { useContext } from "react";
import { ForgotPassword } from "./ForgotPassword";
import { AuthForm } from "./AuthForm";
import { handleLogin } from "./authHandlers";
import { AuthContext } from "./../../providers/AuthProvider";
import { useState } from "react";
import {
  StyledAuthPanel,
  StyledAuthHeader,
  StyledLink,
  StyledAuthWrapper,
} from "./StyledAuth";

export const Login = () => {
  const { setUser } = useContext(AuthContext);
  return (
    <StyledAuthWrapper>
      <StyledAuthPanel>
        <StyledAuthHeader>Log in:</StyledAuthHeader>
        <AuthForm
          submitText="Log in"
          onSubmit={(e) => handleLogin(e, setUser)}
        />
        <StyledLink to="/forgotPassword">Forgot password?</StyledLink>
      </StyledAuthPanel>
    </StyledAuthWrapper>
  );
};
