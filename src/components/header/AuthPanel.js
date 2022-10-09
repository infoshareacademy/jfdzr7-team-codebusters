import { StyledNavLink, StyledDummyNavLink } from "./Header.styled";

export const AuthPanel = (user) => {
  return (
    <>
      {user === null ? (
        <div>
          <StyledDummyNavLink>Log In</StyledDummyNavLink>
          <StyledDummyNavLink>Register</StyledDummyNavLink>
        </div>
      ) : (
        <div>
          <StyledNavLink to="/login">Log In</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </div>
      )}
    </>
  );
};
