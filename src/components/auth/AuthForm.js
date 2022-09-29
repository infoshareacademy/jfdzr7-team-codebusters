import React from "react";
import { InputAuthText } from "./InputAuthText";
export const AuthForm = ({
  submitText,
  isPasswordHidden = false,
  onSubmit,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <InputAuthText value="Email" name="email" type="email" id="email" />
        {!isPasswordHidden && (
          <InputAuthText
            value="Password"
            name="password"
            type="password"
            id="password"
          />
        )}
        <button>{submitText}</button>
      </form>
    </>
  );
};
