import React from "react";

export const AuthForm = ({
  submitText,
  isPasswordHidden = false,
  onSubmit,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Podaj email</label>
          <input type="email" name="email" id="email" />
        </div>
        {!isPasswordHidden && (
          <div>
            <label htmlFor="password">Podaj hasło</label>
            <input type="password" name="password" id="password" />
          </div>
        )}
        <button>{submitText}</button>
      </form>
    </>
  );
};
