import React from "react";
import { InputAuthText } from "./InputAuthText";
import { StyledAuthForm, StyledAuthButton } from "./StyledAuth";

export const AuthForm = ({ submitText, onSubmit, isPasswordHidden = false }) => {
  return (
    <StyledAuthForm onSubmit={onSubmit}>
      <InputAuthText value="Email" id="email" />
      {!isPasswordHidden && (
      <InputAuthText value="Password" id="password" />
      )}
      <StyledAuthButton type="submit">{submitText}</StyledAuthButton>
    </StyledAuthForm>
  );
};
