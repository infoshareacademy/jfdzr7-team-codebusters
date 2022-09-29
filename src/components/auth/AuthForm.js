import React from "react";
import { InputAuthText } from "./InputAuthText";
export const AuthForm = ({ submitText, onSubmit, isPasswordHidden = false }) => {
  return (
      <form onSubmit={onSubmit}>
        <InputAuthText value="Email" id="email" />
        {!isPasswordHidden && (
        <InputAuthText value="Password" id="password" />
        )}
        <button type="submit">{submitText}</button>
      </form>
  );
};
