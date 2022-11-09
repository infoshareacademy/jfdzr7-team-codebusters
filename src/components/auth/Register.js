import { AuthForm } from "./AuthForm";
import { handleRegister } from "./authHandlers";
import {
  StyledAuthPanel,
  StyledAuthHeader,
  StyledAuthWrapper,
} from "./StyledAuth";

export const Register = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthPanel>
        <StyledAuthHeader>Register:</StyledAuthHeader>
        <AuthForm submitText="Register" onSubmit={(e) => handleRegister(e)} />
      </StyledAuthPanel>
    </StyledAuthWrapper>
  );
};
