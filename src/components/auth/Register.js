import { AuthForm } from "./AuthForm";
import { handleRegister } from "./authHandlers";
import { StyledAuthPanel, StyledAuthHeader } from "./StyledAuth";

export const Register = () => {
  return (
    <StyledAuthPanel>
      <StyledAuthHeader>Register:</StyledAuthHeader>
      <AuthForm submitText="Register" onSubmit={(e) => handleRegister(e)} />
    </StyledAuthPanel>
  );
};
