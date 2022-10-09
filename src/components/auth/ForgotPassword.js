import { handlePasswordReset } from "./authHandlers";
import {
  StyledAuthHeader,
  StyledAuthPanel,
  StyledAuthWrapper,
} from "./StyledAuth";
import { AuthForm } from "./AuthForm";

export const ForgotPassword = () => {
  return (
    <StyledAuthWrapper>
      <StyledAuthPanel>
        <StyledAuthHeader>Remind password:</StyledAuthHeader>
        <AuthForm
          submitText="Remind password"
          onSubmit={(e) => handlePasswordReset(e)}
          isPasswordHidden
        />
      </StyledAuthPanel>
    </StyledAuthWrapper>
  );
};
