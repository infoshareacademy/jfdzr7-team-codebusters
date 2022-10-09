import React from "react";
import { StyledAuthForm, StyledAuthButton } from "./StyledAuth";
import { InputAuthText } from "./InputAuthText";

export const AuthForm = ({
  submitText,
  onSubmit,
  isPasswordHidden = false,
}) => {
  return (
    <StyledAuthForm onSubmit={onSubmit}>
      <InputAuthText value="Email" id="email" />
      {!isPasswordHidden && <InputAuthText value="Password" id="password" />}
      <StyledAuthButton type="submit">{submitText}</StyledAuthButton>
    </StyledAuthForm>
  );
};
