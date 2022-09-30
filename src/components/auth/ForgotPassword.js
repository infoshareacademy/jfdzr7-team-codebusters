import { AuthForm } from "./AuthForm";
import { handlePasswordReset } from "./authHandlers";
import { StyledAuthHeader } from "./StyledAuth";

export const ForgotPassword = () => {
  return (
    <>
      <StyledAuthHeader>Remid password:</StyledAuthHeader>
      <AuthForm submitText="Remind password" onSubmit={(e) => handlePasswordReset(e)} isPasswordHidden />
    </>
  );
};
