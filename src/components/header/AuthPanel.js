import { StyledNavLink } from "./Header.styled"

export const AuthPanel = () => {
    return (
        <div>
            <StyledNavLink to="/login">Log In</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
        </div>
    )
}